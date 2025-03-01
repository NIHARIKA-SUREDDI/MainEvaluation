const express=require('express');
const connectdb = require('./config/db');
const AuthenticationRouter = require('./routes/Authentication.routes');
require('dotenv').config();

const app=express();
let PORT=process.env.SERVER_PORT;

//middleware
app.use(express.json());


//test route
app.get('/',(req,res)=>{
    res.send("this is test route")
});


//routes
app.use('/user',AuthenticationRouter);

//server
app.listen(PORT,async()=>{
    await connectdb();
    console.log("server started");
});

