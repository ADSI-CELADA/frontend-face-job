import React, { useEffect, useState,useContext } from 'react'
import icon from '../../assets/img/bear.jpg'
import { useNavigate } from 'react-router-dom';
import { contextUser } from '../../Hooks/userContext';
export const UserCard = ({arrayProfessions}) => {
  const [professions,setProfessions]=useState([]);
let context=useContext(contextUser)
let navigate=useNavigate()
useEffect(()=>{
 async function loadCards() {
     await setProfessions(arrayProfessions.arrayProfessions)
     console.log(professions);
  }
  loadCards()
 
},[arrayProfessions.arrayProfessions])
async function goProfile(params) {
 await context.chageEmailProfessions(params)
  if (context.emailProfessions!="null") {
    navigate('/ProfileProfessions')
  }else{
    console.log("no cambio");
  }
}
  return (
<>
{professions.map((prof)=>(

    <section className="user-contain" key={prof.email}>
      <div className="user-card">
        <div className="user-info">
          <div className="user-icon">
            <img src={prof.iconUser} alt="icon"/>
          </div>
          <div>
            <h2>{prof.name}</h2>
            <p>{prof.profession}</p>
          </div>
        </div>
        <button onClick={()=>{goProfile(prof.email)}}>See more</button>
      </div>
    </section>
   
))}
 </>
  )
}
