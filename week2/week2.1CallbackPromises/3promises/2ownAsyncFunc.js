const fs = require("fs");

function putCopyrightToFile(cb){
    fs.readFile("a.txt", "utf-8", function (err, data){
        console.log(err);
        console.log(data);
        data = data + 
        "copyright 2024 Ripudaman Singh";
        fs.writeFile("a.txt", function(){
            cb();
        })
    });

}

function copyRight(){
    console.log("copyright has been put !!! ");
}

putCopyrightToFile(copyRight);