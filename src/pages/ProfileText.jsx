import React from 'react'
import { Banner } from '../components/Profile/Banner'
import { ContainerPostText } from '../components/Profile/ContainerPostText'
export const ProfileText = () => {
  return (
    <section className="section-profile">
      <Banner/>
      <ContainerPostText/>
    </section>
  )
}