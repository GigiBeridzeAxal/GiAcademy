'use client'

import Image from 'next/image'
import Header from './components/Header'
import Welcome from './components/Welcome'
import Courses from './components/Courses'
import Mentors from './components/Mentors'
import About from './components/About'

export default function Home() {
  return (
    <>
       <Header></Header>
       <Welcome></Welcome>
       <Courses></Courses>
       <Mentors></Mentors>
       <About></About>
    </>
 
    
  )
}
