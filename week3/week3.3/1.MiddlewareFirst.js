//importing 'express' lobrary for  http  server development
const express = require("express");
//Creating instance of express library
const app = express();

//'ticketChecker' is a Middleware 
function ticketChecker(req,res,next){
    const ticket = req.query.ticket;
    if(ticket == "free"){
        next();//it takes control from this middleware to next middleware or route/end-point
    }else{
        res.status(403).send("Access denied !!! ");
    }  
}
//It works for all methods 'use' hook
app.use(ticketChecker);
//if there is no'middleware' then below routes can be accessed directly
//Before every 3 routes ride1,ride2 and ride3 , 'ticketChecker' Middleware ran
app.get("/ride1",function(req,res){
    res.send("You rode the first ride ! ");
});

app.get("/ride2",function(req,res){
    res.send("You rode the second ride!")
});

app.get("/ride3",function(req,res){
    res.send("You rode the third ride!")
});

app.listen(3000);

