
import { memo, useState, useCallback  } from "react";

function App() {
  const [count, setCount] = useState(0);

  //func1 with 'onClick' name

  // function onClick() {
  //   console.log("child clicked")
  // }

  const onClick = useCallback(() =>{ 
    console.log("child clicked")
  },[])
  

  return <div>
    {/* calling 'Child' component with arg */}
    <Child onClick={onClick} />
  {/* func2 with same name 'onClick' */}
  {/* whenever its clicked 'onClick' func changes, 
  so 'Child' func re-renders */}
    <button onClick={() => {
      setCount(count + 1);
    }}>Click me {count}</button>
  </div>
}
//Child component should not re-render unless 
//the 'onClick' function changes.
const Child = memo(({onClick}) => {
  console.log("child render")

  return <div>
    <button onClick={onClick}>Button clicked</button>
  </div>
})

export default App;
