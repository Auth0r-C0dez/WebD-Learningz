import express from "express";
const app = express();
const port = 3000;

// app.get("/",(req,res) => {    this can be used to get information abot the user
//   console.log(req.rawHeaders);
// });
app.get("/",(req,res) => {    
  res.send("Damnnn the port is running");
});

app.get("/contact",(req,res) => {    
  res.send("<h1>Wooo u wanna get in touch naughty boi</h1> <p>Ring me up at 89asd3456</p>");
});

app.get("/about",(req,res) => {
  res.send("<h1> HEllow this is rana talukdar</h1>");
});

app.listen(port,()=> {
  console.log(`Server is up and running on ${port}`);
});
