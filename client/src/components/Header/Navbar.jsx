import "../../assets/css/style.css"
import logo from "../../assets/img/Logo.png";
import { Link } from 'react-router-dom'
import { useContext } from "react";
import {contextUser} from '../../assets/context/usercContext'


export const Navbar = () =>  {
  let userContextInfo=useContext(contextUser)
 



  return (
    <nav  data-aos="fade-down" data-aos-duration="1000" className="nav">
    
        <div className="logo">
            <Link to="/">
                <img src={logo} alt="logo" />
            </Link>
        </div>
        <ul className="navigation">
            <li>
              <Link className="navigation-link" to="#">
                Catalogue
              </Link>
            </li>
            <li>
              <Link className="navigation-link" to="#">
                Publicaciones
              </Link>
            </li>
            <li>
              <Link className="navigation-link" to="#">
                Consulta
              </Link>
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

