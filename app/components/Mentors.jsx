import React from 'react'
import {motion} from 'framer-motion'

export default function Mentors() {
  return (
   <>
   <div className="mentorcenter">
   <div className="mentor">
       
       <div className="profileup">
           
            <img  className='profile' alt="" />
        
        <div className="nameandmore">
           <motion.div initial={{x:"50%" , opacity:0 }} transition={{duration:0.5}}  whileInView={{
                 x:0,
                 opacity:1

                }} className="name">Gigi Beridze</motion.div><br />
       <motion.div initial={{x:"50%" , opacity:0 }} transition={{duration:1}}  whileInView={{
                 x:0,
                 opacity:1

                }} className="namemail">@Gigi_Beridze</motion.div>
        </div>
 
     
       </div>
       <div className="contacts">
         <div className="phone"><motion.button initial={{x:"50%" , opacity:0, y:"-200px" }} transition={{duration:0.7}}  whileInView={{
                 x:0,
                 opacity:1,
                 y:0

                }} class="bg-gray-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-gray-700 hover:border-blue-500 rounded">
         📞Phone
 </motion.button></div>
         <div  className="email"> <motion.button initial={{x:"50%" , opacity:0, y:"-200px" }} transition={{duration:1}}  whileInView={{
                 x:0,
                 opacity:1,
                 y:0
              

                }} class="bg-gray-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-gray-700 hover:border-blue-500 rounded">
         ✉️Email
 </motion.button> </div>
       </div>
     
 
 
 
 
 
     </div>
 
    <hr />
     <div className="skills">
         <motion.div initial={{x:"50%" , opacity:0, y:"200px" }} transition={{duration:0.5}}  whileInView={{
                 x:0,
                 opacity:1,
                 y:0

                }} className="skill1">
          <div className="skill">React/Next.js Front-End</div>
          <div className="time">🟢Fulltime</div>
 
         </motion.div>
         <motion.div initial={{x:"50%" , opacity:0, y:"200px" }} transition={{duration:0.7}}  whileInView={{
                 x:0,
                 opacity:1,
                 y:0

                }} className="skill2">
         <div className="skill">Node.js Back-End Development</div>
          <div className="time">🟢Fulltime</div>
         </motion.div>
         < motion.div initial={{x:"50%" , opacity:0, y:"200px" }} transition={{duration:1}}  whileInView={{
                 x:0,
                 opacity:1,
                 y:0

                }} className="skill3">
         <div className="skill">Lua Script Game Development</div>
          <div className="time">🔴Lover</div>
         </motion.div>
       </div>
       <br />
     </div>
         <div className="mentorcenter">
         <div className="mentor">
             
             <div className="profileup">
                 
                  <img  className='profile2' alt="" />
              
              <div className="nameandmore">
                 <div className="name">Goga Chxaidze</div><br />
             <div className="namemail">@Goga_Chxaidze</div>
              </div>
       
           
             </div>
             <div className="contacts">
               <div className="phone"><button class="bg-gray-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-gray-700 hover:border-blue-500 rounded">
               📞Phone
       </button></div>
               <div className="email"> <button class="bg-gray-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-gray-700 hover:border-blue-500 rounded">
               ✉️Email
       </button> </div>
             </div>
           
       
       
       
       
       
           </div>
       
          <hr />
           <div className="skills">
               <div className="skill1">
                <motion.div initial={{x:"50%" , opacity:0 }} transition={{duration:0.2}}  whileInView={{
                 x:0,
                 opacity:1

                }} className="skill">Php/Laravel Back-End Developer</motion.div>
                <motion.div initial={{x:"50%" , opacity:0 }} transition={{duration:0.5}}  whileInView={{
                 x:0,
                 opacity:1

                }} className="time">🟢Fulltime</motion.div>
       
               </div>
               <div className="skill2">
               <div className="skill">Html,Css,Javascript Front-End Developer </div>
                <div className="time">🟠Halftime</div>
               </div>
               <div className="skill3">
               <div className="skill">C++ Developer</div>
                <div className="time">🔴Beeginer</div>
               </div>
             </div>
             
           </div>
   
   </>
   
      
 
  
  )
}
