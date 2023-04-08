const Admin = require("../models/admin.model");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

const {
  generateSalt,
  hashPassword,
  decodePassword,
} = require("../services/password");

const signup = async (req, res) => {
  try {
    const users = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      contact: req.body.contact,
    };

    const salt = generateSalt(); // generate salt
    users.password = hashPassword(req.body.password, salt); // hash your password

    const user = await Admin.create(users);

    res.json({ Message: user });
  } catch (error) {
    console.error(error);
    res.json({ Message: "Internal server error" });
  }
};

const getAllAdmins = async (req, res) => {
  try {
    const users = await Admin.find();
    res.json({ Message: users });
  } catch (error) {
    res.json({ Message: "Internal server error" });
  }
};

const login = async (req, res) => {
  // this line will check if email is valid or not...
  const checkuser = await Admin.findOne({ email: req.body.email });
  if (checkuser) {
    // this line will check if given password is same as hashed password or not...
    const checkPassword = decodePassword(req.body.password, checkuser.password);

    if (checkPassword) {
      // if checkPassword is true then login
      const email = checkuser.email;

      // creating jwt token
      const token = jwt.sign({ email }, JWT_SECRET_KEY, { expiresIn: "5d" });

      return res.json({
        Message: "You are now logged in",
        Token: token,
      });
    } else {
      // if checkPassword is false then password is invalid
      return res.json({ Message: "Your password is incorrect" });
    }
  } else {
    return res.json({ Message: "user/emailId not found" });
  }
};

module.exports = {
  signup,
  getAllAdmins,
  login,
};
