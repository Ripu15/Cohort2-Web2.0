//npm create vite@latest- It creates vite app
//select framework : React
//select language : JS
//cd project-name
//npm install : to install dependencies
//npm run dev : it runs app locally

import { useState , memo } from "react"

//Whenever button is clicked 'updateTitle' is called ,'setTitle' state variable changes that comes insides App() component and
//App() re-render and it is parent
//of all components(Header(s)), so, all components re-render
function App() {
  const [title,setTitle] = useState("My name is Ripudaman Singh");

  //title is getting changed here
  function updateTitle(){
    setTitle("My name is " + Math.random());
  }

  return (
    //1.jsx needs to have one parent component at top level in return statement
    //And parent can have multipe children that are siblings
    //Returning Mutilple siblings at top level is not possible as it becomes difficult in reconciliation 
     //that is as the application grows, what DOM updates (reconcillation) needs to be done 

    //first 2 are dynamic headers, others are static
    //so, ideally only first two should re-render
   
      <div>
        {/* Just updating the title */}
        <button onClick={updateTitle}>Update the Title</button>
        {/* Rendering Header with title as argument */}
        <br></br> 
        {/* Calling Header function with argument */}
        <Header title={title}></Header>
        <br></br>
        <Header title={title}></Header>
        <br></br>
        <Header title="harkirat1"></Header>
        <Header title="harkirat2"></Header>
        <Header title="harkirat3"></Header>
        <Header title="harkirat4"></Header>
        <Header title="harkirat5"></Header>
        <Header title="harkirat6"></Header>
        <Header title="harkirat7"></Header>
        <Header title="harkirat8"></Header>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
    )
}

/*Header component*/

//2. Re-rendering
//install 'react developer tools' to visualise re-rendering

// For dynamic websites rule of thumb is to minimize re-rendering
//It becomes more important in native-react or while developing a game

//Solution:
//'memo'- It lets u skip re-rendering when its props (args, here 'title') are unchanged
//as a result, onlremainsy dynamic part changes and app re-renders and static part is NOT-rendered

//argument:title = obj destructuring

//If a parent re-renders, every component or child re-renders
//but if children are put inside 'memo', they does not re-render
const Header = memo(function Header({title}){
  return <div>
    {title}
  </div>
})

//with below function everything (static + dynamic components )renders when button is clicked
// const Header = function Header({title}){
//   return <div>
//     {title}
//   </div>
// }

export default App
