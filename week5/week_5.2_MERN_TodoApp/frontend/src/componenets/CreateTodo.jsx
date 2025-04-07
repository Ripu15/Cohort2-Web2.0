//Free website hosting
//vercel and netlify for frontend Hosting
//render for backend Hosting

import { useState } from "react";

export function CreateTodo(){

    //React Query
    const [title, setTitle] = useState(""); 
    const [description, setdescription] = useState(""); 

    return <div>

        {/* input 1 for title */}
        <input  id = "title" style = {{
            padding: 10,
            margin: 10
        }}
        type="text" placeholder="title" onChange={function(e){
            const value = e.target.value;
            setTitle(e.target.value);
        }}
        ></input><br/>



        {/* input 2 for description */}
        <input  id = "description" style = {{
            padding: 10,
            margin: 10
        }}
        type="text" placeholder="description" onChange={function(e){
            const value = e.target.value;
            setdescription(e.target.value);
        }}></input><br/>



        {/* Button for adding new todos */}
        {/* On clicking below defined button, the todo entered in above inputs will get displayed on specified route url */}

        <button style = {{
            padding: 10,
            margin: 10
        }} onClick={() =>{
            //fetch is typically used for making GET requests by default
            //But here,it will 'post' new todo to the BE server endpoint, specified as below:
            fetch("http://localhost:3000/todos", {
                //This request sends JSON data to a server endpoint
                //We're using POST because we're creating new data
                method: "POST",
                //It tells the body properties
                body: JSON.stringify({
                    title: title,
                    description: description
                }),
                // It tells, the body of this request is JSON, not plain text or form data.
                // This is important because it tells the server how to interpret the data sent in the request body.
                headers:{
                    "Content-type": "application/json"
                }
            })
                .then(async function(res){
                    const json = await res.json();
                    alert("Todo Added !!! ")
                })
        }}>
            Add a Todo</button>
    </div>
}