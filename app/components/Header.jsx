import React from 'react'
import {motion} from "framer-motion"

export default function Header() {
  return (
    <motion.div   className="Header">
      <div className="Logo"></div>

      < motion.div initial={{x:"20%", opacity: "0" }}  transition={{duration:0.4}}    animate={{
      x: "0",
      opacity: "1",
      


     }}  className="sections">
        <div className="Kursebi">კურსები</div>
        <div className="mentors">მენტორები</div>
        <div className="About">ჩვენს შესახებ</div>

      </motion.div>



    </motion.div>
  )
}
