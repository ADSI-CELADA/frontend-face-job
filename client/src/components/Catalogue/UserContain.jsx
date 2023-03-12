import React from 'react'
import { UserCard } from './UserCard'
import { useState,useEffect } from 'react'
import { consultProfessions } from '../../api/api'
export const UserContain = () => {


  const [categories,setCategories]=useState("Profesor")
  const [professions,setProfessions]=useState([])

useEffect(()=>{
  async function loadProfessions() {
   
    const result= await consultProfessions(categories)
    setProfessions(result.data);
  console.log(result);
  }
  loadProfessions()
},[categories])
  const chageCategorie=(event)=> {
   let profession= event.target.textContent
   if (profession!=categories) {
    setCategories(profession)
   }
   
  }

  return (

    <div>
      <section className="categories">
        <button onClick={chageCategorie} >Profesor</button>
        <button onClick={chageCategorie}>Programador</button>
        <button onClick={chageCategorie}>Diseñador</button>
        <button onClick={chageCategorie}>Administrador</button>
        <button onClick={chageCategorie}>Constructor</button>
        <button onClick={chageCategorie}>Otros</button>
    </section>
      <p className='title-Profession-Catalogue'>{categories}</p>
    <section className="mega-user-contain">
        <UserCard arrayProfessions={{arrayProfessions:professions}}/>
    </section>
    </div>
  )
}
