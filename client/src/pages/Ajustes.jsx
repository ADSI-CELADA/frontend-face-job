import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { loadInfoUser } from "../api/api";
import { Navbar } from "../components/Header/Navbar";

export const Ajustes = () => {
  const [infoUser, setInfoUser] = useState([]);
  const [infoAge, setInfoAge] = useState([]);

  useEffect(() => {
    async function loadInfoUserSettings() {
      const result = await loadInfoUser();
      setInfoUser(result.data[0]);
    }
    loadInfoUserSettings();
  }, []);

    useEffect(() => {
      async function loadInfoUserSettings() {
        const result = await loadInfoUser();
        let age=""
        for (let i = 0; i < 10; i++) {
        age = age+result.data[0].age[i]; 
        }
        setInfoAge(age);
      }
      loadInfoUserSettings();
    }, []);
  return (
    <>
      <Navbar />
      <section className="ajustes-section">
        <div className="bnr">
            <div className="banner">
                <div className="banner-icon">
                    <img src={infoUser.iconUser} alt="icon" />
                    <div className='banner-icon-cape' >Cambiar icono</div>
                </div>
          <div className="banner-nav">
            <nav>
              <ul>
                <li>
                  <a href="#" className="nav__link">
                    <Link to="/Profile">
                        {infoUser.name}
                    </Link>
                  </a>
                </li>
                <li>
                  <a href="#" className="nav__link">
                    <Link to="/UpdateForm" className="nav__link">
                      Actualizar información
                    </Link>
                  </a>
                </li>
                <li>
                  <a href="#" class="nav__link">
                    <Link to="/DeleteForm" className="nav__link">
                      Eliminar perfil
                    </Link>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
            </div>
        </div>
        <div className="container-infoUser">
          <div>
            <h3>Información del usuario</h3>
            <p>Email: {infoUser.email}</p>
            <p>Nombres: {infoUser.name}</p>
            <p>Apellidos: {infoUser.lastname}</p>
            <p>Numero: {infoUser.number}</p>
            <p>Fecha de nacimiento: {infoAge}</p>
            <p>Profesion: {infoUser.profession}</p>
          </div>
        </div>
      </section>
    </>
  );
};
