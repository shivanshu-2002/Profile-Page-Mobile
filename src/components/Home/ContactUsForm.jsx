import React, { useState } from 'react';

const ContactForm = () => {

  return (
    <div className="w-[100%] h-full  text-white flex flex-col items-start justify-start gap-5  rounded-md shadow-md">
              <div className='w-[80%] mx-auto h-[10%] text-3xl font-semibold'>Get In Touch</div>
             <form className='w-[100%] flex flex-col gap-8'>

                   <div className='w-[100%]  border-b-2 '>
                    <input type='text' placeholder='Name' className='bg-inherit border-none p-2 w-full text-xl '/>
                   </div>

                   <div className='w-[100%]  gap-2 flex justify-between'>
                   <div className='w-[45%]  border-b-2 '>
                    <input type='text' placeholder='Email' className='bg-inherit border-none p-2 w-full text-xl '/>
                   </div>
                   <div className='w-[45%]  border-b-2 '>
                    <input type='text' placeholder='Phone Number' className='bg-inherit border-none p-2 w-full text-xl '/>
                   </div>
                   </div>
                   <div className='w-[100%] border-b-2'>
                   <input type='text' placeholder='Message' className='bg-inherit border-none p-2 w-full text-xl '/>
                   </div>
                   <div className='w-[100%] h-[15%] flex justify-center items-center'>
                   <div className='bg-[#0030FF] rounded-[50px] flex items-center hover:bg-blue-900 cursor-pointer justify-center text-white w-[137px] h-[46px] text-lg'>Submit Now</div>
                   </div>
             </form>
    </div>
  );
};

export default ContactForm;
