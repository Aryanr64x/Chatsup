import React, { useState } from "react";

import { supabase } from "../supabase/supabase";

export const authContext = React.createContext();

const AuthContextWrapper = ({ children }) => {

    const [loggedInUser, setLoggedInUser] = useState(null)
    const [token, setToken] = useState(null)





    const value = {
        setToken,setLoggedInUser, loggedInUser, token
    };

    return (
        <authContext.Provider value={value}>
            {children}
        </authContext.Provider>
    );
}

export default AuthContextWrapper;