//Input vd by user can be wrong
//that can crash the server
//error handling in middlewares

//These are ways to handle unexpected errors 
// that occur anywhere in your application, 
// instead of crashing the server or letting them go unhandled

const express = require("express");
const app = express();
app.use(express.json());

app.post("/health-checkup", function(req,res){
    const kidneys = req.body.kidneys;
    const kidneyLength = kidneys.length;

    res.send("you have " + kidneyLength + " kidneys");
});
//Error handling in middlewares
//Global catches help in providing  Better error msg at client side
app.use(function(error,req,res,next) {
    res.json({
        msg : "Sorry, something is up with our SERVER !!!"})
})

app.listen(3000);
