import { useEffect,useState } from "react";
import { loadInfoUser } from "../api/api"
import React from "react";

export const contextUser =React.createContext({})


export default function ContextUserData({children}){
    const [loged,setLoget]=useState(false)
    const [infoUser,setInfoUser]=useState(null)
  
  useEffect(()=>{
    
    loadInfoUserPage()
    
  },[loged])

async function loadInfoUserPage() {
    const result=await loadInfoUser();
    
   if (!result.data.lengh==0) {
      setLoget(false)
      setInfoUser("notloged")
      console.log("no esta logeado");
 
     
    }else{
      setLoget(true)
      setInfoUser(result.data[0]);
      console.log(result.data[0]);
      console.log("esta logeado");
    }
  }

    return(
        <contextUser.Provider value={{loged,setLoget,infoUser,setInfoUser,loadInfoUserPage}}>
            {children}
        </contextUser.Provider>
    )
}