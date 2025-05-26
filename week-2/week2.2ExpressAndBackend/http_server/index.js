//use nodemon to restart server automatically
//npm init -y for package.json
//bring 'express' lib locally by running command:
//npm install express
//query params are given in url at client-side 

//imports library 'express' to write http server
const express = require("express");

//lib to  parse body, bring it locally using command:
//npm install body-parser
const bodyParser = require("body-parser");

//initialization of instance of express
const app = express();

//defining port for listening
//process.env.port ->way to access environment variable

//"Localhost" refers to the hostname 
//used to access the loopback network interface 
//on a computer, meaning it refers to the same device
// that the user is currently working on

//accessing environment variable
//This checks if the PORT environment variable is set
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

//res will run whenever someone hits the backend
//req: request data
//res:response data
//status sending
app.get('/',function(req, res) {
    res.status(401).send("<b>Begining to learn Express(E) which is a part of MERN stack !!! <b> ");
})

app.get('/route-handler',function(req, res) {
    res.json({
        name:"ripudaman",
        age: 21
    })
})

app.post('/',function(req, res) {

   // console.log(req.headers["authorization"]);
   console.log(req.headers.authorization);

   //const msg= req.body.message;

   //we are able to extract 'body' due to 
   //'body-parser' utility
   const msg= req.body;
   console.log(msg);
   //http://localhost:3000/?message=111
   const msgQuery= req.query.message;
   
    console.log(msgQuery);
    res.json({
        output:"HELLOOOOO......its a POST method !!! "
    })
})



app.listen(port,function(){
    console.log(`Example app listening on port ${port}`)
})
