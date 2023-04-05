const express = require("express");
const PlayerController = require("../controllers/player.controller");

// creating router
const PlayerRouter = express.Router();

// PlayerRouter.get("/player/test", PlayerController.playerTest);

// create a player
PlayerRouter.post("/player", PlayerController.createPlayer);

// get all player
PlayerRouter.get("/player", PlayerController.getAllPlayer);

// get a player detail
PlayerRouter.get("/player/:playerId", PlayerController.getPlayerDetail);

////    ////////////////////////////////////////////////////

// update the player info

// delete the player

// add player to a team

////////////////////////////////////////////////////////////

module.exports = PlayerRouter;
