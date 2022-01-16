import { createContext } from "react";
import { useState } from "react/cjs/react.development";

export const AuthContext=createContext();

export const AuthContextProvider=({children})=>{
    const [auth,setAuth]=useState('signin')
    const isAuth=(value)=>{
        let val=null;
        if(auth=='signin'){
             val='signiup'
        }
        else{
             val='signin'
        }
        setAuth(val)
    }

    const toggleAuth=(data)=>{
      setAuth(data);
    }
    return<>
    <AuthContext.Provider value={{auth,isAuth,toggleAuth}}>{children}</AuthContext.Provider>
    </>
}