import React, { useEffect, useState } from "react";
import io from 'socket.io-client';
import events from './events';
const ChatApp = () => {
  const [socket, setSocket] = useState(null);
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState({});
  
  useEffect(()=>{
   const initSocket = () => {
      let socket = io( 'localhost:3001', { transport : ['websocket'] } )
      setSocket(setSocket);
      socket.on('connect', () => console.log( 'Connected'))
  }
  initSocket();
  })
  return(
    <>
    <h3>Hello world</h3>
    </>
  )
}
export default ChatApp;