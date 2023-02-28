import React from 'react'
import icon from '../../assets/img/bear.jpg'

export const Banner = () => {
  return (
    <section className="bnr">
        <div className="banner">
            <section>
                <div className="banner-icon">
                    <img src={icon} alt="icon"/>
                    <div className="banner-icon-cape">
                        <a href="/">📷</a>
                    </div>
                </div>
                    <div className="banner-info">
                        <h2>User Name</h2>
                        <p>User Profesion</p>
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
                        <li><a href="">Publicaciones</a></li>
                        <li><a href="">Postales</a></li>
                        <li><a href="">Publicar</a></li>
                        <li><a href="">Ajustes</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </section>
  )
}
