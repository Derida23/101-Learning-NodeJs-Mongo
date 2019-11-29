// filename: index.js

// import express
let express = require('express');

// import routes
let apiRoutes = require("./api-route")

// initialize app
let app = express();

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