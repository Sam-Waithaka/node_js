"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readHandler = void 0;
const stream_1 = require("stream");
const readHandler = async (req, resp) => {
    req.pipe(createLowerTransform()).pipe(resp);
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
};
exports.readHandler = readHandler;
const createLowerTransform = () => new stream_1.Transform({
    transform(data, encoding, callback) {
        callback(null, data.toString().toLowerCase());
    }
});
