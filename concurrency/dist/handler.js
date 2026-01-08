"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.basicHandler = void 0;
const fs_1 = require("fs");
const basicHandler = (req, resp) => {
    // resp.setHeader('Content-Type', 'text/plain')
    // let i = 0;
    // let canWrite = true;
    // const writeData = () => {
    //     console.log("Started writing data"); 
    //     do {
    //         canWrite = resp.write(`Message: ${i++}\n`);
    //     } while (i < 10_000 && canWrite);
    //     console.log("Buffer is at capacity");
    //     if (i < 10_000) {
    //         resp.once("drain", () => {
    //             console.log("Buffer has been drained at: ", i);
    //             writeData();
    //         });
    //     } else {
    //         resp.end("End");
    //     }
    // }
    // writeData();
    resp.write((0, fs_1.readFileSync)("static/index.html"));
    resp.end();
};
exports.basicHandler = basicHandler;
