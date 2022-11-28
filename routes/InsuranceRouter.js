const express = require('express');
const clientDetails = require('../controllers/InsuranceController');

const router = express.Router();

router.get('/' ,clientDetails);

module.exports = router;