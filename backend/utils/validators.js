// utils/validators.js
const { check } = require('express-validator');

const registerValidation = [
  check('name', 'Name is required').not().isEmpty(),
  check('dob', 'Date of Birth is required').not().isEmpty(),
  check('designation', 'Designation is required').not().isEmpty(),
  check('department', 'Department is required').not().isEmpty(),
  check('mobile', 'Mobile number is required').not().isEmpty(),
  check('password', 'Password is required').isLength({ min: 6 }),
];

const loginValidation = [
  check('mobile', 'Mobile number is required').not().isEmpty(),
  check('password', 'Password is required').not().isEmpty(),
];

module.exports = {
  registerValidation,
  loginValidation,
};
