import { createServer } from "http";
import express, {Express, Request, Response } from "express";
// import { basicHandler } from "./handler";
import { readHandler } from "./readHandler";


const port = 5000;
const expressApp: Express = express()
expressApp.use(express.json())

// expressApp.get("/favicon.ico", (req, resp) => {
//     resp.statusCode = 404;
//     resp.end();
// });
// expressApp.get("*", basicHandler);

expressApp.get('/sendcity', (req, res)=>{
    res.sendFile('city.png', {root: 'static'})
})


expressApp.get('/download', (req, res)=>{
    res.download('static/city.png')
})

expressApp.post('/read', readHandler)
expressApp.use(express.static('static'))
expressApp.use(express.static('node_modules/bootstrap/dist'))

const server = createServer(expressApp);
server.listen(port,
    () => console.log(`HTTP Server listening on port ${port}`));