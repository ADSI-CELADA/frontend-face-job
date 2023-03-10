import "../../assets/css/style.css"
import logo from "../../assets/img/Logo.png";
import { NavLink } from 'react-router-dom'
import { Link } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import {contextUser} from '../../Hooks/userContext'
export const Navbar = () =>  {
  let userContextInfo=useContext(contextUser)
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
            <Link to="/" className="logo-href">Face-Job</Link>
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
          
          { userContextInfo.loged ? <div className="login">
              <Link to="/profile" className="btn">
                {userContextInfo.infoUser.name}
              </Link>
          </div> : <div className="login">
              <Link to="/login" className="btn">
                Iniciar Sesion
              </Link>
          </div>}
         
    </nav>
  )
}

