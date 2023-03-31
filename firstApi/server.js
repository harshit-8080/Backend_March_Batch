const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// middleware ==> app.use()
app.use(bodyParser.json());

const users = [
  {
    name: "John",
    age: 45,
    movies: ["pathan", "dhoom"],
  },
  {
    name: "srk",
    age: 54,
    movies: ["ddlj", "pathan"],
  },
  {
    name: "deepika",
    age: 38,
    movies: ["pathan", "race"],
  },
];

// first api
app.get("/", (request, response) => {
  response.send({ message: "Hello world", name: "harshit raj" });
});

//second api
app.get("/home", (req, res) => {
  res.send({ home: "welcome to the home page" });
});

// third api
app.get("/contact", (req, res) => {
  res.send({ contact: "welcome to the contact page" });
});

// fourth api
app.get("/users", (req, res) => {
  res.send({ result: users });
});

/**
 *  till now we have made a 4 get apis.
 *   /users => returns us an array of user.
 *
 *  Task -> create an post api which will add an object to users array.
 *
 * using post api we can write something on backend.
 */

// fifth api
app.post("/add", (req, res) => {
  users.push(req.body);
  res.send({ message: "your actor is added" });
});

app.listen(3000, () => {
  console.log("server listening on port 3000");
});
