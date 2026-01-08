import { log } from "console";
import { IncomingMessage, ServerResponse } from "http";
import { Request, Response } from "express";
// import { TLSSocket } from "tls";
// import { parse } from "path";


// export const isHttps = (req: IncomingMessage): boolean =>{
//     return req.socket instanceof TLSSocket && req.socket.encrypted;
// }


export const redirectionHandler = (req: IncomingMessage, res: ServerResponse) =>{
    res.writeHead(302, {
        'location': 'https://localhost:5500'
    })
    res.end()
}

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

export const notFoundHandler = (req: Request, resp: Response) => {
    resp.sendStatus(404);
}
export const newUrlHandler = (req: Request, resp: Response) => {
    resp.send("Hello, New URL");
}
export const defaultHandler = (req: Request, resp: Response) => {
    if (req.query.keyword) {
        resp.send(`Hello, ${req.query.keyword}`);                   
    } else {
        resp.send(`Hello, ${req.protocol.toUpperCase()}`);
    }
}

