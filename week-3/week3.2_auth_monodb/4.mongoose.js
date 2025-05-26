//CRUD- Create , Read, Update, Delete

//JS program http server to save data to mongoose Database 

//importing 'express' library 
const express = require("express");
//importing 'mongoose' library
const mongoose = require("mongoose");

//connecting to mongoDB DataBase
mongoose.connect('connecting string/');

//Creating structure for table named 'User'
const User = mongoose.model("User", {
  name: String,
  username: String,
  pasword: String,
});

//creating express instance
const app = express();
app.use(express.json());

//This endpoint creates a new user
app.post("/signup", async function (req, res) {
  //capturing the 'username', 'password' and 'name'
  //from body, received from client side
  const username = req.body.username;
  const password = req.body.password;
  const name = req.body.name;

  //check for new user
  const existingUser = await User.findOne({email: username});
  if(existingUser){
    return res.status(400).send("Username Already Exists !!! ");
  }
  //creating new user for mongoDB DataBase
  const user = new User({
    name: name,
    email: username,
    password: password
  });
  //Saving it to BataBase
  user.save();
  res.json({
    "msg": "New  User Created Successfully"
  })
});

app.listen(3000);
