import React, { useEffect } from 'react'

export default function Mobile() {

  const Scroll = () => {
    window.scrollBy(0,350)
  
  }
  const ScrolltoMentor = () => {
    window.scrollBy(0,1800)
  }
  const ScrolltoAbout = () => {
    window.scrollBy(0,2500)
  }

  return (
    <>
    
    <div className='Mobile' >
        
       
        <div className="header">
        <nav class="flex items-center justify-between flex-wrap bg-plate-700 p-6">
  <div class="flex items-center flex-shrink-0 text-white mr-6">
     <div className='mobacaimg'  ></div>
    <span class="font-semibold text-xr text-gray-500 tracking-tight">#დაიწყე სწავლა</span>
  </div>
  <div class="block lg:hidden">
   
    
 
  </div>
  <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div class="text-sm lg:flex-grow">
      <a onClick={() => Scroll()} href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        Courses
      </a>
      <a onClick={() => ScrolltoMentor()} href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        Mentors
      </a>
      <a onClick={() => ScrolltoAbout()} href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
        About Us
      </a>
    </div>
    <div>
      <a href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">დარეგისტრირდი</a>
    </div>
  </div>
</nav>
<div className='px-10 py-10 text-xl' >Courses</div>
<div className="Reactor">
        <div class="bg-gray-800 py-24 sm:py-32">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-2xl lg:mx-0">
      <h2 class=" flex reactname  text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl">React <div className=' rea' ></div> </h2> 
      <p class="mt-2 text-lg leading-8 text-gray-600">Learn Most Valuable Web Language Right Now</p>
    </div>
    <div class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      <article class="flex max-w-xl flex-col items-start justify-between">
        <div class="flex items-center gap-x-4 text-xs">
          <time datetime="2020-03-16" class="text-gray-500">July 16 , 2024</time>
          <a href="#" class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Front-End Development</a>
        </div>
        <div class="group relative">
          <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            <a className='text-slate-200'  href="#">
              <span class="absolute text inset-0"></span>
              Make Big Projects With Your Mentors
            </a>
          </h3>
          <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-400">Learn Most In Demand Language For Front-End Development When You Will Finish Course You Can Build Front-End Applications And Apis</p>
        </div>
        <div class="relative mt-8 flex items-center gap-x-4">
          <div alt="" class=" gigi h-10 w-10 rounded-full ">
          </div>
          <div class="text-sm leading-6">
            <p class="font-semibold text-gray-900">
              <a className='text-slate-500'  href="#">
                <span class="absolute inset-0"></span>
                Gigi Beridze
              </a>
            </p>
            <p class="text-gray-600">Co-Founder / Gi-Academy</p>
          </div>
        </div>
      </article>


    </div>
  </div>
</div>
        </div>
        <br />

        <div className="Reactor">
        <div class="bg-gray-800 py-24 sm:py-32">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-2xl lg:mx-0">
      <h2 class=" flex reactname  text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl">Laravel <div className=' lar' ></div> </h2> 
      <p class="mt-2 text-lg leading-8 text-gray-600">Learn Best Php Framework</p>
    </div>
    <div class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      <article class="flex max-w-xl flex-col items-start justify-between">
        <div class="flex items-center gap-x-4 text-xs">
          <time datetime="2020-03-16" class="text-gray-500">July 16 , 2024</time>
          <a href="#" class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Back-End Development</a>
        </div>
        <div class="group relative">
          <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            <a className='text-slate-200'  href="#">
              <span class="absolute text inset-0"></span>
              Make Big Back-End Appliactions With Database
            </a>
          </h3>
          <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-400">Laravel/Php Are Strongest Back-End Development Technologys You Can Make Ecomercee Websites Authetication And more After You Study Laravel You Can Make Projcets So Easy</p>
        </div>
        <div class="relative mt-8 flex items-center gap-x-4">
          <div alt="" class=" goga h-10 w-10 rounded-full ">
          </div>
          <div class="text-sm leading-6">
            <p class="font-semibold text-gray-900">
              <a className='text-slate-500'  href="#">
                <span class="absolute inset-0"></span>
                Goga Chxaidze
              </a>
            </p>
            <p class="text-gray-600">Co-Founder / Gi-Academy</p>
          </div>
        </div>
      </article>


    </div>
  </div>
</div>

    <div className='text-xl px-10 py-10' >Mentors</div>


    <div class="bg-white py-24 sm:py-32">
  <div class="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
    <div class="max-w-2xl">
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our Mentors</h2>
      <p class="mt-6 text-lg leading-8 text-gray-600">Hello! You Can Check Our Mentors And See Their Blogs And Skills</p>
    </div>
    <ul role="list" class="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
      <li>
        <div class="flex items-center gap-x-6">
          <div  class=" gigi h-16 w-16 rounded-full"  alt="">
          </div>
          <div>
            <h3 class="text-base font-semibold leading-7 tracking-tight text-gray-900">Gigi Beridze</h3>
            <p class="text-sm font-semibold leading-6 text-indigo-600">Co-Founder / CEO / Front-End Developer </p>
          </div>
        </div>
        <br />
        <div class="flex items-center gap-x-6">
          <div  class=" goga h-16 w-16 rounded-full"  alt="">
          </div>
          <div>
            <h3 class="text-base font-semibold leading-7 tracking-tight text-gray-900">Goga Chxaidze</h3>
            <p class="text-sm font-semibold leading-6 text-indigo-600">Co-Founder / CEO / Back-End Developer </p>
          </div>
        </div>
      </li>


    </ul>
  </div>



</div>
<br /><br />
 <div className='p-16' >


        </div>
        <div class=" aboutusform overflow-hidden bg-white py-24 sm:py-32">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
      <div class="lg:pr-8 lg:pt-4">
        <div class="lg:max-w-lg">
          <h2 class="text-base font-semibold leading-7 text-indigo-600"> Gi-Academy</h2>
          <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">About Us</p>
          <p class="mt-6 text-lg leading-8 text-gray-600">Our Goal Is Are To let's Teach Our Eager Students High Earning Proffesions And Give They Right Way  </p>
          <dl class="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
            <div class="relative pl-9">
              <dt class="inline font-semibold text-gray-900">
                <svg class="absolute left-1 top-1 h-5 w-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z" clip-rule="evenodd" />
                </svg>
                About.
              </dt>
              <dd class="inline">Our Academy Already Teaches 2 Years And We Taught 100 + People We Are Trying to Make Georgia Best Country For Programming  </dd>
            </div>
            <div class="relative pl-9">
              <dt class="inline font-semibold text-gray-900">
                <svg class="absolute left-1 top-1 h-5 w-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clip-rule="evenodd" />
                </svg>
                 Certificates.
              </dt>
              <dd class="inline">After You Finish Courses We Make Test If You Pass Test You Can Get Our Certifications</dd>
            </div>
            <div class="relative pl-9">
              <dt class="inline font-semibold text-gray-900">
                <svg class="absolute left-1 top-1 h-5 w-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path d="M4.632 3.533A2 2 0 016.577 2h6.846a2 2 0 011.945 1.533l1.976 8.234A3.489 3.489 0 0016 11.5H4c-.476 0-.93.095-1.344.267l1.976-8.234z" />
                  <path fill-rule="evenodd" d="M4 13a2 2 0 100 4h12a2 2 0 100-4H4zm11.24 2a.75.75 0 01.75-.75H16a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75V15zm-2.25-.75a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75h-.01z" clip-rule="evenodd" />
                </svg>
                Programs.
              </dt>
              <dd class="inline">We Are Adding More Programs For Our Clients One Of Them Is Are Full-Stack Development</dd>
            </div>
          </dl>
        </div>
      </div>
      <img src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png" alt="Product screenshot" class="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0" width="2432" height="1442">
    </img>
    </div>
  </div>
</div>
</div>


  
        <br /><br />
 

        </div>


       
        <div class=" last bg-white py-24 sm:py-32">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <h2 class="text-center text-lg font-semibold leading-8 text-gray-900">Trusted by the world’s most innovative teams</h2></div>
    <div class="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5"> 
      <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg" alt="Transistor" width="158" height="48"></img>
      <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg" alt="Reform" width="158" height="48"></img>
      <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg" alt="Tuple" width="158" height="48"></img>
      <img class="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg" alt="SavvyCal" width="158" height="48"></img>
      <img class="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg" alt="Statamic" width="158" height="48"></img>
    </div>
  </div>
      


    </div>

    
    </>
  )
}
