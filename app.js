
const express = require('express');
const chalk = require('chalk')
const debug = require('debug')('app');
const morgan = require('morgan');
const app = express();
const port = 2500;

app.use(morgan('combined'))

app.get("/",(req,res) =>{
    res.send('Hello Teerawat node');

})

app.listen(port,()=>{
    // console.log("Listening on port %d",port);
    console.log("Listening on port  " + chalk.green (port));

})
