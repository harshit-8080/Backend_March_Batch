const mongoose = require("mongoose");
require("dotenv").config();

// console.log(process.env.DB_URL);
// console.log(process.env.NAME);

// console.log(process.env.password);

const db_url = process.env.DB_URL;

const db_connection = async () => {
  console.log("inside db connection function");
  await mongoose.connect(db_url);
  console.log("database connection established ......");
};

module.exports = db_connection;
