const fs = require("fs");

function ripufsReadFile(){
    console.log("Inside ripufsReadFile()");
    //it returns pending promise before data
    return new Promise(function(resolve){
        console.log("Inside Promise()");
        fs.readFile("a.txt","utf-8", function(err,data){
            console.log("Before resolve()");
            resolve(data);
        });
    })
}

function onDone(data){
    //here promise is resolved
    console.log(data);
}

//var p= ripufsReadFile();
//console.log(p);
//p.then(onDone);

//when resolve() is completed, then send data to onDone func
ripufsReadFile().then(onDone);