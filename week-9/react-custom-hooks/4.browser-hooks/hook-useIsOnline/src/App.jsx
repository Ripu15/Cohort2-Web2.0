//use-case: if someone is playing  online game , then it can tell
//the gamer that internet is not there, plz try re-connect

import { useState , useEffect} from 'react'

function useIsOnline(){
  //window.navigator.onLine is a JavaScript property that returns a boolean value 
  //indicating whether the browser is currently online or offline.
  const [isOnline, setIsOnline] = useState(window.navigator.onLine);

  useEffect(() =>{
    //listens for the browser's 'online' event and updates the state
    window.addEventListener('online',() => setIsOnline(true));
    window.addEventListener('offline',() => setIsOnline(false));
  },[isOnline])
  return isOnline;
}

function App() {
  const isOnline = useIsOnline();
  //console.log(isOnline);
  return (
    <> 
      {isOnline ? "You are online !!! ": "You are not online, plz connect to internet !!! "}
    </>
  )
}

export default App
