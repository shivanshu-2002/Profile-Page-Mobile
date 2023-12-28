import React from 'react'

const CourseCard = ({ img }) => {
    return (
        <div className='sm:w-[30%] min-w-[300px] p-2 border-none  w-[47%] h-full  rounded-2xl cursor-pointer hover:shadow-2xl hover:shadow-black transition-[2s] hover:scale-105'>
            <div className='w-full h-[35%] rounded-xl rounded-b-none overflow-hidden'>
                <img className='w-full h-full object-cover' src={img} alt="Image description" />
            </div>
            <div className='h-[65%] w-full bg-slate-100 rounded-xl rounded-t-none flex items-center justify-center'>
                <div className='w-[90%] h-[95%]  flex flex-col justify-between text-white'>
                    <div className='sm:text-[28px] text-lg leading-8 text-black font-semibold'>Web Development Mastery</div>
                    <div className='sm:text-2xl  text-gray-900 font-semibold'>₹ 60,000</div>
                    <div className='sm:text-lg text-sm  leading-5  sm:leading-6 text-gray-700'>Master the art of web development with our comprehensive course. Learn coding, design, and deployment.</div>
                    <div className='text-blue-600 text-lg'>Learn More.. </div>
                </div>
            </div>
        </div>
    )
}

export default CourseCard