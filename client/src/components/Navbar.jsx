import "../assets/css/style.css"
import logo from "../assets/img/Logo.png";

export default function Navbar() {
  return (
    <nav  data-aos="fade-down" data-aos-duration="1000" className="nav">
        <div className="logo">
            <a href="/">
                <img src={logo} alt="logo" />
            </a>
        </div>
        <ul className="navigation">
            <li>
              <a className="navigation-link" href="#">
                Catalogue
              </a>
            </li>
            <li>
              <a className="navigation-link" href="#">
                Publicaciones
              </a>
            </li>
            <li>
              <a className="navigation-link" href="#">
                Consulta
              </a>
            </li>
          </ul>
          <div className="log-in">
              <a href="/inicioSesionC" className="btn">
                Iniciar Sesion
              </a>
            </div>
    </nav>
  )
}

