const events = require("events");

const myEvents = new events();

function placeOrder(food) {
  myEvents.emit("order", food);
  myEvents.emit("foodPreparing", food);
  myEvents.emit("dispatch", food);
  myEvents.emit("cod", food);
  myEvents.emit("delivery", food);
}

myEvents.on("order", (data) => {
  console.log("Your order has been for placed ", data);
});

myEvents.on("foodPreparing", (data) => {
  console.log("Your food is being prepared ", data);
});

myEvents.on("dispatch", (data) => {
  console.log("Your food is dispatched ", data);
});

myEvents.on("cod", (data) => {
  console.log("Payment is done for  ", data);
});

myEvents.on("delivery", (data) => {
  console.log("Your food is delivered ", data);
});

placeOrder("burger");
