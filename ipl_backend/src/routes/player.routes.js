const express = require("express");
const PlayerController = require("../controllers/player.controller");

// creating router
const PlayerRouter = express.Router();

PlayerRouter.get("/player/test", PlayerController.playerTest);

module.exports = PlayerRouter;
