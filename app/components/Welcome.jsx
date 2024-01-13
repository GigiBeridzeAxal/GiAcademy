import Link from 'next/link'
import React from 'react'

export default function Welcome() {
  return (
    <div className="Welcome">

        <div className="wel">
            <div className="Hash">#დაიწყესწავლაახლავე</div>
   <div className="Digit"> <div className="red">ციფრული</div>  ტექნოლოგიების
     <span className='cour' > კურსებს </span> ეძებ ?</div>
     <div className="youcan">შენ ეს <span className='yel' > შეგიძლიაა </span>  !</div>


        </div>
  
  <div className="Start">
    <div className="starttext">დაიწყე სწავლა აქ <br />
    მისაღებ ფასად </div>
    <button class=" stbtn  bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
  Start Here
</button>  

  </div>
   
    </div>
    



  )
}
