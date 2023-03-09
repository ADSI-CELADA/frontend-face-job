import React, { useState } from 'react'
import icon from '../../assets/img/bear.jpg'
import { Link } from 'react-router-dom'
import follow from '../../assets/img/follow.png'
import like from '../../assets/img/like.png'
import send from '../../assets/img/send.png'
import post from '../../assets/img/post.png'

export const Banner = () => {

    const [ fix, setFix ] = useState(false)

    function setFixedBanner(){
        if (window.scrollY >=20){
            setFix(true)
        } else{
            setFix(false)
        }
    }

    window.addEventListener('scroll',setFixedBanner)

  return (
    <section className={fix ? 'bnr fixed' : 'bnr'}>
        <div className="banner">
            <section>
                <div className="banner-icon">
                    <img src={icon} alt="icon"/>
                        <Link className='banner-icon-cape' to="/">Cambiar icono</Link>
                </div>
                    <div className="banner-info">
                        <h2>User Name</h2>
                        <p>User Profesion</p>
                        <div className="banner-stats">
                            <ul>
                                <li><img src={follow}/></li>
                                <li><img src={like}/></li>
                                <li><img src={send}/></li>
                                <li><img src={post}/></li>
                            </ul>
                        </div>
                    </div>  
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
            </section>
        </div>
    </section>
  )
}
