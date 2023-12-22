const express = require("express");
require("dotenv").config()

const app = express();

app.get("/",(req,res)=>{
     res.send({msg: "Api working"})
})
app.get("/ping",(req,res)=>{
     res.send({msg: "pong"})
})
app.get("/welcome",(req,res)=>{
     res.send({msg: "Hello"})
})
const PORT = process.env.PORT;
app.listen(PORT, ()=>{
     console.log("Server is runing on PORT: ", PORT)
})