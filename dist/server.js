"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var root_1 = require("./routes/root");
var app = express();
var port = 3000;
function setupServer() {
    app.route("/").get(root_1.root);
}
function startServer() {
    app.listen(port, function () {
        console.log("Server is running on port ".concat(port));
    });
}
setupServer();
startServer();
