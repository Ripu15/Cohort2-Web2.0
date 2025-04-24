
//zod in http server
//input validation libararies
//example zod->schema validation
//import {z} from "zod"
//npm install zod

const express = require("express");
const zod = require("zod");
const app = express();
const obj = {
    email: "ripudaman@gmail.com",
    password: "12345678910"
}

//array of number
const schema = zod.array(zod.number());

//an object is a collection of key-value pairs
const schema1 = zod.object({
    email: zod.string(),
    password: zod.string(),
    country: zod.literal("IN").or(zod.literal("US")),
    kidneys: zod.array(zod.number())
})

const schema3 = zod.object({
    email: zod.string().email(),
    password: zod.string().min(8)
})

app.use(express.json());

app.post("/health-checkup", function(req,res){
    //const kidneys = req.body.kidneys;
    const response = schema3.safeParse(obj);
    console.log(response);
    if(!response.success){
        res.status(411).json({
            msg:" Input(s) are invalid !!! "
        })
    } else {
        res.send({
            response
        });
    }
});


app.listen(3001);