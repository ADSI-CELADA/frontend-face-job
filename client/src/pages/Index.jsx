import { Hero } from "../components/Hero"
import { Navbar } from "../components/Navbar"
import { HowYouDo } from "../components/HowYouDo"
import { ContainMiniCard } from "../components/Cards/ContainMiniCard"
import { Separate } from "../components/Separate"
import { Categorie } from "../components/Categorie"
import { Section } from "../components/Section"
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

