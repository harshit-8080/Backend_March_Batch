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
PlayerRouter.patch("/player/:playerId", PlayerController.updatePlayerInfo);

// delete the player
PlayerRouter.delete("/player/:playerId", PlayerController.deletePlayer);

// add a player to a team....
PlayerRouter.patch(
  "/team/:teamId/player/:playerId",
  PlayerController.addPlayer
);

////////////////////////////////////////////////////////////

module.exports = PlayerRouter;
