// controllers/authController.js
const User = require('../models/user.modal.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
  const { name, dob, designation, department, mobile, password, state, district, taluka, pinCode, postingPlace, zone, division } = req.body;
  const photo = req.file ? req.file.path : null;

  try {
    let user = await User.findOne({ mobile });
    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    user = new User({
      name,
      dob,
      designation,
      department,
      mobile,
      password,
      state,
      district,
      taluka,
      pinCode,
      postingPlace,
      zone,
      division,
      photo // Save photo path
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();

  
      res.status(200).json({ msg:"User created successfully" });
 
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

const login = async (req, res) => {
  const { mobile, password } = req.body;

  try {
    let user = await User.findOne({ mobile });
    if (!user) {
      return res.status(400).json({ msg: 'Invalid Credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid Credentials' });
    }

    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' }, (err, token) => {
      if (err) throw err;
      res.json({ token });
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

module.exports = { register, login };
