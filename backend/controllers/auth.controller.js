// // controllers/authController.js
// const User = require('../models/user.modal.js');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');

// const register = async (req, res) => {
//   const { name, dob, designation, department, mobile, password, state, district, taluka, pinCode, postingPlace, zone, division } = req.body;
//   const photo = req.file ? req.file.path : null;

//   try {
//     let user = await User.findOne({ mobile });
//     if (user) {
//       return res.status(400).json({ msg: 'User already exists' });
//     }

//     user = new User({
//       name,
//       dob,
//       designation,
//       department,
//       mobile,
//       password,
//       state,
//       district,
//       taluka,
//       pinCode,
//       postingPlace,
//       zone,
//       division,
//       photo // Save photo path
//     });

//     const salt = await bcrypt.genSalt(10);
//     user.password = await bcrypt.hash(password, salt);

//     await user.save();

  
//       res.status(200).json({ msg:"User created successfully" });
 
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server error');
//   }
// };

// const login = async (req, res) => {
//   const { mobile, password } = req.body;

//   try {
//     let user = await User.findOne({ mobile });
//     if (!user) {
//       return res.status(400).json({ msg: 'Invalid Credentials' });
//     }

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(400).json({ msg: 'Invalid Credentials' });
//     }

//     const payload = {
//       user: {
//         id: user.id,
//       },
//     };

//     jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' }, (err, token) => {
//       if (err) throw err;
//       res.json({ token , user });
//     });
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server error');
//   }
// };

// module.exports = { register, login };

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const pool = require('../db/db.js'); // Import the connection pool

// Register a new user
const register = async (req, res) => {
  const { name, dob, designation, state, district, taluka, pincode, postingPlace, mobile, password, confirmPassword } = req.body;
  const photo = req.file ? req.file.path : null;

  console.log(name, dob, designation, state, district, taluka, pincode, postingPlace, mobile, password, confirmPassword);

  try {
    // Get a connection from the pool
    const connection = await pool.getConnection();
    
    try {
      // Check if user already exists
      const [existingUser] = await connection.execute('SELECT * FROM empreg WHERE mobile = ?', [mobile]);
      if (existingUser.length > 0) {
        return res.status(400).json({ msg: 'User already exists' });
      }

      // Validate password and confirmPassword match
      if (password !== confirmPassword) {
        return res.status(400).json({ msg: 'Passwords do not match' });
      }

      // Hash password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      // Insert new user into database
      const [result] = await connection.execute(
        `INSERT INTO empreg 
        (name, dob, designation, state, district, taluka, pincode, postingPlace, mobile, password, photo) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [name, dob, designation, state, district, taluka, pincode, postingPlace, mobile, hashedPassword, photo]
      );

      res.status(200).json({ msg: "User created successfully", userId: result.insertId });
    } finally {
      // Release the connection back to the pool
      connection.release();
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Login user
const login = async (req, res) => {
  const { mobile, password } = req.body;

  try {
    // Get a connection from the pool
    const connection = await pool.getConnection();
    
    try {
      // Check if user exists
      const [rows] = await connection.execute('SELECT * FROM empreg WHERE mobile = ?', [mobile]);
      const user = rows[0];
      if (!user) {
        return res.status(400).json({ msg: 'Invalid Credentials' });
      }

      // Compare password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ msg: 'Invalid Credentials' });
      }

      // Create JWT payload and sign token
      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' }, (err, token) => {
        if (err) throw err;
        res.json({ token, user });
      });
    } finally {
      // Release the connection back to the pool
      connection.release();
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

module.exports = { register, login };
