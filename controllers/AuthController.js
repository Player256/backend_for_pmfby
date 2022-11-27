const UserModel = require("../models/User");
const jwt = require("jsonwebtoken");

 const signUpUser = async (req, res) => {
  const { email } = req.body;

  const newUser = new UserModel(req.body);

  try {
    const checkUser = await UserModel.findOne({ email });
    if (checkUser) {
      return res.status(401).json({ message: "Email already exists" });
    }

    const user = await newUser.save();
    

    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

 const signInUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await UserModel.findOne({ username: username });
    if (user) {
      if (user.password === password) {
        const token = jwt.sign(
          { username: username, id: user._id },
          process.env.JWT_KEY,
          {
            expiresIn: "10h",
          }
        );
        res.status(200).json({ user, token });
      }
    } else {
      res.status(401).json("User Not Found!!!");
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {signInUser , signUpUser};
