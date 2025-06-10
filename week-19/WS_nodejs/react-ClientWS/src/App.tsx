import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [socket, setSocket] = useState<null | WebSocket>(null)
  const [latestMessage, setlatestMessage] = useState("");
  const [message,setMessage] = useState("");

  useEffect(() =>{
    const socket = new WebSocket('ws://localhost:8080')
    socket.onopen = () =>{
      console.log('Connected');
      setSocket(socket);
    }
    //recieve data from FE
    socket.onmessage = (message) => {
      console.log('Received Message:',message.data)

      setlatestMessage(message.data)
    }
    
    return () => {
      socket.close()
    }

  }, [])

  if(!socket){
    return <div>
      Connecting to socket Server...
      { latestMessage }
    </div>
  }

  return (
    <>
     <input onChange={(e) => {
      setMessage(e.target.value);
     }}></input>
     <button onClick={() => {
      socket.send(message);
     }}>Send</button>
     {latestMessage}
    </>
  )
}

export default App
