const mongoose = require("mongoose");

const db_url =
  "mongodb+srv://harshitrajjs:mC1ece6iIt91NJoO@cluster0.lmyf5rg.mongodb.net/?retryWrites=true&w=majority";

const db_connection = async () => {
  console.log("inside db connection function");
  await mongoose.connect(db_url);
  console.log("database connection established ......");
};

module.exports = db_connection;
