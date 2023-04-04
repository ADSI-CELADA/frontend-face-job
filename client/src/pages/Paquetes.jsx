import React from 'react'
import { Link } from 'react-router-dom';


export const Paquetes = () => {
  return (
    <div className="contain-membresia">
        <section className="member">
            <h2>Membresia</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus nobis distinctio sunt officiis rem id asperiores, aut illo doloremque assumenda! Quo, non ea sapiente iusto fuga dolorum quasi voluptas ipsa.</p>
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
                    <Link className="member-button" to="/FormPay1">
                        Comprar <i className='bx bx-chevron-right'></i>
                    </Link>
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
                    <Link className="member-button" to="/FormPay2">
                        Comprar <i className='bx bx-chevron-right'></i>
                    </Link>
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
                    <Link className="member-button" to="/FormPay3">
                        Comprar <i className='bx bx-chevron-right'></i>
                    </Link>
                </div>
            </div>
        </section>
    </div>
  )
}
