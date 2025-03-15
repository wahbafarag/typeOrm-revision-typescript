"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv = require("dotenv");
dotenv.config();
var express = require("express");
var root_1 = require("./routes/root");
var is_integer_1 = require("./utils/is-integer");
var logger_1 = require("./utils/logger");
var app = express();
function setupServer() {
    app.route("/").get(root_1.root);
}
function startServer() {
    var port;
    var portEnv = process.env.PORT, portArg = process.argv[2];
    if ((0, is_integer_1.isInteger)(portEnv)) {
        port = parseInt(portEnv);
    }
    else if ((0, is_integer_1.isInteger)(portArg)) {
        port = parseInt(portArg);
    }
    else {
        port = 8080;
    }
    app.listen(port, function () {
        logger_1.logger.info("Server is running on port ".concat(port));
    });
}
setupServer();
startServer();
