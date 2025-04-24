//Here in this JS program, table is created in mongo DB

//Importing 'mongoose' library
const mongoose = require('mongoose');

//connecting with mongoDB data-base using mongoose string generated during DB creation 
mongoose.connect('connecting string/');


                
//model: structure of table
//'UsersNEW' is Table name ; three entities will be there with expected types
const UsersNEW = mongoose.model('UsersNEW',{name:String, email:String, password: String});
//new user created
const user = new UsersNEW({
    name: 'Ripu', 
    email: 'ripu@gmail.com', 
    password: '123789'});

//put data into db
user.save();
