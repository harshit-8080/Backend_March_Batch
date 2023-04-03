const express = require("express");
const bodyParser = require("body-parser"); // middleware

const app = express();
app.use(bodyParser.json());

// how to create a new middleware
function middle1(req, res, next) {
  console.log("middle1 is called");
  next();
}

function middle2(req, res, next) {
  console.log("middle2 is called");
  next();
}

// how to use the middleware
// app.use(middle2);
// app.use(middle1);

// 1st api
app.post("/dashboard", middle1, middle2, (req, res) => {
  console.log("line 16 ===>");
  res.json({ message: "this is message 2" });
});

app.get("/canteen", middle2, (req, res) => {
  res.json({ message: "canteen area" });
});

/// server starting
app.listen(3000, () => {
  console.log("server listening on port 3000");
});

// if we use any middleware, then our middleware will be called first then the api code.
