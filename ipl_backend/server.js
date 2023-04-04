const express = require("express");
const bodyParser = require("body-parser");
const db_connection = require("./src/config/db.config");

const app = express();
app.use(bodyParser.json());

app.listen(3000, async () => {
  console.log("server listening on port 3000");
  await db_connection();
});
