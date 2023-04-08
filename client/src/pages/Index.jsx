import { Hero } from "../components/Header/Hero"
import { Navbar } from "../components/Header/Navbar"
import { HowYouDo } from "../components/Main/HowYouDo"
import { ContainMiniCard } from "../components/Cards/ContainMiniCard"
import { Separate } from "../components/Main/Separate"
import { Categorie } from "../components/Main/Categorie"
import { Section } from "../components/Main/Section"
import { Footer } from "../components/Footer"
import { useState,useEffect } from "react";
import { getInfoPack } from "../api/api";

export default function Index() {
  const [ pack, setPack] = useState(true)

  useEffect(() => {
    async function loadUser() {
      const resp = await getInfoPack()
      if (resp.data == "view pack") {
        setPack(true)
      }else{
        setPack(false)
      }
      
    }
    loadUser()
  },[])
  return (
  <>
    <Navbar/>
    <Hero/>
    <HowYouDo/>
    <ContainMiniCard/>
    <Separate/>
    <Categorie/>
    { pack ?
    <Section/> :
    <></>
    } 
    <Footer/>
   </>
  )
}

