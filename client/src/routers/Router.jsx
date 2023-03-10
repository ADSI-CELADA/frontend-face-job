import { Route, Routes } from "react-router-dom";
import { LogIn } from "../components/Forms/LogIn";
import { SignUp } from "../components/Forms/SignUp";
import { Catalogue } from "../pages/Catalogue";
// // import {RegistroC, InicioSC, ProfileC, CatalogueC, SubirPost, SubirPostText, EscojePost, DropdownMenu } from "../components/barril.js"
// import { AuthContextProvider } from "../context/AuthContext.jsx";
import Index from "../pages/Index"
import { Profile } from "../pages/Profile";
import { CreatePost } from "../components/Forms/FormsCreatePosts/PostImages/CreatePostImage";

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
          <Route path="/createPostImage" element={<CreatePost/> } />
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
