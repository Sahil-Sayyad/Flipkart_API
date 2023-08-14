const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const User = require("../models/user");
const jwt = require("jsonwebtoken");
//@doc Register a user
//@route POST  /api/user/register
//@access public
const registerUser = asyncHandler(async (req, res) => {

  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    res.status(400);
    throw new Error("All fileds are mandetory");
  }
  const userAvailable = await User.findOne({ email });
  if (userAvailable) {
    res.status(400);
    throw new Error("user already registered!");
  }
  //hash the password before saving to db
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({
    username,
    email,
    password: hashedPassword,
  });
  if (user) {
    res.status(201).json({ _id: user.id, email: user.email });
  } else {
    res.status(400);
    throw new Error("User data is not Valid");
  }
});

//@doc Login a user
//@route POST  /api/user/login
//@access public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("All fileds are mandetory");
  }

  const user = await User.findOne({ email });
  //compare user password and hashed password saved in db
  if (user && (await bcrypt.compare(password, user.password))) {
    const accessToken = jwt.sign(
      {
        user: {
          username: user.username,
          email: user.email,
          id: user.id,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "30m" }
    );

    res.status(200).json({ accessToken });
  } else {
    res.status(400);
    throw new Error("email or password is not valid");
  }
});

module.exports = { registerUser, loginUser };
