//importing 'express' lib
const express = require("express");
//creating instance of express lib
const app = express();
//pecifying the port for listening the endpoints
const port = 3000;


//pre-checks to be put in middlewares


//Middleware to check user creds
function userMiddleware(req,res,next){
    console.log("I am in 'userMiddleware' ");
    const username = req.headers.username;
    const password = req.headers.password;
    console.log("'userMiddleware'  after parsing username and password");
   
    if(!(username === 'ripudaman' && password === 'pass')){
        res.status(403).json({
            msg: "Incorrect inputs"
        })
    }
    else{
        //next() func is called when everything is fine
        //and we can call next middleware  or callback in-line
        next();  
    }
}

//middleware to check kidney status
function kidneyMiddleware(req,res,next){
    console.log("I am in 'kidney' MIDDLEWARE");
    const kidneyId = req.query.kidneyId;
    console.log("'userMiddleware'  after parsing kidneyId");
    if(req.query.kidneyId == 1 || req.query.kidneyId == 2){
        //do something with kidney here
        res.json({
            msg : "Your kidney is fine!"
        })
        }
    else{
        next();  
    }
}


app.use(userMiddleware);
app.use(kidneyMiddleware);

//'health-checkup' endpoint that requires both 'userMiddleware' and 'userMiddleware'
app.post("/health-checkup",function(req,res){

    res.send("Your HEART is healthy");
});
//'kidney-check' endpoint that requires both 'userMiddleware' and 'userMiddleware'
app.post("/kidney-check",function(req,res){

    res.send("Your KIDNEY is healthy");
});

app.listen(port);
//input auth is neccessary because user can send any gibberish to server
//server can crash in this case

//Cannot set headers after they are sent to the client