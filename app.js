var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var db = require('./db');
var UserController = require('./user/UserController');

var app = express();

app.use('/users', UserController);


module.exports = app;

//const http = require('http');
//const hostname = '127.0.0.1';
//const port = 3000;

/*const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-type', 'text/plain');
  res.end('Hello World');
})*/

// Body Parser Middleware
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended: false}));

//var obj  = {name: 'Tabis'}; 

// app.get('/', function(req, res){
//   res.json(obj);
// })



