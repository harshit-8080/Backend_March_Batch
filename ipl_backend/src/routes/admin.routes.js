const express = require("express");
const AdminControlller = require("../controllers/admin.controller");

const AdminRouter = express.Router();

// create admin or Signup api
AdminRouter.post("/admin/signup", AdminControlller.signup);

//get all admin
AdminRouter.get("/admins", AdminControlller.getAllAdmins);


module.exports = AdminRouter;
