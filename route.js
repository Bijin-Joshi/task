require ('dotenv'). config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const app = express();
const route = require ("./routes");
const { Router } = require('express');

app.use (bodyParser.json());

//middleware
app.use((req, res, next)=> {
    console.log("This is middleware! Body: ", req.body);
    //res.json 
    next();
});

let users = []; // id, name, email, address

//crud
//get all users, request method: Get
Router.get('/users', (req, res) => {
  res.json(users);
});

//create new user, Request Method: Post
Router.post('/users', (req, res) => {
  req.json(req.body);
});


const store = (req,res) => {

}

module.exports = Router

module.exports = {
    getAllUser,
    store,
    getById
}
