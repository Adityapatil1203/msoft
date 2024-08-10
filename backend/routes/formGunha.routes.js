const express = require('express');
const { addGunhaDetails } = require('../controllers/formGunhaController.js');

const router = express.Router();

router.post('/addGunha', addGunhaDetails);

module.exports = router;