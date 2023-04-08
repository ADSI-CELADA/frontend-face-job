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

export const Router = () => {
  return (
    <>
      {/* <AuthContextProvider> */}
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/catalogue" element={<Catalogue/> } />
          <Route path="/paquetes" element={<Paquetes />} />
          <Route path="/FormPay1" element={<FormPay1 />} />
          <Route path="/FormPay2" element={<FormPay2 />} />
          <Route path="/FormPay3" element={<FormPay3 />} />


          <Route path="/createPostImage" element={<CreatePost/> } />
          <Route path="/createPostText" element={<CreatePostTexts/> } />
          <Route path="/RecoveryPass" element={<RecoveryPass/> } />
          <Route path="/RecoverCode" element={<RecoverCode/> } />
          <Route path="/recoverNewPass" element={<RecoverPassNewPass/> } />
          <Route path="/ProfileProfessions" element={<ProfileP/> } />
          <Route path="/CommentsUsers" element={<Comments/> } />
          <Route path="/CommentsTextUsers" element={<CommentsText/> } />
          <Route path="/Ajustes" element={<Ajustes/> } />
          <Route path="/UpdateForm" element={<Update/> } />
          <Route path="/DeleteForm" element={<DeleteUser/> } />
          <Route path="/Chat" element={<Chat/> } />
    
          {/* 
          
          <Route path="/inicioSesionC" element={<InicioSC />} />
          <Route path="/profile" element={<ProfileC />} />
          <Route path="/catalogue" element={<CatalogueC />} />
          <Route path="/subirPost" element={<SubirPost />} />
          <Route path="/subirPostText" element={<SubirPostText />} />
          <Route path="/escojePost" element={<EscojePost />} />
          <Route path="/manegeProfile" element={<DropdownMenu />} />
          <Route path="*" element={<Error />} /> */}
        </Routes>
      {/* </AuthContextProvider> */}
    </>
  );
};
