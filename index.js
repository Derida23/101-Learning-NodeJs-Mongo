// filename: index.js

// import express
let express = require('express');

// import body parser
let bodyParser = require('body-parser')

// import mongoose
let mongoose = require ('mongoose')

// initialize app
let app = express();

// import routes
let apiRoutes = require("./routes/api-route")

// configuration bodyParser
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

// connect mongoose and set connection
mongoose.connect('mongodb://localhost/node-mongo');

var db = mongoose.connection

// setup server PORT
var port = process.env.PORT || 8080;

// send message for default URL
app.get('/', (req, res) => res.send('Hello World with Express'));

// app apiRoutes
app.use('/api', apiRoutes)

// launch app to listen specified PORT
app.listen(port, function(){
    console.log("Running API on PORT "+ port)
})