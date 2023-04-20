import { Route, Routes } from "react-router-dom";
import { LogIn } from "../components/Forms/LogIn";
import { SignUp } from "../components/Forms/SignUp";
import { Catalogue } from "../pages/Catalogue";
// // import {RegistroC, InicioSC, ProfileC, CatalogueC, SubirPost, SubirPostText, EscojePost, DropdownMenu } from "../components/barril.js"
// import { AuthContextProvider } from "../context/AuthContext.jsx";
import Index from "../pages/Index"
import { Profile } from "../pages/Profile";
import { CreatePost } from "../components/Forms/FormsCreatePosts/PostImages/CreatePostImage";
import { CreatePostTexts } from "../components/Forms/FormsCreatePosts/PostImages/CreatePostTexts";
import {RecoveryPass} from '../components/Forms/FormsCreatePosts/postText/RecuperaPassEmail'
import { RecoverCode } from "../components/Forms/FormsCreatePosts/postText/RecoverCode";
import { RecoverPassNewPass } from "../components/Forms/FormsCreatePosts/postText/RecoverPassNewPass";
import { ProfileP } from "../pages/ProfileProfession";
import {Comments} from "../components/Profile/Comments"
import { CommentsText } from "../components/Profile/CommentsText";
import { Ajustes } from "../pages/Ajustes";
import { Update } from "../components/Forms/Update";
import { DeleteUser } from "../components/Forms/DeleteUser";
import { Paquetes } from "../pages/Paquetes";
import  FormPay1  from "../components/Forms/FormsPayment/FormPay1";
import  FormPay2  from "../components/Forms/FormsPayment/FormPay2";
import  FormPay3  from "../components/Forms/FormsPayment/FormPay3";
import Chat from "../pages/Chat";
import { PostCategories } from "../pages/PostCategories";
import { Claims } from "../pages/Claims";
import AdminChats from "../pages/Admin";
import Cookies from "universal-cookie"
import ProtectedRoute from "../components/ProtectedRoutes/ProtectedRoute";
import { loadInfoUser } from "../api/api";
import { useEffect, useState } from "react";
import Index2 from "../pages/Index2";
export const Router = () => {
  const cookies = new Cookies();
  const valorCookie = cookies.get('token');
  const [infoUser,setInfoUser]=useState({"rol":""})
useEffect(()=>{
async function loadInfo() {
  const response=await loadInfoUser()
  console.log(response.data[0].rol);
  setInfoUser(response.data[0])
}
loadInfo()
},[])
  return (
    <>
      {/* <AuthContextProvider> */}
        <Routes>
          <Route element={<ProtectedRoute isAllowsed={infoUser.rol!="ADMIN"} redirectTo={infoUser.rol=="ADMIN" ? "/ADMIN" : "/"}/>}>
        <Route path="/" element={<Index />} />
        <Route path="/index2" element={<Index2 />} />
        <Route path="/paquetes" element={<Paquetes />} />
        <Route path="/catalogue" element={<Catalogue/> } />
        <Route path="/claims" element={<Claims/> } />
        <Route path="/posts" element={<PostCategories />} />
          </Route>
        



        {/* no loged */}
       
        <Route element={<ProtectedRoute isAllowsed={valorCookie==undefined} redirectTo={infoUser.rol=="ADMIN" ? "/ADMIN" : "/"}/>}>

        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/RecoveryPass" element={<RecoveryPass/> } />
        <Route path="/RecoverCode" element={<RecoverCode/> } />
        <Route path="/recoverNewPass" element={<RecoverPassNewPass/> } />
        </Route>
        
         
        {/* no loged */}
          
          {/* loged */}
          <Route element={<ProtectedRoute isAllowsed={infoUser.rol=="Cliente"} redirectTo={infoUser.rol=="ADMIN" ? "/ADMIN" : "/"}/>}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/FormPay1" element={<FormPay1 />} />
          <Route path="/FormPay2" element={<FormPay2 />} />
          <Route path="/FormPay3" element={<FormPay3 />} />
          
          <Route path="/createPostImage" element={<CreatePost/> } />
          <Route path="/createPostText" element={<CreatePostTexts/> } />
          <Route path="/ProfileProfessions" element={<ProfileP/> } /> 
          <Route path="/CommentsUsers" element={<Comments/> } />
          <Route path="/CommentsTextUsers" element={<CommentsText/> } />
          <Route path="/Ajustes" element={<Ajustes/> } />
          <Route path="/UpdateForm" element={<Update/> } />
          <Route path="/DeleteForm" element={<DeleteUser/> } />
          <Route path="/Chat" element={<Chat/> } />
          </Route>
          
          {/* loged */}

          
         {/* admin */}
         <Route element={<ProtectedRoute isAllowsed={infoUser.rol=="ADMIN"}/>}>
        <Route path="/ADMIN" element={<AdminChats/>} />
         </Route>
         
        {/* admin */}
          
          
          
        </Routes>
   
    </>
  );
};
