import React, { useState } from 'react'

export default function About() {
    const [about, setabout ] = useState('About')
    const [programs, setprograms ] = useState('Programs')
    const [comings, setcomings ] = useState('Comings')

  let [result, setresult] = useState('About')


  return (
    <div className="about">
    

<div class="md:flex">
    <ul class="flex-column space-y space-y-4 text-sm font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0">
        <li>
            <a  class="inline-flex items-center px-4 py-3 text-white bg-blue-700 rounded-lg active w-full dark:bg-blue-600" aria-current="page">
               
                About Us
            </a>
        </li>
        <li>
            <a  class="inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 bg-gray-50 hover:bg-gray-100 w-full dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white">
               
                პროგრამები
            </a>
        </li>
        <li>
            <a  class="inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 bg-gray-50 hover:bg-gray-100 w-full dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white">
               
                სიახლეები
            </a>
        </li>
        <li>
          {
            result == "About"
            ? <a  class="inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 bg-blue-700 hover:bg-gray-100 w-full dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white">
               
            სიახლეები
        </a>
        : <a  class="inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 bg-gray-50 hover:bg-gray-100 w-full dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white">
               
        სიახლეები
    </a>

          }
        </li>
     
    </ul>
    <div class="p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full">
        <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">Profile Tab</h3>
        <p class="mb-2">This is some placeholder content the Profile tab's associated content, clicking another tab will toggle the visibility of this one for the next.</p>
        <p>The tab JavaScript swaps classes to control the content visibility and styling.</p> 
    </div>
</div>




    </div>
  )
}
