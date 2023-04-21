import React from 'react'
import { Banner } from '../components/ProfileProfessions/BannerProfession'
import { ContainerPost } from '../components/ProfileProfessions/ContainerPostProfession'
export const ProfileP = () => {

  return (
    <section className="section-profile">
      <Banner/>
      <ContainerPost/>
    </section>
  )
}
