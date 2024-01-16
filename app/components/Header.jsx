import React from 'react'
import {motion} from "framer-motion"

export default function Header() {

  const Courses = () =>{
   window.scrollBy(0,1000)

  }
  const Mentors = () =>{
    window.scrollBy(0,2000)
 
   }
   const About = () =>{
    window.scrollBy(0,3000)
 
   }
  
  return (
    <motion.div   className="Header">
      <div className="Logo"></div>

      < motion.div initial={{x:"20%", opacity: "0" }}  transition={{duration:0.4}}    animate={{
      x: "0",
      opacity: "1",
      


     }}  className="sections">
        <div onClick={() => Courses()} className="Kursebi">კურსები</div>
        <div onClick={() => Mentors()} className="mentors">მენტორები</div>
        <div onClick={() => About()} className="About">ჩვენს შესახებ</div>

      </motion.div>



    </motion.div>
  )
}
