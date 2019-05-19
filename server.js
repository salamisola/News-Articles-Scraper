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

console.log("mongoose connected sucessfully");
    }
});

// starting our Express app and listening on the port
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
