require("dotenv").config();
const mongoose = require("mongoose");
const db_url = process.env.DB_URL;

const db_Connection = async () => {
  console.log("inside db connection functio");
  await mongoose.connect(db_url);
  console.log("database connection established....");
};

module.exports = db_Connection;
