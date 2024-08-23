const jwt = require('jsonwebtoken');
// const pool = require('../config/db'); // Adjust the path as needed
const pool = require('../db/db.js')

const authMiddleware = async (req, res, next) => {
  // Get the token from the header
  const token = req.header('Authorization');

  // Check if there is no token
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Extract the user ID from the token
    const userId = decoded.user.id;

    // Fetch user details from the database using the user ID
    const connection = await pool.getConnection();
    const [rows] = await connection.execute('SELECT * FROM empreg WHERE id = ?', [userId]);
    connection.release();

    if (rows.length === 0) {
      return res.status(401).json({ msg: 'User not found, authorization denied' });
    }

    // Assign the user from the database to the request object
    req.user = rows[0];

    next(); // Move to the next middleware or route handler
  } catch (err) {
    console.error(err.message);
    res.status(401).json({ msg: 'Token is not valid' });
  }
};

module.exports = authMiddleware;
