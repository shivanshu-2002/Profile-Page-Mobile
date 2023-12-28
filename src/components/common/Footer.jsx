import React from 'react'
import logo from '../../assets/ricoz 4.png'
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";




const Footer = () => {
  const sections = [
    { title: 'About Us', link: '/about-us' },
    { title: 'Services', link: '/services' },
    { title: 'Courses', link: '/courses' },
    { title: 'Contact Us', link: '/contact-us' },
  ];
  const services = [
    'Web Development',
    'Performance Marketing',
    'Social Media Marketing',
    'App Development',
    'Graphic Design',
    'UI/UX Design',
  ];
  return (
    <div class="bg-gradient-to-r  from-[#181623] to-[#17245B] flex flex-col justify-center items-center  min-h-[75vh] w-[100%] gap-2">
      <div className=' sm:w-[80%] w-[100%]  h-[100%]  flex flex-col sm:flex-row p-5 text-white  border-b-2 gap-5'>
        {/* Image Section */}
        <div className='sm:w-[15%] w-[40%] h-[15%] flex justify-center items-center'>
          <img src={logo} width={'70%'} />
        </div>
        {/* COmpany & Section  */}
        <div className='w-[100%] sm:w-[35%] flex gap-4  '>
          <div className=' w-[40%] h-full flex flex-col items-start gap-4'>
            <div className='text-xl text-white'>Company</div>
            <div className='flex flex-col gap-2 leading-3  text-[12px] lg:text-sm text-gray-300'>
              {
                sections.map((item, index) => (
                  <div key={index}>
                    <p>{item.title}</p>
                  </div>
                ))
              }
            </div>
          </div>
          <div className=' sm:w-[60%] h-full flex flex-col   gap-4'>
            <div className='text-xl text-white '>Services</div>
            <div className='flex flex-col gap-2 leading-3 text-[12px] lg:text-sm text-gray-300'>
              {
                services.map((item, index) => (
                  <div key={index}>
                    <p>{item}</p>
                  </div>
                ))
              }
            </div>
          </div>

        </div>

        {/* Detail and NewsLetter */}
        <div className='w-[100%]   sm:w-[50%]  flex  justify-between '>
          <div className='w-[35%]  h-[60%] min-h-[200px]  flex flex-col  gap-3'>
            <div className='h-[30%] w-full flex flex-col  text-lg'>
              <div className='w-[100%] '>Email Us</div>
              <div className='w-[100%]  text-[12px] lg:text-sm md:font-semibold'>Ricoz@gmail.com</div>
            </div>
            <div className='h-[40%] w-full'>
              <div>Contact Us</div>
              <div className='text-[12px] lg:text-sm md:font-semibold'>+91 9098885099</div>
            </div>
            <div className='h-[20%] w-[200%] flex flex-wrap text-2xl gap-2 '>
              <FaFacebook className='text-blue-800'  />
              <AiFillTwitterCircle className='text-sky-400'  />
              <FaLinkedin className='bg-blue-400'  />
              <FaSpotify className='bg-green-700'  />
              <FaSquareInstagram className='bg-pink-700'  />
            </div>

          </div>
          <div className='w-[60%] flex flex-col gap-2 '>
            <div className='text-[16px] sm:text-lg text-center font-semibold uppercase'>Subscribe to NewsLetter</div>
            <div className='w-[100%] text-black sm:items-center '><input type='text' placeholder='enter email' className='p-2 w-[100%] rounded-3xl border-none' /></div>
          </div>
        </div>

      </div>
       <div className='w-[100%] mb-4 text-center text-gray-300 text-sm'>© 2023 Ricoz. All Rights Reserved.</div>

    </div>
  )
}

export default Footer


