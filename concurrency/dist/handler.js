"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const console_1 = require("console");
const handler = async (req, res) => {
    (0, console_1.log)(`HTTP method ${req.method}, URL: ${req.url}`);
    (0, console_1.log)(`host ${JSON.stringify(req.headers)}`);
    (0, console_1.log)(`user-agent: ${req.headers["user-agent"]}`);
    res.end("Hello, World");
};
exports.handler = handler;
