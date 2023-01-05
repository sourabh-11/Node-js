// const fs= require("fs");
// fs.writeFileSync("bio.txt","hello")
// fs.writeFileSync("bio.txt","helloooo")
// fs.appendFileSync("bio.txt"," good")
// const data  = fs.readFileSync("bio.txt","utf8");
// console.log(data);
// fs.renameSync('bio.txt',"biooo.txt")
// fs.unlinkSync("biooo.txt")


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
