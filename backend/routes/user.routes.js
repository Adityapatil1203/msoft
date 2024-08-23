// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const { register, login , updateUser } = require('../controllers/auth.controller.js');
const { registerValidation, loginValidation } = require('../utils/validators.js');
const validate = require('../middlewares/validate.js');
// const {uploadPhoto} = require('../middlewares/upload.js');
const uploadPhoto = require('../middlewares/uploadPhoto.js')

router.post('/register',uploadPhoto , register);
router.post('/login', loginValidation, validate, login);
router.post('/update',updateUser)

module.exports = router;