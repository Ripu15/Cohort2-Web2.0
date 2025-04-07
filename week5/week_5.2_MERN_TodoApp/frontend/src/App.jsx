import { useState } from 'react'
import { CreateTodo } from './componenets/CreateTodo'
import { Todos } from './componenets/Todo'

function App() {
  const [todos, setTodos] = useState([])
//plz utilize useEffect hook to resolve it

//it is fetching  data infinitely
//as setTodos are changing that runs
//parent 'App()', and it re-render

//Below line of code is hitting backend at given url
//fetching the todo-data in json format
//And setting those 'todo' state variable to become current data to be rendered using 'setTodos'
//here we are actually updating the state
  fetch("http://localhost:3000/todos")
    .then(async function(res){
      const json = await res.json();
      //Putting fetched data to todos
      setTodos(json.todos);
    })

  return (
    <div>
      {/* It is rendering the 2 inputs for 'title' and 'description' respectively and button to render them */}
       {/* that got captured in fetch call */}
      <CreateTodo/>
      {/* This rendering is changing  */}
      <Todos todos = {todos}/>
    </div>
  )
}

export default App
