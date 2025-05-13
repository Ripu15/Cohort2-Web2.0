//Need to minimize BE requests for every word typed
//lets say if no key is pressed for 500ms, then request
//to BE should go

//debouncing is a technique used to limit the rate at which
// a function gets executed, especially for performance-intensive operations 
//like handling user input, resizing, or scrolling

import React, { useState, useEffect } from 'react';

function useDebounce(value, timeout){
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() =>{
    let timeoutNumber = setTimeout(() =>{
      setDebouncedValue(value);
    }, timeout);
 //do use 'useEffect' here to give fetch call to Backend
    return () => {
      //clearing all intermediate clocks
      clearTimeout(timeoutNumber);
    }
  }, [value]);
  
  return debouncedValue;
}

function App(){
  const [value, setValue] = useState(0);
  const debouncedValue = useDebounce(value, 500);

  return (
    <>
      Debounced Value is {debouncedValue}
      <input type= "text" onChange={ e => setValue(e.target.value)}/>
    </>
  )
}


export default App;