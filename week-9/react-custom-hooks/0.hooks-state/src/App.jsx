//Functional component in react for accessing react state

 import React from 'react';

function App() {   
  // The return statement specifies the JSX (or HTML-like) elements that will be rendered to the UI
  return (
    <>
      <MyComponent/>
    </>
  )
}
// React.Component is a base class in React used to define
// class components

class MyComponent extends React.Component {
  //constructor : It initializes the component's state and sets 
  //up any necessary configurations.
  constructor(props) {
    //calls the constructor of the parent class
    //required to properly pass props (if any) to the component
    super(props);
    //This initializes the component's state
    this.state = { count: 0 };
  }

  incrementCount = () => {
    //this.setState is a method used to update the component's state.
    //this.state.count refers to the current value of the count property in the state.
    this.setState({ count: this.state.count + 1 });
  }
// The render() method is required in every class component.
// It returns the JSX (HTML-like syntax) that defines what 
// should be displayed on the screen.
  render() {
    return (
      <div>
        {/* Renders current state of 'count' */}
        <p>{this.state.count}</p>
        {/* On click it increments value of 'count' */}
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
}

export default App
