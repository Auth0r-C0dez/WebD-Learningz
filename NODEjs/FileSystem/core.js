const fs = require("fs");

//Synchronous write 
 fs.writeFileSync("./trail.txt","BOOO this a trail to access your device");

//Asynchronous write
fs.writeFile("./test.txt","Booooo this is trial to access ur device asynchronously",(err) => {});

//reading file asynchronously
fs.readFile("./trail.txt","utf-8",(err,result) => {
    if(err) {
        console.log("Error",err);
    } else {
        console.log(result);
    }
});