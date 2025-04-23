//if reading the files takes lot of time then main thread need to wait for lot of time
//so, there is need for async function , so, instead of waiting of main thread 
//it can execute other thing and meanwhile contents 
//of file can be read by async func, 
//as main thread becomes free, it can show the contents of file

//Importing external lib called "fs" i.e File System
const fs = require("fs");
//param1: path to file; 
// param2: encoding in which one can read
//readFile is aync function, so, firstly next line will execute in meantime
//file will be read by readFile and wait in callback queue till main thread is free, but main thread is busy in executing loop
//once main thread is free, it will put contents of file on console
fs.readFile("a.txt", "utf-8", function(err,data){
    console.log(err);//no error, so null output
    console.log(data);
})
console.log("Hi there ! ")

let a  = 0;
for(let i = 0; i< 1000000000; i++)
    a++;
console.log(a);