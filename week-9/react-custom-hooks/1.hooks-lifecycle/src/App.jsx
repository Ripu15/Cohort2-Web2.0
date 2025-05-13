import React, { useState, useEffect } from 'react';
import './App.css'

  function App() {
    const [render,setRender] = useState(true);
    //Life cycle events using useEffect
    //Here the component will render(mount) for 3s, then unmounts
    useEffect(() =>{
      setTimeout(() => {
        setRender(r => !r);
      },2000)
    },[])

    return (
      <>
      {/* if render state is true, then plz render 'MyComponent' otherwise render sec div */}
        {render ? <MyComponent/> : <div>I am second div: To Tell you that FIRST component gets UNMOUNTED !!!  </div>}
    
      </>
    )
  }

function MyComponent() {
  //For empty condition in 'useEffect'
  //when component mounts for first time ,first line will execute
  
  //if component unmounts then return statement will execute
  useEffect(() => {
    console.log("Component gets MOUNTED !!! ");
    //you can return only a func from within 'useEffect'
    return () => {
      console.log("Component gets UNMOUNTED !!! ");
    };
  }, []);
 return <div>
  {/* mount and unmount of component is shown by below code */}
   From Inside the First component...
 </div>
  // Render UI
}

// class MyComponent extends React.Component {
//   componentDidMount() {
//     // Perform setup or data fetching here
//     console.log("Component MOUNTED !!! ");
//   }

//   componentWillUnmount() {
//     // Clean up (e.g., remove event listeners or cancel subscriptions)
//     console.log("Component UN-mounted !!! ");
//   }

//   render() {
//     // Render UI
//   }
// }


export default App
