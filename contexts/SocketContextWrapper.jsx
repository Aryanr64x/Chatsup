import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import React from "react";
export const socketContext = React.createContext();
const SocketContextWrapper = ({ children })=>{
    const [socket,setSocket] = useState(null)
    useEffect(()=>{
        setSocket(io('https://5b23-2405-201-a409-c1dc-b55e-f428-a602-afc5.ngrok.io'))
    },[])

    const values = {
        socket
    }

    return (
        <socketContext.Provider value={values}>
                { children }
        </socketContext.Provider>
    )
}


export default SocketContextWrapper;