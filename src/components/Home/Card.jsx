import React from 'react'


const Card = ({img}) => {
       
  return (
    <div className='sm:w-[25vw] w-[80%] h-[50vh] rounded-2xl bg-[#17245B] hover:shadow-2xl hover:shadow-slate-800 hover:scale-105 transition-[2s] shadow-black'>
         <div className='w-[80%] mx-auto  my-5'>
          <div>
            <img src={img}/>
          </div>
          <div className='sm:text-2xl text-lg text-white'>Wide Range of Services</div>
          <div className='sm:text-[17px] text-[13px] text-white mt-2 font-Poppins'> Find everything from web development to marketing under one roof. Our platform offers a diverse array of tech services</div>
          </div>
    </div>
  )
}

export default Card