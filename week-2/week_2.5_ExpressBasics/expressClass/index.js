//Program creates a http server
//using express lib

//express is not a node default-lib, means it does not bundled with node
//to bring it locally on machine :
// write command : npm install express

const express = require("express");
const app = express();
app.listen(3001);

//function to cal sum of first n
//natural numbers
function sum(n){
    let ans = 0;
    for(let i =1; i<= n;i++)
        ans = ans + i;
    return ans;
}

// req-request from client side 
//res-response from server side
app.get("/",function(req,res){
    //throw new Error ("No Way !!! ");
    //capturing query param (http://localhost:3001/?n=100)
    const n = req.query.n;
   
    //calling API 'sum'
    const ans = sum(n);
    
    //displaying output
    //res.send is a method in Express.js,
    // a web application framework for Node.js,
    // used to send a response back to the client
    res.send("Hi, Your Answer is : " + ans.toString());
})