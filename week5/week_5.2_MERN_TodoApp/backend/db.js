//Here mongoDB is used 
/*
Todo {
    title: string,
    description: string,
    completed: boolean
}
*/

//importing 'mongoose' library for mongodb
const mongoose = require("mongoose");

//conecting to monodb 
/* This should not be done as everyone on github can see it
Its a security vulnerability */
mongoose.connect("mongodb://localhost:27017/todos");

//defining schema for todo data to be stored in DataBase
//Schema API is used for defining the 
//structure and behavior of MongoDB documents
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

//'todos' is table-name/model-name  created
const todo = mongoose.model('todos',todoSchema);

module.exports = {
    todo
}
