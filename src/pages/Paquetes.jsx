import React from 'react'
import { Link } from 'react-router-dom';
import { useContext,useState,useEffect } from "react";
import { contextUser } from '../Hooks/userContext';
import { getInfoPack } from "../api/api";

export const Paquetes = () => {
    
    let userContextInfo=useContext(contextUser)
    const [buttonChange,setButtonChange] = useState(false)

    useEffect(() => {
        async function loadButton() {
          const resp = await getInfoPack()
          if (resp.data == "no view pack") {
            setButtonChange(true)
          }
        }
        loadButton()
    },[])


  return (
    <div className="contain-membresia"> 
    <Link to="/" className='volver'>Volver</Link>
        <section className="member">
            <h2>Membresia</h2>
            <p className='member-info'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus nobis distinctio sunt officiis rem id asperiores, aut illo doloremque assumenda! Quo, non ea sapiente iusto fuga dolorum quasi voluptas ipsa.</p>
            <div className="member_section">
                <div className="member_section-card">
                    <h3>Paquete 1</h3>
                    <div className="price">
                        <p>$10.000</p>
                        <p>per mounth</p>
                    </div>
                    <div className="list-benefits">
                        <ul>
                            <li> <span>✔</span> this is one</li>
                            <li><span>✔</span> this is two</li>
                            <li><span>✔</span> this is three</li>
                            <li><span>✔</span> this is four</li>
                        </ul>
                    </div> 
                    {buttonChange? <Link className="member-button">
                       No disponible <i className='bx bx-chevron-right'></i>
                    </Link> :
                    <Link className="member-button" to={userContextInfo.loged ? "/FormPay1" : "/login"}>
                       Comprar <i className='bx bx-chevron-right'></i>
                    </Link>} 
                </div>
                <div className="member_section-card">
                    <h3>Paquete 2</h3>
                    <div className="price">
                        <p>$18.000</p>
                        <p>per mounth</p>
                    </div>
                    <div className="list-benefits">
                        <ul>
                            <li><span>✔</span> this is one</li>
                            <li><span>✔</span> this is two</li>
                            <li><span>✔</span> this is three</li>
                            <li><span>✔</span> this is four</li>
                        </ul>
                    </div>
                    {buttonChange? <Link className="member-button">
                       No disponible <i className='bx bx-chevron-right'></i>
                    </Link> :
                    <Link className="member-button" to={userContextInfo.loged ? "/FormPay1" : "/login"}>
                       Comprar <i className='bx bx-chevron-right'></i>
                    </Link>}
                </div>
                <div className="member_section-card">
                    <h3>Paquete 3</h3>
                    <div className="price">
                        <p>$25.000</p>
                        <p>per mounth</p>
                    </div>
                    <div className="list-benefits">
                        <ul>
                            <li><span>✔</span> this is one</li>
                            <li><span>✔</span> this is two</li>
                            <li><span>✔</span> this is three</li>
                            <li><span>✔</span> this is four</li>
                        </ul>
                    </div>
                    {buttonChange? <Link className="member-button">
                       No disponible <i className='bx bx-chevron-right'></i>
                    </Link> :
                    <Link className="member-button" to={userContextInfo.loged ? "/FormPay1" : "/login"}>
                       Comprar <i className='bx bx-chevron-right'></i>
                    </Link>}
                </div>
            </div>
        </section>
    </div>
  )
}
