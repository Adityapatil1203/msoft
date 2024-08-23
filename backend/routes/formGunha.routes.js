const express = require('express');
const { addGunhaDetails } = require('../controllers/allGunhaController.js');

const router = express.Router();

router.post('/addGunha', addGunhaDetails);

module.exports = router;