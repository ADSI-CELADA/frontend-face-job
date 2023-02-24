import { Hero } from "../components/Header/Hero"
import { Navbar } from "../components/Header/Navbar"
import { HowYouDo } from "../components/Main/HowYouDo"
import { ContainMiniCard } from "../components/Cards/ContainMiniCard"
import { Separate } from "../components/Main/Separate"
import { Categorie } from "../components/Main/Categorie"
import { Section } from "../components/Main/Section"
import { Footer } from "../components/Footer"

export default function Index() {
  return (
  <>
    <Navbar/>
    <Hero/>
    <HowYouDo/>
    <ContainMiniCard/>
    <Separate/>
    <Categorie/>
    <Section/>
    <Footer/>
   </>
  )
}

