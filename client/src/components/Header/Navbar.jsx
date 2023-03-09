import "../../assets/css/style.css"
import logo from "../../assets/img/Logo.png";
import { NavLink } from 'react-router-dom'
import { Link } from "react-router-dom";
import { useState } from "react";

export const Navbar = () =>  {

  const [ fix, setFix ] = useState(false)

  function setFixedNavBar(){
      if (window.scrollY >=20){
          setFix(true)
      } else{
          setFix(false)
      }
  }

  window.addEventListener('scroll',setFixedNavBar)
  return (
    <nav className={fix ? 'nav fixed' : 'nav'}> 
        <div className="logo">
          <img src={logo} alt="logo" />
            <Link href="/" className="logo-href">Face-Job</Link>
        </div>
        <ul className="navigation">
            <li>
              <NavLink className="navigation-link" to="/profile">
                Perfiles
              </NavLink>
            </li>
            <li>
              <NavLink className="navigation-link" to="/catalogue">
                Publicaciones
              </NavLink>
            </li>
            <li>
              <NavLink className="navigation-link" to="/">
                Consulta
              </NavLink>
            </li>
          </ul>
          <div className="login">
              <a href="/login" className="btn">
                Iniciar Sesion
              </a>
          </div>
    </nav>
  )
}

