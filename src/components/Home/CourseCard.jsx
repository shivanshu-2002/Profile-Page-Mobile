import React from 'react'

const CourseCard = ({ img }) => {
    return (
        <div className='w-[30%] h-full bg-slate-900 rounded-2xl cursor-pointer hover:shadow-2xl hover:shadow-black transition-[2s] hover:scale-105'>
            <div className='w-full h-[35%] rounded-xl rounded-b-none overflow-hidden'>
                <img className='w-full h-full object-cover' src={img} alt="Image description" />
            </div>

            <div className='h-[65%] w-full bg-slate-100 rounded-xl rounded-t-none flex items-center justify-center'>
                <div className='w-[90%] h-[95%]  flex flex-col justify-between text-white'>
                    <div className='text-[28px] leading-8 text-black font-semibold'>Web Development Mastery</div>
                    <div className='text-2xl  text-gray-900 font-semibold'>₹ 60,000</div>
                    <div className='text-lg  leading-6 text-gray-700'>Master the art of web development with our comprehensive course. Learn coding, design, and deployment.</div>
                    <div className='text-blue-600 text-lg'>Learn More.. </div>
                </div>
            </div>
        </div>
    )
}

export default CourseCard