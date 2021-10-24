require('dotenv').config()
// const http = require('http');
// const url = require('url');

// // const server = http.createServer((request, response) => {
// //     response.writeHead (200, {'Content-Type': 'text/html'});
// //     response.write('<h1>Hello World </h1>');
// //     response.end();
// // });

// // server.listen(3000,() => {
// //     console.log('Server is running ar port 3000');
// // });

// let content = "";
// switch (http.request.url){
//     case "/":
//         content = "<h1> This is root page </h1>";
//         break;
//         case "/profile":
//         content = "<h1> This is profile page </h1>";
//         break;
//         case "/about":
//         content = "<h1> This is about page </h1>";
//         break;
//         default:
//             content = "<h1> This is 404 page </h1>";
// }

//alternative method

// const express = require("express");
// const app = express();

// app.get("/", function (req, res){
//     res.json({
//       message: "Hello world"
//     });
// });

// app.get("/profile", (req,res)=>{
//     res.send("This is my profile");
// });

// app.listen(3000);

require ('dotenv'). config();
const express = require("express");
const app = express();

let users = []; // id, name, email, address

//crud
//get all users, request method: Get
app.get('/users', (req, res) => {
  res.json(users);
});

//create new user, Request Method: Post
app.post('/users', (req, res) => {
  req.json(req.body);
});

const port = process.env.PORT || 3000;
app.listen(3000, ()=>{
  console.log("Server is running on port 3000");
});