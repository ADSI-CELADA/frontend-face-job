import React,{useState,useContext} from 'react'
import { contextUser } from "../../Hooks/userContext";
// import logo from "../../assets/img/Logo.png";
import { Link } from "react-router-dom";
import Cookies from 'universal-cookie'



export const Sidebar = () => {

  const cookies=new Cookies();
  let userContextInfo=useContext(contextUser)
  const [styleSide,setStyleSide] = useState("sidebar close")

  function openSide() {
    if (styleSide == "sidebar close") {
      setStyleSide("sidebar")
    }
    if(styleSide == "sidebar") {
      setStyleSide("sidebar close")
    }
    
  }

  const closeSesion=()=>{
    cookies.remove('token',{path:"/"})
    window.location.href="/"
    }

  return (
    <>
        {/* <nav className="sidebar">
      <div className="sidebar-logo">
        <img src={logo} alt="" />
        <Link to="/index2">Face-Job</Link>
      </div>
      <ul className="sidebar-navigation">
        <li>perfils</li>
        <li>oublicaciones</li>
        <li>sobre nosotros</li>
        <li>paquetes</li>
        <li>Crear post</li>
        <li>Ajustes</li>
      </ul>
      <div className="sidebar-login">
        register
      </div>
    </nav> */}

      <div className={styleSide}>
    <div className="logo-details">
      <i className='bx bx-menu' onClick={openSide}></i>
      <span className="logo_name">Subastar.lo</span>
    </div>
    <ul className="nav-links">
      <li>
        <a href="#">
          <i className='bx bx-grid-alt' ></i>
          <span className="link_name">Perfil</span>
        </a>
        <ul className="sub-menu blank">
          <li><a className="link_name" href="#">Category</a></li>
        </ul>
      </li>
      <li>
        <div className="iocn-link">
          <a href="#">
            <i className='bx bx-collection' ></i>
            <span className="link_name">Category</span>
          </a>
        </div>
        <ul className="sub-menu">
          <li><a className="link_name" href="#">Category</a></li>
          <li><a href="#">HTML & CSS</a></li>
          <li><a href="#">JavaScript</a></li>
          <li><a href="#">PHP & MySQL</a></li>
        </ul>
      </li>
      <li>
        <div className="iocn-link">
          <a href="#">
            <i className='bx bx-book-alt' ></i>
            <span className="link_name">Subastas</span>
          </a>
        </div>
        <ul className="sub-menu">
          <li><a className="link_name" href="#">Posts</a></li>
          <li><a href="#">subastas en proceso</a></li>
          <li><a href="#">subastas finalizadas</a></li>
          <li><a href="#">Card Design</a></li>
        </ul>
      </li>
      <li>
        <a href="#">
          <i className='bx bx-pie-chart-alt-2' ></i>
          <span className="link_name">Analytics</span>
        </a>
        <ul className="sub-menu blank">
          <li><a className="link_name" href="#">Analytics</a></li>
        </ul>
      </li>
      <li>
        <a href="#">
          <i className='bx bx-line-chart' ></i>
          <span className="link_name">Chart</span>
        </a>
        <ul className="sub-menu blank">
          <li><a className="link_name" href="#">Chart</a></li>
        </ul>
      </li>
      <li>
        <div className="iocn-link">
          <a href="#">
            <i className='bx bx-plug' ></i>
            <span className="link_name">Plugins</span>
          </a>
        </div>
        <ul className="sub-menu">
          <li><a className="link_name" href="#">Plugins</a></li>
          <li><a href="#">UI Face</a></li>
          <li><a href="#">Pigments</a></li>
          <li><a href="#">Box Icons</a></li>
        </ul>
      </li>
      <li>
        <a href="#">
          <i className='bx bx-compass' ></i>
          <span className="link_name">Contactanos</span>
        </a>
        <ul className="sub-menu blank">
          <li><a className="link_name" href="#">Explore</a></li>
        </ul>
      </li>
      <li>
        <a href="#">
          <i className='bx bx-history'></i>
          <span className="link_name">Historial</span>
        </a>
        <ul className="sub-menu blank">
          <li><a className="link_name" href="#">History</a></li>
        </ul>
      </li>
      <li>
        <a href="#">
          <i className='bx bx-cog' ></i>
          <span className="link_name">Setting</span>
        </a>
        <ul className="sub-menu blank">
          <li><a className="link_name" href="#">Setting</a></li>
        </ul>
      </li>
      <li>
   { userContextInfo.loged ? 
   <div className="profile-details">
      <div className="name-job">
        <Link to="/profile" className="profile_name">{userContextInfo.name}</Link>
      </div>
      <i className='bx bx-log-out' onClick={closeSesion}></i>
    </div> :

    <div className="profile-details">
    <div className="profile-content">

    </div>
    <div className="name-job">
      <Link to="/login" className="profile_name">Iniar sesión</Link>
    </div>
  </div>}
  </li>
</ul>
  </div>
    </>

  )
}
