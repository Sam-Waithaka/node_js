const http = require('http')
const path = require('path')
const fs = require('fs')
const fsPromises = require('fs').promises

const { log } = require('util');
const logEvents = require('./logEvents');

const EventEmmitter = require('events')

class Emitter extends EventEmmitter {}

const myEmitter = new Emitter();

const PORT = process.env.PORT || 3500;

const server = http.createServer((req, res)=>{
    console.log(req.url, req.method);
    
})

server.listen(PORT, ()=>{
    console.log(`Server running on ${PORT}`);
})

// myEmitter.on('log', (message)=>{
//     logEvents(message)
// })


// myEmitter.emit('log', 'Log Event Emitted')

