import React, { useState, useContext, useEffect } from 'react'
import { contextUser } from "../../Hooks/userContext";
// import logo from "../../assets/img/Logo.png";
import { Link } from "react-router-dom";
import Cookies from 'universal-cookie'
/*import { IconContext } from "react-icons";
import { AiFillCloseCircle } from "react-icons/ai";*/


export const Sidebar = () => {
  const cookies = new Cookies();
  let userContextInfo = useContext(contextUser)
  const [styleSide, setStyleSide] = useState("sidebar close")



  function openSide() {
    if (styleSide == "sidebar close") {
      setStyleSide("sidebar")
    }
    if (styleSide == "sidebar") {
      setStyleSide("sidebar close")
    }

  }
  function typePost() {
    document.getElementById("lolbel-post").click();
  }

  const closeSesion = () => {
    cookies.remove('token', { path: "/" })
    window.location.href = "/"
  }

  return (
    <>
      <div className={styleSide}>
        <div className="logo-details">
          <i class='bx bx-menu' onClick={openSide}></i>
          <Link to="/" className="logo_name">Face-Job</Link>
        </div>
        <ul className="nav-links">
          <li>
            <a href="#">
              <i class='bx bx-user-pin' ></i>
              <Link onClick={openSide} to="/catalogue" className="link_name">Perfiles</Link>
            </a>
            <ul className="sub-menu blank">
              <li><Link onClick={openSide} to="/catalogue" className="link_name">Perfiles</Link></li>
            </ul>
          </li>
          <li>
            <a href="#">
              <i class='bx bx-carousel' ></i>
              <Link onClick={openSide} to="/posts" className="link_name">Publicaciones</Link>
            </a>
            <ul className="sub-menu">
              <li><Link onClick={openSide} to="/posts" className="link_name" href="#">Publicaciones</Link></li>
            </ul>
          </li>
          <li>
            <a href="#">
              <i class='bx bx-help-circle' ></i>
              <Link onClick={openSide} to="/claims" className="link_name">Sobre nosotros</Link>
            </a>
            <ul className="sub-menu">
              <li><Link onClick={openSide} to="/claims" className="link_name" href="#">Sobre nosotros</Link></li>
            </ul>
          </li>
          <li>
            <a href="#">
              <i class='bx bx-purchase-tag-alt' ></i>
              <Link onClick={openSide} to="/paquetes" className="link_name">Paquetes</Link>
            </a>
            <ul className="sub-menu blank">
              <li><Link onClick={openSide} to="/paquetes" className="link_name" href="#">Paquetes</Link></li>
            </ul>
          </li>
          {userContextInfo.loged ? <>
            <li>
              <a href="#">
                <i class='bx bx-chat'></i>
                <Link onClick={openSide} to="/chat" className="link_name">Chat</Link>
              </a>
              <ul className="sub-menu blank">
                <li><Link onClick={openSide} to="/chat" className="link_name" href="#">Chat</Link></li>
              </ul>
            </li>
            <li>
              <a href="#">
                <i class='bx bx-camera'></i>
                <Link onClick={openSide} to="/profile" className="link_name">Mis Publicaciones</Link>
              </a>
              <ul className="sub-menu">
                <li><Link onClick={openSide} to="/profile" className="link_name" href="#">Mis Publicaciones</Link></li>
              </ul>
            </li>
            <li>
              <a href="#">
                <i class='bx bx-note' ></i>
                <Link onClick={openSide} to="/profileText" className="link_name">Mis Postales</Link>
              </a>
              <ul className="sub-menu blank">
                <li><Link onClick={openSide} className="link_name" href="#">Mis Postales</Link></li>
              </ul>
            </li>
            <li>
              <a href="#">
                <i class='bx bx-folder-plus' ></i>
                <span className="link_name" /*onClick={()=>{typePost()}}*/>Publicar</span>
              </a>
              <ul className="sub-menu blank">
                <li><a className="link_name" href="#">Publicar</a></li>
              </ul>
            </li>
            <li>
              <a href="#">
                <i className='bx bx-cog' ></i>
                <span className="link_name">Ajustes</span>
              </a>
              <ul className="sub-menu blank">
                <li><a className="link_name" href="#">Ajustes</a></li>
              </ul>
            </li>
          </> : <></>}
          {userContextInfo.loged ?
            <div className="profile-details">
              <div className="name-job">
                <Link onClick={openSide} to="/profile" className="profile_name">{userContextInfo.infoUser.name}</Link>
              </div>
              <i className='bx bx-log-out' onClick={closeSesion}></i>
            </div>
             :
            <div className="profile-details">
              <div className="name-job">
                <Link onClick={openSide} to="/login" className="profile_name">Iniciar sesión</Link>
              </div>
            </div>}
        </ul>
      </div>
      {/* <div className="boton6-modal">
    <label htmlFor="btn6-modal" id="lolbel-post">
      Abrir Modal
    </label>
  </div>
  <input type="checkbox" id="btn6-modal" />
  <div className="container6-modal">
    <div className="content6-modal">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h2>Tipo de publicación</h2>{" "}
        <span>
          <label htmlFor="btn6-modal">
            <IconContext.Provider value={{ size: "30px" }}>
              {" "}
              <div>
                {" "}
                <AiFillCloseCircle />
              </div>
            </IconContext.Provider>
          </label>
        </span>
      </div>

      <p>Que tipo de publicación desea realizar?</p>
      <div className="btn6-cerrar">
       
        <label style={{marginRight:"10px"}} onClick={postImagesRedirect}>
          Imagen
        </label>
        <label  onClick={postTextRedirect}>
          Texto
        </label>
      </div>
    </div>
    <label htmlFor="btn6-modal" className="cerrar6-modal"></label>
  </div> */}
    </>

  )
}
