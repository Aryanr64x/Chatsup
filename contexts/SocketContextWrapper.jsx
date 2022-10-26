import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import React from "react";
import BASE_URL from "../BASE_URL";
export const socketContext = React.createContext();
const SocketContextWrapper = ({ children })=>{
    const [socket,setSocket] = useState(null)
    useEffect(()=>{
        setSocket(io(BASE_URL))
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