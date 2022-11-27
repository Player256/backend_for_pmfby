const express = require('express');
const farmerDetails = require('../controllers/InsuranceController');

const router = express.Router();

router.get('/' ,farmerDetails);

module.exports = router;