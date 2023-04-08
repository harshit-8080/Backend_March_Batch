const express = require("express");
const jwt = require("jsonwebtoken");
const AdminControlller = require("../controllers/admin.controller");
require("dotenv").config();
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

const AdminRouter = express.Router();

const verifyToken = async (req, res, next) => {
  const token = req.get("Authorization");
  //   console.log("Token: ", token.split(" ")[1]);

  if (token) {
    // verify the token
    const payload = await jwt.verify(token.split(" ")[1], JWT_SECRET_KEY);
    if (payload) {
      next();
    } else {
      return res.json({ Message: "User not allowed" });
    }
  } else {
    return res.json({ Message: "invalid token" });
  }
};

// create admin or Signup api
AdminRouter.post("/admin/signup", AdminControlller.signup);

// login api
AdminRouter.post("/admin/login", AdminControlller.login);

//get all admin
AdminRouter.get("/admins", verifyToken, AdminControlller.getAllAdmins);

module.exports = AdminRouter;
