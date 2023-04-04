const express = require("express");
const TeamController = require("../controllers/team.controller");

/// creating router
const TeamRouter = express.Router();

// /// get api for team test
// TeamRouter.get("/team/test", TeamController.teamTest);

////////////////////////////////////////////////////////////////////////////////////////////////
// api to create a team
TeamRouter.post("/team", TeamController.createTeam);

// api to get all team
TeamRouter.get("/team", TeamController.getAllTeams);

module.exports = TeamRouter;
