"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const console_1 = require("console");
const handler = async (req, res) => {
    (0, console_1.log)(`HTTP method ${req.method}, URL: ${req.url}`);
    // log(`host ${JSON.stringify(req.headers)}`)
    (0, console_1.log)(`user-agent: ${req.headers["user-agent"]}`);
    const parsedURL = new URL(req.url ?? '', `http://${req.headers.host}`);
    (0, console_1.log)(`protocal: ${parsedURL.protocol}`);
    (0, console_1.log)(`hostname: ${parsedURL.hostname}`);
    (0, console_1.log)(`port: ${parsedURL.port}`);
    (0, console_1.log)(`Pathname: ${parsedURL.pathname}`);
    parsedURL.searchParams.forEach((val, key) => {
        (0, console_1.log)(`key ${key} val ${val}`);
    });
    res.end("Hello, World");
};
exports.handler = handler;
