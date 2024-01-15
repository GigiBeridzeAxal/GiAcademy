import React, { useState } from 'react'
import {motion} from 'framer-motion'

export default function Mentors() {
    const [mentors, setmentors] = useState('Backend')
    const [selected, setselected] = useState('Backend')


    const All = () =>{
        setmentors("All")
        setselected('All')
    }
    const FrontEnd = () =>{
        setmentors("Frontend")
        setselected('Frontend')
    }
    const BackEnd = () =>{
        setmentors("Backend")
        setselected('Backend')
    }
 

  return (
   <>




   <div className='Men' >Mentors</div>
   <ul class=" p-10 flex">
  <li class="flex-1 mr-2">

  {
        selected == "All" ?  <a onClick={() => All()} class="cursor-pointer text-center block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white" >All</a> 
        :  <a onClick={() => All()} class="cursor-pointer text-center block border border-gray-200 rounded py-2 px-4  hover:bg-white  text-blue-500" >All</a> 
 }
   
  </li>
  <li class="flex-1 mr-2">
  {
        selected == "Frontend" ?   <a onClick={() => FrontEnd()} class="cursor-pointer text-center block bg-blue-500 border border-white rounded hover:border-gray-200 text-white hover:text-blue-500  hover:bg-gray-200 py-2 px-4" >Front-End Developer</a>
        :  <a onClick={() => FrontEnd()} class="cursor-pointer text-center block border border-gray-200 rounded py-2 px-4  hover:bg-white  text-blue-500" >Front-End Developer</a> 
 }
   
  </li>
  <li class="  text-center flex-1">
  {
        selected == "Backend" ?   <a onClick={() => BackEnd()} class="cursor-pointer backend block py-2 px-4 rounded  bg-blue-500 text-white-400 cursor-pointer hover:border-gray-200 hover:text-gray-500 hover:bg-white ">Back-End Developer</a>
        :   <a onClick={() => BackEnd()} class="cursor-pointer backend block py-2 px-4 rounded  text-gray-400 cursor-pointer hover:border-gray-200 hover:text-gray-500 hover:bg-white ">Back-End Developer</a>
 }
   
  </li>
</ul>

{
   mentors == "Backend" ? <div className='mentorcenter' >
<div className="mentorship">
        <h1 className='text-white-200 p-10 ' >Back-End Developers</h1>
        <div className=" mentor">
             
             <div className="profileup">
                 
                  <img  className='profile2' alt="" />
              
              <div className="nameandmore">
                 <motion.div  className="name">Goga Chxaidze</motion.div><br />
             <div className="namemail">@Goga_Chxaidze</div>
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
               <div className="email"> <motion.button initial={{x:"50%" , opacity:0, y:"-200px" }} transition={{duration:0.7}}  whileInView={{
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
         <motion.div initial={{x:"50%" , opacity:0, y:"200px" }} transition={{duration:0.7}}  whileInView={{
                 x:0,
                 opacity:1,
                 y:0

                }} className="skill1">
          <div className="skill">Php/Laravel Back-End Developer</div>
          <div className="time">🟢Fulltime</div>
 
         </motion.div>
         <motion.div initial={{x:"50%" , opacity:0, y:"200px" }} transition={{duration:1}}  whileInView={{
                 x:0,
                 opacity:1,
                 y:0

                }} className="skill2">
         <div className="skill">Html,Css,Javascript Front-End Developer</div>
          <div className="time">🟢Fulltime</div>
         </motion.div>
         < motion.div initial={{x:"50%" , opacity:0, y:"200px" }} transition={{duration:1.5}}  whileInView={{
                 x:0,
                 opacity:1,
                 y:0

                }} className="skill3">
         <div className="skill">C++ Developer</div>
          <div className="time">🔴Beeginer</div>
         </motion.div>
       </div>


        </div>


   </div> : <div></div>

}


   

{
        mentors == "Frontend" ? <div className='mentorcenter' >
                    <div className="mentorship">
        <h1 className='text-white-200 p-10 ' >Front-End Developers</h1>

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
        </div></div>
          : <div></div>
}




  {
        mentors == "All" ? <div className='mentorcenter' > 
           <div className="mentorship">
        <h1 className='text-white-200 p-10 ' >All Web Developers</h1>

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

    
         <div className=" mentor">
             
             <div className="profileup">
                 
                  <img  className='profile2' alt="" />
              
              <div className="nameandmore">
                 <motion.div  className="name">Goga Chxaidze</motion.div><br />
             <div className="namemail">@Goga_Chxaidze</div>
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
               <div className="email"> <motion.button initial={{x:"50%" , opacity:0, y:"-200px" }} transition={{duration:0.7}}  whileInView={{
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
         <motion.div initial={{x:"50%" , opacity:0, y:"200px" }} transition={{duration:0.7}}  whileInView={{
                 x:0,
                 opacity:1,
                 y:0

                }} className="skill1">
          <div className="skill">Php/Laravel Back-End Developer</div>
          <div className="time">🟢Fulltime</div>
 
         </motion.div>
         <motion.div initial={{x:"50%" , opacity:0, y:"200px" }} transition={{duration:1}}  whileInView={{
                 x:0,
                 opacity:1,
                 y:0

                }} className="skill2">
         <div className="skill">Html,Css,Javascript Front-End Developer</div>
          <div className="time">🟢Fulltime</div>
         </motion.div>
         < motion.div initial={{x:"50%" , opacity:0, y:"200px" }} transition={{duration:1.5}}  whileInView={{
                 x:0,
                 opacity:1,
                 y:0

                }} className="skill3">
         <div className="skill">C++ Developer</div>
          <div className="time">🔴Beeginer</div>
         </motion.div>
       </div>
            
             
           </div>  </div> : <div></div> 
  }

  
        



   
         
   
   </>
   
      
 
  
  )
}
