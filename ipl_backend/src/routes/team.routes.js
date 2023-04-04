const express = require("express");

/// creating router
const TeamRouter = express.Router();

/// get api for team test
TeamRouter.get("/team/test", (req, res) => {
  res.json({ Message: "This is a test message team" });
});


module.exports = TeamRouter;
