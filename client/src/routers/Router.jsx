import { Route, Routes } from "react-router-dom";
// // import {RegistroC, InicioSC, ProfileC, CatalogueC, SubirPost, SubirPostText, EscojePost, DropdownMenu } from "../components/barril.js"
// import { AuthContextProvider } from "../context/AuthContext.jsx";
import Index from "../pages/Index"

export const Router = () => {
  return (
    <>
      {/* <AuthContextProvider> */}
        <Routes>
          <Route path="/" element={<Index />} />
          {/* 
          <Route path="/registroC" element={<RegistroC />} />
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
