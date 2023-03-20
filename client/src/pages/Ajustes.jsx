import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Update } from '../components/Forms/Update'
import { loadInfoUser } from "../api/api";

export const Ajustes = () =>{
    const [infoUser, setInfoUser] = useState([])

    useEffect(() =>{
        async function loadInfoUserAjustes() {
           const result = await loadInfoUser()
            setInfoUser(result.data[0])
        }
        loadInfoUserAjustes()
    },[])

    return (
    <section className='ajustes-section'>
        <nav className="nav1">
            <ul className="bnr">
            <div className="banner-icon">
                    <img src={infoUser.iconUser} alt="icon"/>
                        
                </div>
                    <li className="list__item">
                    <div className="list__button">
                        <img src="https://res.cloudinary.com/dwczm63h6/image/upload/v1676145336/user-rectangle-solid-24_cxkinm.png" className="list__img"/>
                        <a href="#" className="nav__link">{infoUser.name}</a>
                    </div>
                </li>

                <li className="list__item list__item--click">
                    <div className="list__button list__button--click">
                        <img src="https://res.cloudinary.com/dwczm63h6/image/upload/v1676145336/user-rectangle-solid-24_cxkinm.png" className="list__img"/>
                        <a href="#" className="nav__link"><Link to="/UpdateForm" className='nav__link'>Actualizar información</Link></a>
                    </div>

                </li>

                <li class="list__item">
                    <div class="list__button">
                        <img src="https://res.cloudinary.com/dwczm63h6/image/upload/v1676145449/message-square-x-solid-24_ckmic3.png" class="list__img"/>
                        <a href="#" class="nav__link">Eliminar perfil</a>
                    </div>
                </li>
            </ul>
        </nav>
        <div className='container-infoUser'>
            <div>
                <h3>Información del usuario</h3>
                <p>Email: {infoUser.email}</p>
                <p>Nombres: {infoUser.name}</p>
                <p>Apellidos: {infoUser.lastname}</p>
                <p>Numero: {infoUser.number}</p>
                <p>Fecha de nacimiento: {infoUser.age}</p>
                <p>Profesion: {infoUser.profession}</p>
            </div>
        </div>
    </section>
    )
}