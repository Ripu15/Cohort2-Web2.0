//hooks are special functions that let you access and "hook into" React's core features
//(such as state, lifecycle methods, context, etc) directly within functional components
//This eliminates the need to write class components to handle these features.

//Program that take an id of todo as input and renders it on endpoint 

//Tree-shaking : using particular APIs or utilitis from big library
import { useState , useEffect } from "react";

function App() {
  const [selectedId,setSelectedId] = useState(1);

  return <div>
    {/* Whenver a numbered button is clicked it changes 'selectedId' state variable  */}
    <button onClick={function(){
      setSelectedId(1);
    }}>1</button>

    <button onClick={function(){
      setSelectedId(2);
    }}>2</button>
    
    <button onClick={function(){
      setSelectedId(3);
    }}>3</button>

    <button onClick={function(){
      setSelectedId(4);
    }}>4</button>

  {/* Todo component is called with argument as 'id' as 'selectedId' */}
    <Todo id={selectedId} />
  </div>
}

function Todo({id}) {
  const [todo, setTodo] = useState({});
//without useEffect fetching happens infinitely
//we are selecting the todo to get rendered based on its id
//from following http server
//we press button labelled with id and that todo gets rendered
//'useEffect' will fetch the todo whenever id is changed
  useEffect(() => {
    fetch("https://sum-server.100xdevs.com/todo?id=" + id)
      .then(async function(res) {
        const json = await res.json();
        //updating 'todo' with fetched todos using 'setTodo'
        setTodo(json.todo);
      })
//dependency array takes state variables as input, if state variable changes it runs
  }, [id])//runs based on id
  
//if this array is empty it means code inside useEffect runs once its mounted
  return <div>
    <h1>
      {todo.title}
    </h1>
    <h4>
      {todo.description}
    </h4>
  </div>
}

export default App;