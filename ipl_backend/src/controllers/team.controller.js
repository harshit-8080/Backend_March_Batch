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
  const response = await Team.find().populate("players");

  res.json({
    message: response,
  });
};

const getATeam = async (req, res) => {
  const teamId = req.params.teamId;

  const response = await Team.findById(teamId);

  res.json({
    message: response,
  });
};

const getTeamWithID = async (req, res) => {
  try {
    const team = await Team.findById(req.params.teamId).populate("players");

    if (team) {
      res.json({ Messgae: team });
    } else {
      res.json({ message: "team id not correct" });
    }
  } catch (error) {}
};

/**
 * req.body
 * req.params
 * req.query
 */

module.exports = {
  teamTest,
  createTeam,
  getAllTeams,
  getATeam,
  getTeamWithID,
};
