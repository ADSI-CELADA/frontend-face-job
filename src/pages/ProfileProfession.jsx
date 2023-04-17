import React from 'react'
import { Navbar } from '../components/Header/Navbar'
import { Banner } from '../components/ProfileProfessions/BannerProfession'
import { ContainerPost } from '../components/ProfileProfessions/ContainerPostProfession'
export const ProfileP = () => {

  return (
    <section className="section-profile">
      <Navbar/>
      <Banner/>
      <ContainerPost/>
    </section>
  )
}
