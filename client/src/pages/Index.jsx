import {Hero} from "../components/Hero"
import {Navbar} from "../components/Navbar"
import {HowYouDo} from "../components/HowYouDo"
import { ContainMiniCard } from "../components/ContainMiniCard"
import { Create } from "../components/Create"

export default function Index() {
  return (
  <>
    <Navbar/>
    <Hero/>
    <HowYouDo/>
    <ContainMiniCard/>
    <Create/>
   </>
  )
}

