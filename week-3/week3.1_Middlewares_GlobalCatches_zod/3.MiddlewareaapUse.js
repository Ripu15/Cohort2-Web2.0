const express = require("express");
const app = express();
const port = 3005;

//This middleware will be called in every route
//NO need to exlicitly call in every route or method
app.use(express.json());

app.post("/health-checkup",function(req,res){
    console.log(req.body);
});
app.listen(port);
