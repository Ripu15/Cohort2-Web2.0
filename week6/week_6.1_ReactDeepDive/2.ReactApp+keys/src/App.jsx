//'useState' hook imported
import { useState } from 'react'
//key or ids for new todos:
// Key is a special string attribute that you need to include when 
// creating a list of elements in React
// to identify which items in the list are changed, updated, or deleted
// as it uniquely identifies a particular element in list

let count = 4;

function App() {
  //2. state array initialization
  const [todos, setTodos] = useState([{
    id:1,
    title: "go to GYM",
    description: "go to GYM from 6-7"
  },{
    id:2,
    title: "eat food",
    description: "eat Food from 8-9"
  },{
    id:3,
    title: "go to Class",
    description: "go to Class at 9"
  }
])

//4.Adding new todos
function addTodo(){
  const newTodos = [];
  // iterating over old todos
  //and push old todos to newtodos one by one
  for(let i=0;i<todos.length;i++)
  {
    newTodos.push(todos[i]);
  }
  //pushing newly added todo to the newTodos array 
  newTodos.push({
    id: count++,
    title: Math.random(),
    description: Math.random()
  })
  //Now replace old todos with newTodos using setTodos
  setTodos(newTodos);
}

//All rendering happens here that is in 'return'
  return (
    <div>
      <button onClick={addTodo}>Add a todo</button>
      {/* //3. */}
      {/* For rendering every todo calling 'Todo' component with arguments  using 'map'*/}
      {/* Need to give every element a unique key */}
      {/* keys uniquely identifies a particular todo */}
      {/* if keys are NOT specified 'react' will remove everything and re-adds it, that shoots up the re-rendering*/}
      {todos.map(todo=> <Todo key = {todo.id} title={todo.title} description={todo.description}/>)}
    </div>
    )
}
// 1. Todo component creation
//it takes title and description as input args
function Todo({title, description}){
  return <div>
    <h1>
      {title}
    </h1>
    <h5>
      {description}
    </h5>
  </div>
}

export default App
