import express from "express";


const app = express();
const port = 3000;

app.get("/",(req,res) => {
    const d = new Date();
    const day = d.getDay();
    // console.log(day);

    let type = "a wroking day";
    let advic= " time to bust our ass";

    if(day == 0 || day == 6) {
        type = " weekend";
        advic="let's chill";
    }

    res.render("index.ejs",{
        dayType:type,
        advice : advic,
    });
});

app.listen(port,() => {
    console.log(`server is up and running at port ${port}`);
});
