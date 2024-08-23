const express = require('express');
const { addAksmatDetails } = require('../controllers/allGunhaController.js')

const router = express.Router();

router.post('/addAksmat',addAksmatDetails );

module.exports = router;