import React, { useState } from 'react'


export default function About() {
    const [about, setabout ] = useState('ჩვენი კომპანია უკვე 2-დღეა რაც ბაზარზე გამოჩნდა და ძალიან ბევრი მოსწავლე მივიღეთ და გავუწიეთ მენტორობა ჩვენ ვცდილობთ როცა მომხმარებელი ფულს იხდის ის გადახდილი თანხა ფუჭად არ იყოს გადაყრილი')
    const [programs, setprograms ] = useState('ჩვენს პროგრამებში შეისწავლით ძალიან მაგარ და ერთ ერთ ყველაზე მოთხოვნად პროგრამირების კურსებს მაგალითად Front-End-ში შენ ისწავლი React-ს ანუ განვითარებულ Javascripts რაც ნიშნავს Html,Css,Javascript ის გაერთიანებას')
    const [comings, setcomings ] = useState('ჩვენ სამომავლოდ გვაქვს დიდი გეგმები ვამატებთ ახლა კურსებს ახალ მენტორებს და ყველაზე მოთხოვნად პროფესიებს როგორიცაა Fullstack-დეველოპერი Ui/Ux Design და ბევრი სხვა ენები')
    const [WhatCaner , SetWhatcan] = useState('როცა თქვენ ჩვენს მენტორობის ქვეშ ყველა კურსს წარმატებით ჩააბარებთ უკვე პროფესიულად საკმარისი ცოდნა გექნებათ და შეგეძლებათ იმუშავოთ თუნდაც ფრილანსერზე ან სხვა junior პოზიციაზე')

    const [text , settext] = useState(about)

  let [result, setresult] = useState('About')

   const WhatCan = () =>{
    setresult("WhatCan")
    settext(WhatCaner)



   }
   const About = () =>{
    setresult("About")
    settext(about)



   }
   const News = () =>{
    setresult("News")
    settext(comings)




   }
   const Programs = () =>{
    setresult("Programs")
    settext(programs)



   }




  return (
    <div className="about">
    

<div class=" aboutsize md:flex">
    <ul class="flex-column space-y space-y-4 text-sm font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0">
        <li>
        {
            result == "About"
            ? <a  class="pointer text-white inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 bg-blue-700 hover:bg-blue-500 w-full dark:bg-gray-800 dark:hover:bg-gray-700 hover:text-white">
               
            About Us
        </a>
        : <a  onClick={() => About()} class=" pointer inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 bg-gray-50 hover:bg-black-900 w-full dark:bg--100 dark:hover:bg-gray-700 dark:hover:text-red">
               
              About Us
    </a>

          }
        </li>
        <li>
        {
            result == "Programs"
            ? <a  class="pointer text-white inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 bg-blue-700 hover:bg-blue-500 w-full dark:bg-gray-800 dark:hover:bg-gray-700 hover:text-white">
               
            Programs
        </a>
        : <a  onClick={() => Programs()} class="pointer inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 bg-gray-50 hover:bg-black-900 w-full dark:bg--100 dark:hover:bg-gray-700 dark:hover:text-red">
               
               Programs
    </a>

          }
        </li>
        <li>
        {
            result == "News"
            ? <a  class="pointer text-white inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 bg-blue-700 hover:bg-blue-500 w-full dark:bg-gray-800 dark:hover:bg-gray-700 hover:text-white">
               
            News
        </a>
        : <a  onClick={() => News()} class="pointer inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 bg-gray-50 hover:bg-black-900 w-full dark:bg--100 dark:hover:bg-gray-700 dark:hover:text-red">
               
               News
    </a>

          }
        </li>
        <li>
          {
            result == "WhatCan"
            ? <a  class=" pointer text-white inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 bg-blue-700 hover:bg-blue-500 w-full dark:bg-gray-800 dark:hover:bg-gray-700 hover:text-white">
               
            What Get
        </a>
        : <a  onClick={() => WhatCan()} class="pointer inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 bg-gray-50 hover:bg-black-900 w-full dark:bg--100 dark:hover:bg-gray-700 dark:hover:text-red">
               
               What Get
    </a>

          }
        </li>
    
    </ul>
    <div class="p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full">
        <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">Profile Tab</h3>
        <p class="texter mb-2">{text}</p>
       
    </div>
</div>




    </div>
  )
}
