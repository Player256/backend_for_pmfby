const express = require("express");
const { signInUser,signUpUser,signOutUser } = require("../controllers/AuthController");
const router = express.Router();


router.post('/signup',signUpUser);
router.post('/signin',signInUser);


module.exports = router;
