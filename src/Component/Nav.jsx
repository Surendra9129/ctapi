import react from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
export const Nav=()=>{
    const {auth,isAuth,toggleAuth}=useContext(AuthContext)
     return<>
     <div className="nav">
         <button>{auth}</button>
     </div>
    <button onClick={()=>{
        isAuth('ahdi')}}> Toggle

        </button>
     </>
}