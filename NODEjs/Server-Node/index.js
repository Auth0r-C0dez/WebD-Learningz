const http = require("http");
const fs = require("fs");

const mySer = http.createServer( (req,res) => { //the call back function handles the requests and the responses
    // console.log("new req is recvd");
   // console.log(req); //by this we can get the entire information regarding the client
    // const log = `Request as received on ${Date.now()}\n`;
    const log = `Req was received on ${Date.now()} : ${req.url}\n`; //by this we can find the page request time
    fs.appendFile("infoOfURL.txt",log,(err,data) => {
        res.end("server is connected")
    });
    
});

mySer.listen(8000,() => console.log("server is up and running"));