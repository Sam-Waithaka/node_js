"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const promises_1 = require("fs/promises");
const console_1 = require("console");
const promises_2 = require("./promises");
const handler = async (req, res) => {
    try {
        const data = await (0, promises_1.readFile)('data.json');
        await promises_2.endPromise.bind(res)(data);
        (0, console_1.log)('File sent');
    }
    catch (err) {
        console.log(`Error: ${err?.message ?? err}`);
        res.statusCode = 500;
        res.end();
    }
};
exports.handler = handler;
