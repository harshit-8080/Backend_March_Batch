var socket = io();

// dom apis
// socket.on("fromServer", () => {
//   const div = document.createElement("div");
//   div.innerText = "New Event from server";
//   document.body.appendChild(div);
// });

// const btn = document.getElementById("btn");
// btn.onclick = function clickMe() {
//   socket.emit("msg_client");
// };

const btn = document.getElementById("btn");
const inputmsg = document.getElementById("msginput");
const msglist = document.getElementById("msglist"); // leave

btn.onclick = function click() {
  socket.emit("msg_client", {
    msg: inputmsg.value,
  });
};

socket.on("msg_rcvd", (data) => {
  let li = document.createElement("li");
  li.innerText = data.msg;
  msglist.appendChild(li);
});
