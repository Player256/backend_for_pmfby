const FarmerController = require('../router/FarmerController');
const express = require('express');


const router = express.Router();


router.post('/',FarmerController);

module.exports = router;