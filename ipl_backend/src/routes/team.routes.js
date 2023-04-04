const express = require("express");
const TeamController = require("../controllers/team.controller");

/// creating router
const TeamRouter = express.Router();

/// get api for team test
TeamRouter.get("/team/test", TeamController.teamTest);

module.exports = TeamRouter;
