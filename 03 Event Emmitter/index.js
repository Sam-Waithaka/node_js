const { log } = require('util');
const logEvents = require('./logEvents');

const EventEmmitter = require('events')

class MyEmitter extends EventEmmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('log', (message)=>{
    logEvents(message)
})

setTimeout(()=>{
    myEmitter.emit('log', 'Log Event Emitted')
}, 2000)
