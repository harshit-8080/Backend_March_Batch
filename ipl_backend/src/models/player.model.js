const mongoose = require("mongoose");

const { Schema } = require("mongoose");

const PlayerSchema = new Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  age: {
    type: Number,
  },
  nationality: {
    type: String,
  },
  role: {
    type: String,
  },
  money: {
    type: String,
  },
  tShirtNumber: {
    type: String,
  },
  totalMatches: {
    type: String,
  },
});

const Player = mongoose.model("Player", PlayerSchema);

module.exports = Player;
