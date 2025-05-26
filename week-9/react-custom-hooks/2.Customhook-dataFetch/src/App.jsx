//Converting the data fetching hook to a custom hook

import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

//In simple hooks , state initialization, data-fetching
//And fetched data is done in one func.
//This problem is resolved by custom hooks

/*
  It becomes cleaner and modular
 */

function useTodos(n) {
  const [todos, setTodos] = useState([])
//including loading parameter
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const value = setInterval(() => {
      //execute body after n secs
      axios.get("https://sum-server.100xdevs.com/todos")
      .then(res => {
        setTodos(res.data.todos);
        //set loading to false after data fetching is successful 
        //include a loading parameter
        setLoading(false);
      })
    }, n * 1000)
    // fetch data initally 
    axios.get("https://sum-server.100xdevs.com/todos")
      .then(res => {
        setTodos(res.data.todos);
        //include a loading parameter
        setLoading(false);
      })
      //whenever new interval starts, it will clear
      //previous interval
      return () => {
        clearInterval(value)
      }
  }, [n])
//returning 'todos' fetched from BE and loading status
  return {
    todos: todos,
    loading: loading
  };
}

function App() {
  //include a loading parameter
  //'useTodos' hook returns todos and loading
  //'useTodos' hook is fetching data from BE after every 3 secs
  const {todos, loading} = useTodos(3);
  //include a loading parameter
  if (loading) {
    return <div>
      Loading...
    </div>
  }
  return (
    <>
      {todos.map(todo => <Track todo={todo} />)}
    </>
  )
}

//Rendering the todos
function Track({ todo }) {
  return <div>
    {todo.title}
    <br />
    {todo.description}
  </div>
}

export default App
