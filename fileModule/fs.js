const fs = require("fs"); // Helps you to do some file operations and read, write and apppend.

// //! ASYNCHRONOUS (GOOD WAY!)
// fs.readFile("notes.txt", function (err, data) {
//   console.log(data.toString());
// });

// //! SYNCHRONOUS (BAD WAY!)
// const data = fs.readFileSync("notes.txt");
// console.log(data.toString());

// //! This is how your write and read the content
// fs.writeFile("notes.txt", "Sameer", function (err) {
//   fs.readFile("notes.txt", function (err, data) {
//     console.log(data.toString());
//   });
// });

// //! Append something to the file
// fs.appendFile("notes.txt", "\n Rohit", function (err) {
//   if (err) {
//     console.log(err);
//   }

//   fs.readFile("notes.txt", function (err, data) {
//     console.log(data.toString());
//   });
// });
