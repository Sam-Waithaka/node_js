"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const fs_1 = require("fs");
const console_1 = require("console");
const handler = (req, res) => {
    (0, fs_1.readFile)('data.json', (err, data) => {
        if (err == null) {
            res.end(data, () => console.log('File sent'));
        }
        else {
            (0, console_1.log)(`Error ${err.message}`);
            res.statusCode = 500;
            res.end();
        }
    });
};
exports.handler = handler;
