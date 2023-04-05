const Player = require("../models/player.model");

const playerTest = async (req, res) => {
  res.json({ Message: "This is a test message from player" });
};

const createPlayer = async (req, res) => {
  const player = req.body;

  const response = await Player.create(player);

  res.json({ Message: response });
};

const getAllPlayer = async (req, res) => {
  const response = await Player.find();

  res.json({ Message: response });
};

const getPlayerDetail = async (req, res) => {
  try {
    const response = await Player.findById(req.params.playerId);

    if (response) {
      res.json({
        Message: response,
      });
    } else {
      res.json({
        Message: "Player Id is not correct",
      });
    }
  } catch (error) {
    res.json({
      Message: "Internal Server Error",
    });
  }
};

module.exports = {
  playerTest,
  createPlayer,
  getAllPlayer,
  getPlayerDetail,
};
