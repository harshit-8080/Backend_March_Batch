const express = require("express");

const PlayerRouter = express.Router();

PlayerRouter.get("/player/test", (req, res) => {
  res.json({ Message: "This is a test message from player" });
});

module.exports = PlayerRouter;
