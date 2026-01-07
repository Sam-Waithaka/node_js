import { log } from "console";
import { IncomingMessage, ServerResponse } from "http";
export const handler = async (req: IncomingMessage, res: ServerResponse) => {
    log(`HTTP method ${req.method}, URL: ${req.url}`)
    log(`host ${JSON.stringify(req.headers)}`)
    log(`user-agent: ${req.headers["user-agent"]}`)
    
    res.end("Hello, World");
};