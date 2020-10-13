const express = require("express");
const mongoose = require("mongoose");
const url = 'mongodb://localhost/AlienBox';
const app = express();

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection
con.on('open', function(){
    console.log("connection established");
})
app.use(express.json())
const alienRouter = require("./routers/aliens");
app.use('/aliens',alienRouter);
app.listen(4000, ()=>{
    console.log("server is running on 4000");
})