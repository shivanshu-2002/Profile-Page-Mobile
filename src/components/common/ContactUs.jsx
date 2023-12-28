import React from 'react'
import contact from '../../assets/contact.png'
import ContactUsForm from '../Home/ContactUsForm'

// Images
import img1 from '../../assets/sm1.png';
import img2 from '../../assets/sm2.png';
import img3 from '../../assets/sm3.png';



const ContactUs = () => {
  return (
    <div className='w-[100%] h-[90vh] bg-[#14121D] flex flex-col items-center justify-center gap-4'>
          <div className='w-[80%] h-[70%]  flex flex-row'>
                 <div className='sm:w-[50%] w-0 h-full  flex items-center justify-center'>
                     <img src={contact}  width={'70%'}/>
                 </div>
                 <div className='sm:w-[50%] w-[100%] h-full '>
                 {/* Form */}
                 <ContactUsForm/>
                 </div>
          </div>
          <div className='w-[90%] h-[15%]  p-2 border-t-2 border-white text-white  flex justify-between'>
                 <div className='w-[30%]   flex items-center justify-center  sm:gap-1'>
                     <div className='w-[30%]  flex items-center justify-center  py-3'><img src={img1} className='sm:w-[50%] w-[80%] ' /></div>
                     <div className='sm:text-xl text-[12px]'>+91-7011112666</div>
                 </div>
                 <div className='w-[30%] h-full  flex items-center justify-center sm:gap-1'>
                 <div className='w-[30%] flex items-center justify-center'><img src={img2} className='sm:w-[50%] w-[80%]'/></div>
                     <div className='sm:text-xl text-[12px]'>info@Ricoz.in</div>
                 </div>
                 <div className='w-[30%] h-full flex items-center justify-center sm:gap-1'>
                 <div className='w-[30%] flex items-center justify-center'><img src={img3} className='sm:w-[50%] w-[80%]'/></div>
                     <div className='sm:text-xl text-[12px]'>Ricoz.in</div>
                 </div>
                 
          </div>
    </div>
  )
}

export default ContactUs