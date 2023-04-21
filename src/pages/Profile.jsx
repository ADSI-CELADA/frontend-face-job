import React from 'react'
import { Banner } from '../components/Profile/Banner'
import { ContainerPost } from '../components/Profile/ContainerPost'
export const Profile = () => {
  return (
    <section className="section-profile">
      <Banner/>
      <ContainerPost/>
    </section>
  )
}
