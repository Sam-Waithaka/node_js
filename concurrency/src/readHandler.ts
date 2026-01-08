import { IncomingMessage, ServerResponse } from "http";
export const readHandler = (req: IncomingMessage, resp: ServerResponse) => {
    // TODO - read request body
    req.setEncoding('utf-8')
    req.on('data', (data: string)=>{
        console.log(data)
    })

    req.on('end', ()=>{
        console.log('End: All data read');
        resp.end()
        
    })
    // resp.end();
}