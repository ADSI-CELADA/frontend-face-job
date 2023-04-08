import { useEffect,useState } from "react";
import { loadInfoUser } from "../api/api"
import React from "react";

export const contextUser =React.createContext({})


export default function ContextUserData({children}){
    const [loged,setLoget]=useState(false)
    const [infoUser,setInfoUser]=useState(null)
    const [imagesTexts,setImagesTexts]=useState(true)
    const [recoverPass,setRecoverPass]=useState("")
    const [emailProfessions,setEmailProfessions]=useState("null")
    const [idComment,setIdComment]=useState(null)
    const [paramUserChat,setparamUserChat]=useState('')
    const [changesMenssage,setChangesMenssage]=useState()
  useEffect(()=>{
    
    loadInfoUserPage()
    
  },[loged])

async function loadInfoUserPage() {
    const result=await loadInfoUser();
    
   if (!result.data[0].name) {
      setLoget(false)
      setInfoUser("notloged")
      console.log("no esta logeado");
 
     
    }else{
      setLoget(true)
      setInfoUser(result.data[0]);
      console.log("esta logeado");
    }
  }
function postImages() {
  setImagesTexts(true)
}
function postTexts() {
  setImagesTexts(false)
}
function changeEmail(newEmail) {
  setRecoverPass(newEmail)
}
function chageEmailProfessions(params) {
  setEmailProfessions(params)
}
function changeIdComment(params) {
  setIdComment(params)
}

function  changePramUserChat(params) {
  setparamUserChat(params)
}
function changesMenssageUser(params) {
  setChangesMenssage(params)
}
    return(
        <contextUser.Provider value={{idComment,changeIdComment,emailProfessions,chageEmailProfessions,recoverPass,changeEmail,loged,setLoget,infoUser,setInfoUser,loadInfoUserPage,imagesTexts,postImages,postTexts,paramUserChat,changePramUserChat,changesMenssageUser,changesMenssage}}>
            {children}
        </contextUser.Provider>
    )
}