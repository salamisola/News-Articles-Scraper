// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var mongoose = require("mongoose");
var experessHandlebars = require("express-handlebars");
var bodyParser = require("body-parser");

// Sets up the Express App and the port to the host
// =============================================================
var app = express();
var PORT = process.env.PORT || 3030;

// Set up the Router
var router = express.Router();

//To require the routes to pass the router object
require("./config/routes")(router);

// Sets up the public folder as a static directory
app.use(express.static(__dirname + "/public"));

//Connecting the handlebars to the app
app.engine("handlebars", experessHandlebars({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

//Applying bodyParser
app.use(bodyParser.urlencoded({
    extended: false
}));
// To allow all requests go through the Router
app.use(router);

// To either use the deployed database or the local mongoHeadLines Database
var db = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadLines";

//mongoose connection to the database
mongoose.connect(db, function (err) {
    //if error connecting, log it
    if (err) {
        console.log(err);
    }
    //if no error, log successful
    else {
        console.log("mongoose connected sucessfully");
    }
});

// starting our Express app and listening on the port
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
