import React from 'react'
import icon from '../../assets/img/bear.jpg'

export const UserCard = () => {
  return (
    <section className="user-contain">
      <div className="user-card">
        <div className="user-info">
          <div className="user-icon">
            <img src={icon} alt="icon"/>
          </div>
          <div>
            <h2>user name</h2>
            <p>user profesion</p>
            <p>Description</p>
          </div>
        </div>
        <button>See more</button>
      </div>
    </section>
  )
}
