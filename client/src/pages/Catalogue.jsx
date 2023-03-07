import React from 'react'
import { Categories } from '../components/Catalogue/Categories'
import { PostCard } from '../components/Catalogue/PostCard'
import { Navbar } from '../components/Header/Navbar'

export const Catalogue = () => {
  return (
    <>
    <Navbar/>
    <Categories/>
    <PostCard/>
    <PostCard/>
    <PostCard/>
    </>
  )
}
