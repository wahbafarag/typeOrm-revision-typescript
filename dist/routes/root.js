"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.root = void 0;
var root = function (req, res) {
    console.log("Server is up and running.");
    res.status(200).send("Server is up and running.");
};
exports.root = root;
