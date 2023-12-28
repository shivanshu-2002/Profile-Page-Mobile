import React from 'react'
import { FaStar } from "react-icons/fa";


const TestimonialCard = ({img}) => {
    return (
        <div className='sm:w-[30%] h-full bg-white text-black rounded-3xl flex items-center justify-center hover:scale-95 transition-[2s] hover:shadow-lg hover:shadow-blur-sm hover:shadow-white'>
                <div className='w-[85%] h-[80%] flex flex-col justify-between'>
                {/* Name Profile */}
                        <div className='flex items-center justify-start gap-3'>
                            <div className='w-[25%] h-full p-2'>
                                <img src={img}/>
                            </div>
                            <div className='flex flex-col justify-center '>
                                <div className='text-xl mb-[-5px]'>John Doe</div>
                                <div className='text-gray-800 font-semibold'>Graduated</div>
                            </div>
                        </div>

                        <div className='text-2xl font-semibold'>"I recommend this to All"</div>

                        <div className='text-[15px] text-[#374151]'>Ricoz connected me with amazing clients. The quality scoring system ensures I work on exciting projects while maintaining my reputation.</div>

                        <div>
                            <div className='flex text-yellow-500 gap-1'> 
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            </div>
                        </div>
                </div>
        </div>
    )
}

export default TestimonialCard