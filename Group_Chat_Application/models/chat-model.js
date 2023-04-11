const mongoose = require("mongoose");

const { Schema } = require("mongoose");

const ChatSchema = Schema({
  content: {
    type: String,
  },
  user: {
    type: String,
  },
  roomId: {
    type: String,
  },
});

const Chat = mongoose.model("Chat", ChatSchema);

module.exports = Chat;
