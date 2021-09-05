import React, { useState, useEffect, createContext } from "react";
import { auth, db } from "../Firebase";
export const UserContext = createContext({ user: null })
export default (props) => {
    const [user, setuser] = useState(null)
    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            console.log(user)
            if(user){
                const { displayName, email, uid } = user;

                setuser({
                    displayName,
                    email,
                    uid
                })
            }else{
                setuser(null)
            }
            
        })
    }, [])
    return (
        <UserContext.Provider value={user}>{props.children}</UserContext.Provider>
    )
}