import { log } from "console";
import { IncomingMessage, ServerResponse } from "http";
import { parse } from "path";
export const handler = async (req: IncomingMessage, res: ServerResponse) => {
    log(`HTTP method ${req.method}, URL: ${req.url}`)
    // log(`host ${JSON.stringify(req.headers)}`)
    log(`user-agent: ${req.headers["user-agent"]}`)

    const parsedURL = new URL(req.url ?? '', `http://${req.headers.host}`)
    log(`protocal: ${parsedURL.protocol}`)
    log(`hostname: ${parsedURL.hostname}`)
    log(`port: ${parsedURL.port}`)
    log(`Pathname: ${parsedURL.pathname}`)

    parsedURL.searchParams.forEach((val, key)=>{
        log(`key ${key} val ${val}`)
    })
    
    res.end("Hello, World");
};