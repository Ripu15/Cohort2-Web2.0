//State is bunch of dynamic things on website 
//when react-dom used with react , able to render on website
import { useState } from 'react'
//Whenever any state variable within App  changes ,'App()'re-renders
function App() {
  //states
  //useState is a hook that lets to manage 
  //And describe state of react application
  //setCount is a function that let us update 'count' value
  
  //We are giving 'state' as input to react
  //acc. to changes in state the react-dom lib re-renders
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* incrementing count on click  is :
      state change/update */}
      <button onClick={function() {setCount(count+1)}}>
        {/* rendering the count on button itself */}
        count is {count}
      </button>
    </div>
  )
}

export default App
