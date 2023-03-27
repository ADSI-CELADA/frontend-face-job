import React from 'react'
import { Link } from 'react-router-dom';

export const Membresia = () => {
  return (
    <div className="contain-membresia">
        <section className="member">
            <h2>Membresia</h2>
            <div className="member_section">
                <div className="member_section-card">
                    <h3>Basic</h3>
                    <div className="price">
                        <p>$500</p>
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
                    <Link className="member-button" to="/">Choose</Link>
                </div>
                <div className="member_section-card">
                    <h3>Standar</h3>
                    <div className="price">
                        <p>$500</p>
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
                    <Link className="member-button" to="/">Choose</Link>
                </div>
                <div className="member_section-card">
                    <h3>Premium</h3>
                    <div className="price">
                        <p>$500</p>
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
                    <Link className="member-button" to="/">Choose</Link>
                </div>
            </div>
        </section>
    </div>
  )
}
