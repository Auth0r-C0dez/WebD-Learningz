const http = require('http');
const url = require('url');

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`,'utf-8');
const dataObj =JSON.parse(data);

       
const server = http.createServer((req,res) => {
    const pathName = req.url;

    //Checking the overview page
    if(pathName == '/' || pathName == '/overview') {
        
        res.end("from overview");
    }
    
    //checking the product page

    else if (pathName == '/product') {
        res.end("product route");
    } 
    
    //checking the api page

    else if(pathName == '/api') {
        
            res.writeHead(200, {
                'content-type' : 'application/json'
            });
            res.end(data);
        
    //for checking if non of teh web routes doesnt exist
        
    }else {
        res.writeHead(404, {
            'Content-type' :'text/html',
            'my-own-header':'hey-sucker'
        })
    res.end('<h1>Server is working</h1>'); }
});

//creatintg the lsitening server port

server.listen(8000, '127.0.0.1', () => {
    console.log("Listening"); // type 127.0.0.1:8000 to check the output
})
