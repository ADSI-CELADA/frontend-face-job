import React from 'react'
import { PerfilLateral } from '../components/BarraLateral/PerfilLateral'
import { Navbar } from '../components/Header/Navbar'
import { Banner } from '../components/Profile/Banner'
import { ContainerPost } from '../components/Profile/ContainerPost'
export const Profile = () => {
  return (
    <section className="section-profile">
      <Navbar/>
      <Banner/>
      <PerfilLateral/>
      <ContainerPost/>
    </section>
  )
}
