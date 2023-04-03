const express = require("express");
const bodyParser = require("body-parser"); // middleware

const app = express();
app.use(bodyParser.json());

// how to create a new middleware
function middle1(req, res, next) {
  console.log("middle1 is called");
  let name = req.body.name;
  console.log(name);
  if (name == "Mouneeswar") {
    res.json({ msg: "go back" });
  }
  next();
}
// how to use the middleware
app.use(middle1);

// 1st api
app.post("/dashboard", (req, res) => {
  console.log("line 16 ===>");
  // best practice 1st
  res.json({ message: "this is message 2" });
});

/// server starting
app.listen(3000, () => {
  console.log("server listening on port 3000");
});

// if we use any middleware, then our middleware will be called first then the api code.
