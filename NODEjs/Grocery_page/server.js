const http = require('http');
const url = require('url');
const fs = require('fs');
const slugify = require('slugify');


const replaceTemplate = (temp,product) => {
    let output = temp.replace (/{%PRODUCTNAME%}/g, product.productName); // here g means global and the syntax used is called generral form
    output = output.replace(/{%IMAGE%}/g,product.image);
    output = output.replace(/{%PRICE%}/g,product.price);
    output = output.replace(/{%FROM%}/g,product.from);
    output = output.replace(/{%NUTRIENTS%}/g,product.nutrients);
    output = output.replace(/{%QUANTITY%}/g,product.quantity);
    output = output.replace(/{%DESCRIPTION%}/g,product.description);
    output = output.replace(/{%ID%}/g,product.id);

    if(!product.organic) output = output.replace(/{%NOT_ORGANIC%}/g,'not-organic');

    return output;

}

//creating the synchronous file reading part
const tempOverview = fs.readFileSync(`${__dirname}/templates/template-overview.html`,'utf-8');
const tempCard = fs.readFileSync(`${__dirname}/templates/template-card.html`,'utf-8');
const tempProduct = fs.readFileSync(`${__dirname}/templates/template-product.html`,'utf-8');

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`,'utf-8');
const dataObj =JSON.parse(data);
           

        
const server = http.createServer((req,res) => {

    const { query, pathname} = url.parse(req.url,true);
    const pathName = req.url;

    //Checking the overview page
    if(pathname == '/' || pathname == '/overview') {
        res.writeHead(200,{'Content-type' : 'text/html'});

        const cardsHTML = dataObj.map(el => replaceTemplate(tempCard,el)).join('');
         //in an arrow function if ther is no {} then the function is returned by default
        const output = tempOverview.replace('{%PRODUCT_CARDS%}',cardsHTML);
         
        res.end(output);
    }
    
    //checking the product page

    else if (pathname == '/product') {
        res.writeHead(200,{'Content-type' : 'text/html'});
        const product = dataObj[query.id];
        const output = replaceTemplate(tempProduct,product);
        res.end(output);
    } 
    
    //checking the api page

    else if(pathname == '/api') {
        
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
