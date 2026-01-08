"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readHandler = void 0;
const stream_1 = require("stream");
const readHandler = async (req, resp) => {
    // req.pipe(createLowerTransform()).pipe(resp)
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
    // JSON transfrom using readableObjectMode
    if (req.headers['content-type'] == 'application/json') {
        req.pipe(createFromJsonTransform()).on('data', (payload) => {
            if (payload instanceof Array) {
                resp.write(`Reieved an Array with ${payload.length} items`);
            }
            else {
                resp.write('Did not recieve an Array');
            }
            resp.end();
        });
    }
    else {
        req.pipe(resp);
    }
};
exports.readHandler = readHandler;
const createFromJsonTransform = () => new stream_1.Transform({
    readableObjectMode: true,
    transform(data, encoding, callback) {
        callback(null, JSON.parse(data));
    }
});
// const createLowerTransform = ()=> new Transform ({
//     transform(data, encoding, callback){
//         callback(null, data.toString().toLowerCase())
//     }
// })
