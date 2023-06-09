const express = require("express");
const jwt = require("jsonwebtoken");
const AdminControlller = require("../controllers/admin.controller");
require("dotenv").config();
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

const AdminRouter = express.Router();

//middleware
const verifyToken = async (req, res, next) => {
  const token = req.get("Authorization");
  //   console.log("Token: ", token.split(" ")[1]);

  if (token) {
    // verify the token
    const payload = await jwt.verify(token.split(" ")[1], JWT_SECRET_KEY);
    if (payload) {
      console.log(payload.email);
      req.email = payload.email;
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

// Request OTP
AdminRouter.get(
  "/request/otp",
  verifyToken,
  AdminControlller.requestAndSentOTP
);

// verify otp
AdminRouter.post("/verify/otp", verifyToken, AdminControlller.verifyOTP);

module.exports = AdminRouter;
