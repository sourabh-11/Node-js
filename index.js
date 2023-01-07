// const fs= require("fs");
// fs.writeFileSync("bio.txt","hello")
// fs.writeFileSync("bio.txt","helloooo")
// fs.appendFileSync("bio.txt"," good")
// const data  = fs.readFileSync("bio.txt","utf8");
// console.log(data);
// fs.renameSync('bio.txt',"biooo.txt")
// fs.unlinkSync("biooo.txt")

const nodemon = require("nodemon");


// lec 7
// const fs  = require("fs");
// fs.writeFile("read.txt","TOday is osm day",(err)=>{
//     console.log("done created");
//     console.log(err);
// });
// fs.appendFile("read.txt","good boy",(err)=>{
//     console.log("done appened");
// })
// fs.readFile("read.txt","utf-8",(err,data)=>{
//     console.log(data);

// })

// lec-8
// synchronous and asynchronous


// lec-9
// const fs = require("fs");
// fs.writeFile("bio.txt","hello",(err)=>{
// console.log("done");
// })
// fs.appendFile("bio.txt","hello",(err)=>{
// console.log("done");
// })
// fs.readFile("bio.txt","utf-8",(err,data)=>{
// console.log(data);
// console.log("done");
// })
// fs.rename("bio.txt","boioo.txt",(err)=>{
//     console.log("changed");
// })
// fs.unlink("boioo.txt",(err)=>{
//     console.log("deleted");
// })


// lec-10
// const os  = require("os")
// console.log(os.arch()); 
// console.log(os.platform());
// console.log(os.totalmem());
// console.log(os.hostname());
// console.log(os.type());

// l-11
// path modules
// const path = require('path')

// console.log(path.dirname('C:/Users/dell/node js/index.js'));
// console.log(path.extname('C:/Users/dell/node js/index.js'));
// console.log(path.basename('C:/Users/dell/node js/index.js'));
// console.log(path.parse('C:/Users/dell/node js/index.js'));

// l-12 create and export model
// const {add,mul,div}  = require('./open')
// console.log(add(3,4));
// console.log(mul(3,4));
// console.log(div(3,4));

// l-13
// import npm module
// const chalk = require("chalk");
// const revalidator = require("validator");
// const res = validator.isEmail("akfa#kf");
// console.log(res);

// console.log(chalk.blue("helll"));




// l-14
// nodemon
// install



// l-15
// module wrapper functio

// (function(exports, require, modele,__filename, __dirname){
//     console.log("sourabh jangid");
// })();

// l-16-17
// node js web  server 
// const http = require("http")
// const server = http.createServer((req,res)=>{
//     // console.log(req.url);
//     if(req.url="/"){
//         res.end("home page ");
//     }
//     else if(req.url="/about"){
//         res.end("about");
//     }
//     else
//     res.end("error");
//     // res.end("hello")
// })
// server.listen(3000,"127.0.0.1",()=>{
//     console.log("listen");
// })


// l-18
// json in Nodejs
// const fs = require("fs")
// const bioData  = {
//     name:"sourrbhh",
//     age: 34,
//     channel: "sourabh",
// };
// console.log(bioData);
// obj to json 
// const json1 = JSON.stringify(bioData);
// console.log(json1);
// // json to obj
// const objData = JSON.parse(json1)
// console.log(objData);
// const jsondata = JSON.stringify(bioData);
// fs.writeFile('json1.json',jsondata,(err)=>{
//     // console.log(done);
// })
// fs.readFile("json1.json","utf-8",(err,data)=>{
//    console.log(data);
//    const orgdata = JSON.parse(jsondata);
//    console.log(orgdata.name);
// })





// l-19
// Json 
// const http = require("http")
// const fs = require('fs')
// require("http")
// const server = http.createServer((req,res)=>{
  
//         res.end("home page ");
//     })
// fs.readFile('package.json','utf-8',(err,data)=>
// {
//     const newdata = JSON.parse(data);
//   console.log(newdata.name);
//     // console.log(data);

// })
//  server.listen(3000,"127.0.0.1",()=>{
//        console.log("listen");
//  })






// l-20
// event in nodej
// const EventEmitter = require("events")
// const event  = new EventEmitter();
// event.on('sayMyname',()=>{
//     console.log("souarj");
// })
// event.on('sayMyname',()=>{
//     console.log("souarj");
// })
// event.on('sayMyname',()=>{
//     console.log("souarj");
// })
// event.on('sayMyname',()=>{
//     console.log("souarj");
// })
// event.emit('sayMyname')

// l-21
// streams in nodejs
