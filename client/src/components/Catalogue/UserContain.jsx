import React from 'react'
import { UserCard } from './UserCard'
import { useState,useEffect,useContext } from 'react'
import { consultProfessions,consultViews } from '../../api/api'
import { contextUser } from '../../Hooks/userContext';

export const UserContain = () => {

  let context=useContext(contextUser)
  const [categories,setCategories]=useState("Profesor")
  const [professions,setProfessions]=useState([])
  const [loged,setLoged]=useState(false)

useEffect(()=>{
  async function loadProfessions() {
    if (categories == "Vistos") {
      const views = await consultViews()
      setProfessions(views.data);
    }else{
    const result= await consultProfessions(categories)
    setProfessions(result.data);
    }
  }
  loadProfessions()
},[categories])

useEffect(()=>{
  async function loadLoged() {
    if (context.loged) {
      setLoged(true)
      const views = await consultViews()
      if (views.data == "no views") {
        setLoged(false)
      }
    }
  }
  loadLoged()
},[])
  const chageCategorie=(event)=> {
   let profession= event.target.textContent
   if (profession!=categories) {
    setCategories(profession)
   }
   
  }

  return (

    <div>
      <section className="categories">
        <button onClick={chageCategorie}>Profesor</button>
        <button onClick={chageCategorie}>Programador</button>
        <button onClick={chageCategorie}>Diseñador</button>
        <button onClick={chageCategorie}>Administrador</button>
        <button onClick={chageCategorie}>Constructor</button>
        <button onClick={chageCategorie}>Otros</button>
        {loged ? <button onClick={chageCategorie}>Vistos</button> : <></>}
    </section>
      <p className='title-Profession-Catalogue'>{categories}</p>
    <section className="mega-user-contain">
        <UserCard arrayProfessions={{arrayProfessions:professions}}/>
    </section>
    </div>
  )
}
