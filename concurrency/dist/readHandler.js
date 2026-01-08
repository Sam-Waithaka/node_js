"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readHandler = void 0;
const readHandler = (req, resp) => {
    // TODO - read request body
    req.setEncoding('utf-8');
    req.on('data', (data) => {
        console.log(data);
    });
    req.on('end', () => {
        console.log('End: All data read');
        resp.end();
    });
    // resp.end();
};
exports.readHandler = readHandler;
