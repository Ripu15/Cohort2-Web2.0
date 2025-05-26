//importing 'express' lib
const express = require("express");
//creating instance for express
const app = express();
//in memory array
//seed the DB
//as soon as I restart the program it restarts
//'users' is an array of objects with first element
const users = [{
    name : "John",
    kidneys : [
        {
            healthy : false
        }
    ]
}];

//for parsing body in Post request
app.use(express.json());

//popular input method is query in .get API
app.get("/", function(req,res){
    const johnKidneys = users[0].kidneys;
    const numberOfKidneys = johnKidneys.length;
    let numberOfHealthyKidneys = 0;
    for(let i =0; i< johnKidneys.length;i++){
        if(johnKidneys[i].healthy)
            numberOfHealthyKidneys = numberOfHealthyKidneys +1;
    }
const numberOfUnHealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
res.json({
    numberOfKidneys,
    numberOfHealthyKidneys,
    numberOfUnHealthyKidneys
})
})
//For post API, we send data in body
//how to send 'post' request---Postman
//Tweak inputs and send data
//BE can be hit by postman, mobile apps,browsers
app.post("/",function(req,res){
    //capuring from body
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push ({
        healthy: isHealthy
    })
    res.json({
        msg: "Done!"
    })
})
//put API-replace kidney and make it healthy
app.put("/",function(req,res){
    const isHealthy = req.body.isHealthy;//req.body is undefined
    for(let i=0;i<users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy = true;
           healthy: isHealthy 
        }
        // /In Express.js (Node.js framework), res.json() is a method used to send a JSON response
        res.json({});
    })

//.delete API-remove unhealthy kidney(s)
app.delete("/",function(req,res){
    //check if a person has un-healthy kidney
    if(isThereAnyUnhealthyKidney()){
        const newKidneys = [];
        for(let i=0;i<users[0].kidneys.length;i++){
           if(users[0].kidneys[i].healthy){
               newKidneys.push({
                   healthy : true
               })
           }
        }
        users[0].kidneys = newKidneys;
        res.json({msg : "done !!! "});
    }
    //on FE status is checked
    //if input is gibbrish, server crashed if not handled
    else{
        res.status(411).json({
            msg: "You have NO BAD kidney"
        });
    }
    })

    function isThereAnyUnhealthyKidney(){
        let isAnyUnhealthyKidney = false;
        for(let i =0;i<users[0].kidneys.length;i++){
            if(!users[0].kidneys[i].healthy){
                isAnyUnhealthyKidney = true;
            }
            
        }
        return isAnyUnhealthyKidney;
    }

app.listen(3002);