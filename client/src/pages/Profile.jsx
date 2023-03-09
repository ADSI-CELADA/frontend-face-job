import React from 'react'
import { Navbar } from '../components/Header/Navbar'
import { Banner } from '../components/Profile/Banner'
import { ContainerPost } from '../components/Profile/ContainerPost'
export const Profile = () => {
  return (
    <section className="section-profile">
      <Navbar/>
      <Banner/>
      <ContainerPost/>
    </section>
  )
}
