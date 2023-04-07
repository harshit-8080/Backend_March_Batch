const Admin = require("../models/admin.model");
const { generateSalt, hashPassword } = require("../services/password");

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

module.exports = {
  signup,
  getAllAdmins,
};
