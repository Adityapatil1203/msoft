// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/auth.controller.js');
const { registerValidation, loginValidation } = require('../utils/validators.js');
const validate = require('../middlewares/validate.js');
const upload = require('../middlewares/upload.js');

router.post('/register',upload ,  registerValidation, validate, register);
router.post('/login', loginValidation, validate, login);

module.exports = router;