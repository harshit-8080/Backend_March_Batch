const express = require("express");
const app = express();

const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");

const io = new Server(server); //TODO: This is very important

/// To serve some static files like html files we need to use middleware
app.use("/", express.static(__dirname + "/public"));

io.on("connection", (socket) => {
  console.log("A User connected", socket.id);

  // we are emitting an event in every 2 seconds
  //   setInterval(() => {
  //     socket.emit("fromServer");
  //   }, 2000);

  socket.on("msg_client", (data) => {
    console.log(data.msg);
    io.emit("msg_rcvd", data);
  });
});

server.listen(3000, () => {
  console.log("server listening on port 3000");
});
