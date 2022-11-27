const express = require("express");
const router = express.Router();
const FormController = require("../controllers/FormController");

router.post("/submit", FormController);

module.exports = router;
