const http = require("http");
const fs = require("fs");

const myhost = http.createServer((req,res) =>{
    const log = `New request was received on ${Date.now()}: from ${req.url}\n`;
    fs.appendFile("UserData.txt", log, (err,data) => {
        switch(req.url) {
            case '/' : res.end("You are in the homepage");
            break;
            case '/about' : res.end("Hola amigo i am Rana");
            break;
            default:
            res.end("404 Not FOund");
        }
    });
});
myhost.listen(8000,() => console.log("server is up and running"));