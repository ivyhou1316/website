//server.js
var express = require("express");
var DB = require('nedb-promises');

server = express();

server.get("/",function(req,res){ //web root
 	res.send("Hello, World!"); //回傳固定內容
    Contact.insert(req.query);
 });
 server.get("*",function(req,res){ //other pages
 	res.send("Page not found", 404);
 });
 server.listen(80);
console.log("Express run on port: 8080");
//run: node server.js
//browser: http://localhost:8080