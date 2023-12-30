import React, { useContext, useState } from 'react';
import { DataContext } from '../Context/DataContext';
import Spinner from './Spinner';
import { FaRegUser } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { LuContact } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";
import { FaRegAddressCard } from "react-icons/fa";
import { MdOutlineBusinessCenter } from "react-icons/md";


const ProfileComponent = () => {
    const { currUser, handleNext, handlePrev } = useContext(DataContext);
  
    return (
      <div className='relative h-[100vh] w-[300px] overflow-hidden justify-center items-center bg-white rounded-xl'>
        {/* Top */}
        {currUser ? (
          <>
            <div className='absolute top-0 w-[100%] h-[26%] object-cover z-10 border-gray-500 border-2 rounded-b-[45%] bg-purple-800 flex items-start p-4 justify-center'>
              <div className='text-2xl text-center font-semibold text-gray-200'>{`${currUser?.first_name} ${currUser?.last_name}`}</div>
              <div className='absolute flex items-center justify-center bottom-[-30%] w-[100%]'>
        
                  <img
                    src={currUser?.avatar}
                    alt='Profile'
                    className='w-[43%] h-[120px] border-2 object-cover bg-white border-gray-600 rounded-full'
                  />
              
              </div>
            </div>
            <div className='h-[65%] absolute bottom-0 w-[100%] flex flex-col gap-2'>
            {/* UserName */}
            <div className='w-full h-[12%] bg-slate-100 p-[1px]  border-b-2 border-gray-400'>
                    <div className='w-[90%]   mx-auto flex justify-between items-center'>
                        <div className='w-[25%]  h-full flex items-center justify-center text-purple-700'><FaRegUser size={25} /></div>
                        <div className='w-[90%]  flex items-center justify-center text-[17px] font-semibold text-gray-800'>{currUser?.username}</div>
                    </div>
                </div>
                {/* Date Of birth */}
                <div className='w-full h-[12%] bg-slate-100 p-[1px]  border-b-2 border-gray-400'>
                    <div className='w-[90%]   mx-auto flex justify-between items-center'>
                        <div className='w-[25%]  h-full flex items-center justify-center text-purple-700'><SlCalender size={25} /></div>
                        <div className='w-[90%]  flex items-center justify-center text-[17px] font-semibold  text-gray-800'>{currUser?.date_of_birth}</div>
                    </div>
                </div>
                {/* Contact */}
                <div className='w-full h-[13%] text-center  bg-slate-100 p-[1px]  border-b-2 border-gray-400'>
                    <div className='w-[90%]   mx-auto flex justify-between items-center'>
                        <div className='w-[25%]  h-full flex items-center justify-center text-purple-700'><LuContact size={25} /></div>
                        <div className='w-[90%] leading-5 flex items-center justify-center text-xl  text-gray-800 text-[17px] font-semibold'>{currUser?.phone_number}</div>
                    </div>
                </div>
        {/*  Email */}
                <div className='w-full h-[12%] bg-slate-100 p-[1px]  border-b-2 border-gray-400'>
                    <div className='w-[90%]   mx-auto flex justify-between items-center'>
                        <div className='w-[25%]  h-full flex items-center justify-center text-purple-700'><MdOutlineMail size={25} /></div>
                        <div className='w-[90%]  flex items-center justify-center text-[17px] font-semibold  text-gray-800'>{currUser?.email}</div>
                    </div>
                </div>
                {/* Profession */}
                <div className='w-full h-[12%] bg-slate-100 p-[1px]  border-b-2 border-gray-400'>
                    <div className='w-[90%]   mx-auto flex justify-between items-center'>
                        <div className='w-[25%]  h-full flex items-center justify-center text-purple-700'><MdOutlineBusinessCenter size={25} /></div>
                        <div className='w-[90%]  flex items-center justify-center text-[17px] font-semibold leading-4 text-center text-gray-800'>{currUser?.employment?.title}</div>
                    </div>
                </div>
                                {/* Sddress */}
                <div className='w-full h-[15%] bg-slate-100 p-[1px]  border-b-2 border-gray-400'>
                    <div className='w-[90%]   mx-auto flex justify-between items-center'>
                        <div className='w-[25%]  h-full flex items-center justify-center text-purple-700'><FaRegAddressCard size={25} /></div>
                        <div className='w-[90%] flex leading-5 items-center justify-center text-[15px] text-center px-2 font-semibold  text-gray-800'>
                            {`${currUser?.address?.city}, ${currUser?.address?.state} ,${currUser?.address?.country}`}
                        </div>
                    </div>
                </div>
            </div>
            <div className='absolute bottom-0 w-[100%] h-[10%] flex items-center justify-around bg-purple-800 p-2'>
              <div className='text-white font-semibold hover:border-2 p-2 hover:bg-purple-900 cursor-pointer rounded-lg w-[100px] box-border text-center' onClick={handleNext}>
                Next
              </div>
              <div className='text-white font-semibold hover:border-2 p-2 hover:bg-purple-900 cursor-pointer rounded-lg w-[100px] box-border text-center' onClick={handlePrev}>
                Previous
              </div>
            </div>
          </>
        ) : (
          <Spinner />
        )}
      </div>
    );
  };
  
  export default ProfileComponent;