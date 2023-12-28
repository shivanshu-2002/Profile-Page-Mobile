import React from 'react'
import TestimonialCard from './TestimonialCard'

import t1 from '../../assets/testimon1.png'
import t2 from '../../assets/testimon2.png'
import t3 from '../../assets/testimon3.png'

const Testimonial = () => {
  return (
    <div className='text-white bg-[#14121D] w-[100%] h-[85vh] flex items-center justify-center'>
               <div className='w-[80%] h-[80%]  flex flex-col gap-[10%]'>
                       <div className='text-4xl  w-full h-[7%] flex justify-center items-center'>Real Stories from Real Professionals</div>
                       <div className=' h-[83%] w-full flex flex-row justify-between'>
                            <TestimonialCard img={t1}/>
                            <TestimonialCard img={t2}/>
                            <TestimonialCard img={t3}/>
                       </div>
               </div>
    </div>  
  )
}

export default Testimonial