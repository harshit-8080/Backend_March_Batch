const express = require("express");
const app = express();

const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const db_Connection = require("./config/database-cofig");
const Chat = require("./models/chat-model");

const io = new Server(server); //TODO: This is very important

/// To serve some static files like html files we need to use middleware
app.use("/", express.static(__dirname + "/public"));
app.set("view engine", "ejs");

app.get("/chat/:roomId", async (req, res) => {
  
  const chats = await Chat.find({ roomId: req.params.roomId });

  res.render("index", {
    name: "Sameer",
    roomId: req.params.roomId,
    chats: chats,
  });
});

io.on("connection", (socket) => {
  //! Joining room here
  socket.on("join_room", (data) => {
    console.log("user is joined in this room ", data.roomId);
    socket.join(data.roomId);
  });

  //! Consume msgs
  socket.on("msgSent", async (data) => {
    //! Saving messaage to database
    await Chat.create({
      content: data.msg,
      user: data.userName,
      roomId: data.roomId,
    });

    console.log(data);
    //! io.to() ---> will send the message to the given room
    io.to(data.roomId).emit("msg_rcvd", {
      msg: data.msg,
      userName: data.userName,
    });
  });
});

server.listen(3000, async () => {
  console.log("server listening on port 3000");
  await db_Connection();
});

// io.emit()  ==> it will send the message to everyone
// socket.emit() ==> it will sent the message to same client
// socket.broadcast.emit() ===> it will send the message to everyone except me.
