const fs =require("fs");
const superagent = require("superagent");

const readFilePro = file => {
    return new Promise((resolve,reject) => {
        fs.readFile(file,(err,data) => {
            if (err) reject('cldnt get it ');
            resolve(data);
        });
    });
};

const writeFilePro = (file,data) => {
    return new Promise((resole,reject) => {
        fs.writeFile(file,data, err => {
            if (err) reject ("couldnt write");
           // resolve();
        });
    });
};

readFilePro(`${__dirname}/dog.txt`).then (data => {
    console.log("breed is " + data);
   return superagent
    .get(`https://dog.ceo/api/breed/${data}/images/random`)})
    .then(res => {
        console.log(res.body.message);
        return writeFilePro('dog-img.txt',res.body.message);     
    })
    .then(()=>{
        console.log("writtenin file " );
    })
    .catch(err => {
        console.log(err.message);
    });


    
    

