const express = require("express");
const bodyParser = require("body-parser");
const db_connection = require("./src/config/db.config");
const TeamRouter = require("./src/routes/team.routes");
const PlayerRouter = require("./src/routes/player.routes");
const AdminRouter = require("./src/routes/admin.routes");

const app = express();
app.use(bodyParser.json());
app.use(TeamRouter);
app.use(PlayerRouter);
app.use(AdminRouter);
app.get("/", (req, res) => {
  res.json({
    message: "Ok",
    response: "health check added",
  });
});

app.listen(3000, async () => {
  console.log("server listening on port 3000");
  await db_connection();
});

// how are we testing the server
