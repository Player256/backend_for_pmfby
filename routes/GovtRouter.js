const GovtController = require('../controllers/GovtController');
const express = require("express");

const router = express.Router();

router.get('/' , GovtController);

module.exports = router;