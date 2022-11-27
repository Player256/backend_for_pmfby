const GovtController = require('../controllers/GovtController');
const express = require("express");

const router = express.Router();

router.post('/' , GovtController);

module.exports = router;