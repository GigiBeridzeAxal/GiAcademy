import React from 'react'
import {motion} from "framer-motion"

export default function Courses() {
  return (
    <>
   <motion.div initial={{x:"20%", opacity: "0" }}  transition={{duration:0.4}}    whileInView={{
      x: "0",
      opacity: "1",
      


     }}   className="courses">
<div class=" reactcours max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a className='reacta'  href="#">
        <img class="rounded-t-lg react"   alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">React</h5>
        </a>
        <p class=" reactfont mb-3 font-small text-gray-700 dark:text-gray-400">ეს პროგრამული ენაა Frontend Framework-ის ყველაზე ძლიერი იარაღი რაშიც გაერთიანებულია HTML,CSS,Javascript, და კიდევ ბევრი ენა </p>
        <div className='lineforprice' >
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            დარეგისტრირდი
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
        <div className='price' >5$</div>
        </div>
       
    </div>
</div>


<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a className='reacta' href="#">
        <img class=" laravel rounded-t-lg"  alt="" />
    </a>
    <div class="p-5">
        <a  href="#">
            <h5 class="  mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Php/Laravel</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Php/Laravel-არის Back-End-Development-ის ერთ ერთი იარაღი Laravel-ით კი უმარტივესად შექმნით რთულ Api-ის და მონაცემების ფილტრაციას </p>
        <div className='lineforprice' >
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            დარეგისტრირდი
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
        <div className='price' >5$</div>
        </div>
       
    </div>
</div>


   </motion.div>



    </>
  )
}
