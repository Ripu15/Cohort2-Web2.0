//JS program to signify the importance of using middlewares
// JS program without middlewares

//importing 'express' lib
const express = require("express");

//creating instance of 'express' object
const app = express();
//specifying port for listening the endpoint of program or website
const port = 3005;

//middlewares NOT used
//bad way of doing input validation
//Here we need to do auth that we are doing at endpoints
//or at routes
//suppose we need to this auth for multiple endpoints then
//it will not follow DRY(Donot Repeat Yourself)
//In this case we will require middlewares(or functions) sitting bw
//clients and endpoint
app.get("/health-checkup",function(req,res){
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyId = req.query.kidneyId;
    
    //username and password auth
    if(username === 'ripudaman' && password === 'pass'){
        //input validation
        if(kidneyId == 1 || kidneyId == 2){
            //do something with kidney here
            res.json({
                msg : "Valid User !!!"
            })
        } else{
            res.status(400).json({msg : "Something is  up with your  kidney inputs"});
            }
    }
    else{
    res.status(400).json({msg : "Something is  up with your cred inputs"});
    }
});
app.listen(port);
//Cannot set headers after they are sent to the client