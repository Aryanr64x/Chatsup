import React, { useState } from "react";

import { supabase } from "../supabase/supabase";

export const authContext = React.createContext();

const AuthContextWrapper = ({ children }) => {

    const [loggedInUser, setLoggedInUser] = useState(null)


    const signIn = async (phoneNumber) => {
        const resp = await supabase.auth.signInWithOtp({
            phone: '+91' + phoneNumber,
        })
        
        return resp;
    }

    const verifyOTP = async(token)=>{
        
        const resp = await supabase.auth.verifyOtp({
            type: 'sms',
            phone: '+916290341107',
            token: token,
          })

          return resp;
    }




    const value = {
        signIn: signIn,
        verifyOTP: verifyOTP,
        setLoggedInUser: setLoggedInUser,
        loggedInUser: loggedInUser 
    };

    return (
        <authContext.Provider value={value}>
            {children}
        </authContext.Provider>
    );
}

export default AuthContextWrapper;