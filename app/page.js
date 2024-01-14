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
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Georgian:wght@700&display=swap" rel="stylesheet"/>

       <Header></Header>
       <Welcome></Welcome>
       <Courses></Courses>
       <Mentors></Mentors>
       <About></About>
    </>
 
    
  )
}
