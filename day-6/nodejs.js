// const http = require('http');

// http.createServer(function(req,res){
//     res.write("hello world");
//     res.end()

// }).listen(9000)

// console.log("server starting at 9000")

 // this is for express
 const express = require('express');

 const app =express();
 const port = 8000;
 app.get('/',(req,res)=>{
    res.send('hello world');
 })

 app.get('/nextRoute',(req,res)=>{
    res.send('hello world next');
 })

 app.listen(port,() =>{
    return console.log(`express is listening at http://localhost:${port}/`)
 });

 