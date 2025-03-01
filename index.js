const express=require('express');
const connectdb = require('./config/db');
require('dotenv').config();

const app=express();
let PORT=process.env.SERVER_PORT;

//middleware
app.use(express.json());


//test route
app.get('/',(req,res)=>{
    res.send("this is test route")
});


//server
app.listen(PORT,async()=>{
    await connectdb();
    console.log("server started");
});

