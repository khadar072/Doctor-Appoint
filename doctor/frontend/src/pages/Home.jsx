import React from 'react'
import Header from '../component/Header'
import Speciality from '../component/Speciality'
import Topdoctors from '../component/Topdoctors'
import Middle from '../component/Middle'
import Work from '../component/Work'
import CreateAccount from '../component/CreateAccount'
import ContectUs from '../component/ContectUs'
import Comment from '../component/Comment'
import HowToBook from '@/component/HowToBook'
import Hero from '@/component/Hero'
const Home = () => {
  return (
    <div>
      <Hero/>
      {/* <Header/> */}
      <Speciality/>
  
      <Topdoctors/>
      {/* <Middle/> */}
      <ContectUs/>
      <HowToBook/>
      <CreateAccount/>
      {/* <Newlatter/> */}
      <Comment/>
    </div>
  )
}

export default Home
