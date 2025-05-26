//JS prgram for http based  JWT generation and verification

//importing 'express' library
const express = require("express");
//importing lib for JWT
const jwt = require("jsonwebtoken");
//jwt password for jwt generation and verification
const jwtPassword = "123456";
//Express lib instance
const app = express();
app.use(express.json());

//in memory users 
//these are already users 
const ALL_USERS = [
  {
    username: "harkirat@gmail.com",
    password: "123",
    name: "harkirat singh",
  },
  {
    username: "raman@gmail.com",
    password: "123321",
    name: "Raman singh",
  },
  {
    username: "priya@gmail.com",
    password: "123321",
    name: "Priya kumari",
  },
];

//'userExists' function to check if user already exists or not
// using the 'username' and 'password' as arguments passed to it
function userExists(username, password) {
  // write logic to return true or false if this user exists
  // in ALL_USERS array
  let userExist = false;
  for(let i=0;i<ALL_USERS.length;i++){
    if(ALL_USERS[i].username == username && ALL_USERS[i].password == password){
        userExist= true;
    }
  }
  return userExist;
}

//This end-point generates a 'token' if user is new
app.post("/signIn", function (req, res) {
  //capturing 'username' and 'password' from body of client
  const username = req.body.username;
  const password = req.body.password;
//checking if user is new
  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesnt exist in our in-memory-db",
    });
  }
//creates token for if its a new user , token is generated for username only using secret
//and returns the generated token
  var token = jwt.sign({ username: username }, jwtPassword );
  return res.json({
    token,
  });
});

//this endpoint verifies the token generated for new user 
//for endpoint 'signin'
app.get("/users", function (req, res) {
  //console.log(req.headers.authorization)
  //capturing 'authorization' from headers passed from client side
    const token = req.headers.authorization;
  //token is verified using the secret
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    // return user itself
  res.json({
    users:ALL_USERS.filter(function(value){
      if(value.username == username){
        return true;
      }
      else{
        return false;
      }
    })
  })
});

app.listen(3000)
