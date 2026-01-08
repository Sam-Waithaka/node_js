import { IncomingMessage, ServerResponse } from "http";
import { Transform } from "stream";
export const readHandler = async (req: IncomingMessage, resp: ServerResponse) => {

    req.pipe(createLowerTransform()).pipe(resp)
    // TODO - read request body
    // req.setEncoding('utf-8')
    // req.on('data', (data: string)=>{
    //     console.log(data)
    // })

    // req.on('end', ()=>{
    //     console.log('End: All data read');
    //     resp.end()
        
    // })
    
    // for await ( const data of req){
    //     console.log(data);
        
    // }
    // console.log('End: All data read');

    // resp.end();
}

const createLowerTransform = ()=> new Transform ({
    transform(data, encoding, callback){
        callback(null, data.toString().toLowerCase())
    }
})