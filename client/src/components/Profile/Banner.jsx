import React from 'react'
import icon from '../../assets/img/bear.jpg'
import { useContext } from "react";
import {contextUser} from '../../assets/context/usercContext'
import { Link } from 'react-router-dom';
export const Banner = () => {

let userContextInfo=useContext(contextUser)

  return (
    
    <section className="bnr">
        
        <div className="banner">
            <section>
                <div className="banner-icon">
                    <img src={userContextInfo.infoUser.iconUser} alt="icon"/>
                    <div className="banner-icon-cape">
                        <Link to="/">📷</Link>
                    </div>
                </div>
                    <div className="banner-info">
                        <h2>{userContextInfo.infoUser.name}</h2>
                        <p>{userContextInfo.infoUser.profession}</p>
                        <div className="banner-stats">
                            <ul>
                                <li>0 Seguidores</li>
                                <li>0 Seguidos</li>
                                <li>0 Publicaciones</li>
                                <li>0 Me Gustas</li>
                            </ul>
                        </div>
                    </div>                
            </section>
            <div className="banner-nav">
                <nav>
                    <ul>
                        <li><Link to="">Publicaciones</Link></li>
                        <li><Link to="">Postales</Link></li>
                        <li><Link to="">Publicar</Link></li>
                        <li><Link to="">Ajustes</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    </section>
  )
}
