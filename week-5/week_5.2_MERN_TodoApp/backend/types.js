//backend validation is designed to ensure that only 
//authorized and valid data enters the system

//We are using zod lib for it

//zod is schema declaration and validation library

// It allows you to define and enforce strict schemas for your data structures
// ensuring type safety and data integrity at compile-time


//importing 'zod' library 
const zod = require("zod");

/*
    {
        title: string,
        desrcription: string,
    }

    {
    }
    
    {
        id: string,
    }

*/
/*creating schema object*/
//inputs from user side in body of 'Postman'
const createTodo = zod.object({
    title: zod.string(),
    description: zod.string()
})

//id of todo to mark it as completed
const updateTodo = zod.object({
    id: zod.string()
})

//How to export code written or variables from this file using module
module.exports = {
    createTodo: createTodo,
    updateTodo: updateTodo
}
