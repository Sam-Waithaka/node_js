"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultHandler = exports.newUrlHandler = exports.notFoundHandler = exports.redirectionHandler = void 0;
// import { TLSSocket } from "tls";
// import { parse } from "path";
// export const isHttps = (req: IncomingMessage): boolean =>{
//     return req.socket instanceof TLSSocket && req.socket.encrypted;
// }
const redirectionHandler = (req, res) => {
    res.writeHead(302, {
        'location': 'https://localhost:5500'
    });
    res.end();
};
exports.redirectionHandler = redirectionHandler;
// export const handler = async (req: IncomingMessage, res: ServerResponse) => {
//     const protocal = isHttps(req) ? 'https' : 'http'
//     const parsedURL = new URL(req.url ?? '', `${protocal}://${req.headers.host}`)
//     if(req.method !== 'GET' || parsedURL.pathname == '/favicon.ico'){
//         res.writeHead(404, 'Not Found')
//         res.end()
//         return
//     } else {
//         res.writeHead(200, 'OK')
//         if (parsedURL.pathname == "/newurl") {
//             res.write("Hello, New URL");
//         } else if (!parsedURL.searchParams.has('keyword')){
//             res.write(`Hello ${protocal.toUpperCase()}`)
//         } else {
//             res.write(`Hello ${parsedURL.searchParams.get('keyword')}`)
//         }
//         res.end()
//         return
//     }
// }
// export const notFoundHandler
//         = (req: IncomingMessage, resp: ServerResponse) => {
//     resp.writeHead(404, "Not Found");
//     resp.end();
// }
// export const newUrlHandler
//         = (req: IncomingMessage, resp: ServerResponse) => {
//     resp.writeHead(200, "OK");   
//     resp.write("Hello, New URL");
//     resp.end();
// }
// export const defaultHandler
//         = (req: IncomingMessage, resp: ServerResponse) => {
//     resp.writeHead(200, "OK");
//     const protocol = isHttps(req) ? "https" : "http";
//     const parsedURL = new URL(req.url ?? "",
//         `${protocol}://${req.headers.host}`);   
//     if (!parsedURL.searchParams.has("keyword")) {
//         resp.write(`Hello, ${protocol.toUpperCase()}`);
//     } else {
// resp.write(`Hello, ${parsedURL.searchParams.get("keyword")}`);           
//     }
//     resp.end();
// }
const notFoundHandler = (req, resp) => {
    resp.sendStatus(404);
};
exports.notFoundHandler = notFoundHandler;
const newUrlHandler = (req, resp) => {
    resp.send("Hello, New URL");
};
exports.newUrlHandler = newUrlHandler;
const defaultHandler = (req, resp) => {
    if (req.query.keyword) {
        resp.send(`Hello, ${req.query.keyword}`);
    }
    else {
        resp.send(`Hello, ${req.protocol.toUpperCase()}`);
    }
};
exports.defaultHandler = defaultHandler;
