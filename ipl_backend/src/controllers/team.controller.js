const Team = require("../models/team.models");

const teamTest = async (req, res) => {
  res.json({ Message: "This is a test message from team" });
};

const createTeam = async (req, res) => {
  const team = req.body;

  const response = await Team.create(team);

  res.json({
    message: response,
  });
};

const getAllTeams = async (req, res) => {
  const response = await Team.find();

  res.json({
    message: response,
  });
};

module.exports = {
  teamTest,
  createTeam,
  getAllTeams,
};
