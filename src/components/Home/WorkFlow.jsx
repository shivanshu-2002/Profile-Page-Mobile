import React from 'react'
import img from '../../assets/workflow_center.png'
import wf1 from '../../assets/wf-1.png';
import wf2 from '../../assets/wf-2.png';
import wf3 from '../../assets/wf-3.png';
import wf4 from '../../assets/wf-4.png';

const WorkFlow = () => {
  return (
    <div className='text-white bg-white w-[100%]  py-5 flex flex-col items-center justify-center  gap-[3%]'>
      <div className=' w-[100%] sm:w-[70%] h-[5%] text-black sm:text-4xl text-2xl text-center flex items-center justify-center mb-5'>Enhance Your Workflow with Integrated Tools</div>
      {/* The Circle Code Starts from here  */}
      <div className='relative w-[100%] min-h-[450px]  sm:w-[60%]  flex items-center justify-center'>

      <div className='absolute  sm:w-[32%] w-[40%] left-[-5px] sm:left-0  top-0 h-full flex flex-col justify-between'>
        <div className='    w-[100%] h-[45%] flex flex-col items-center justify-center z-20'>
          <div className='h-[30%] sm:h-[40%] w-full flex justify-center '>
            <img src={wf1} width={'27%'} alt="Left Pillar Top Image" />
          </div>
          <div className='w-[100%] h-[70%] sm:h-[60%] text-black flex flex-col items-center justify-start'>
            <div className='sm:text-lg text-[15px] text-center font-semibold'>Messaging Platform</div>
            <div className='sm:text-[15px] text-[13px] leading-4 sm:leading-5 text-gray-800 text-center'>Stay connected and collaborate seamlessly with clients and team members.</div>
          </div>
        </div>
        <div className='    w-[100%] h-[45%] flex flex-col items-center justify-center z-20'>
          <div className='h-[30%] sm:h-[40%] w-full flex justify-center '>
            <img src={wf3} width={'27%'} alt="Left Pillar Top Image" />
          </div>
          <div className='w-[100%] h-[70%] sm:h-[60%] text-black flex flex-col items-center justify-start'>
            <div className='sm:text-lg text-[15px] text-center font-semibold'>CRM System</div>
            <div className='sm:text-[15px] text-[13px] leading-4 sm:leading-5 text-gray-800 text-center'>Manage client relationships effectively with our user-friendly CRM system.</div>
          </div>
        </div>

        {/* <div className=' bg-pink-800  left-0 w-[100%] h-[45%] flex flex-col items-center justify-center z-20'>
          <div className='h-[40%] w-full flex justify-center'>
            <img src={wf3} width={'27%'} alt="Left Pillar Top Image" />
          </div>
          <div className='w-[100%]  text-black flex flex-col items-center justify-center'>
            <div className='sm:text-lg text-[15px] text-center font-semibold'>CRM System</div>
            <div className='sm:text-[15px] text-[13px] leading-4 sm:leading-5 text-gray-800 text-center'></div>
          </div>
        </div> */}
      </div>
      <div className='absolute  sm:w-[32%] w-[40%] right-0   top-0 h-full flex flex-col justify-between sm:gap-5 gap-10'>
        <div className='    w-[100%] h-[45%] flex flex-col items-center justify-center z-20'>
          <div className='h-[30%] sm:h-[40%] w-full flex justify-center '>
            <img src={wf2} width={'27%'} alt="Left Pillar Top Image" />
          </div>
          <div className='w-[100%] h-[70%] sm:h-[60%] text-black flex flex-col items-center justify-start'>
            <div className='sm:text-lg text-[15px] text-center font-semibold'>Collaborative Workspace</div>
            <div className='sm:text-[15px] text-[13px] leading-4 sm:leading-5 text-gray-800 text-center'>Experience the power of collaboration in our shared workspace .</div>
          </div>
        </div>
        <div className='    w-[100%] h-[45%] flex flex-col items-center justify-center z-20'>
          <div className='h-[30%] sm:h-[40%] w-full flex justify-center '>
            <img src={wf4} width={'27%'} alt="Left Pillar Top Image" />
          </div>
          <div className='w-[100%] h-[70%] sm:h-[60%] text-black flex flex-col items-center justify-start'>
            <div className='sm:text-lg text-[15px] text-center font-semibold'>Calendar Integration</div>
            <div className='sm:text-[15px] text-[13px] leading-4 sm:leading-5 text-gray-800 text-center'>Simplify your scheduling and time management with our calendar integration.</div>
          </div>
        </div>
      </div>

      {/* Circle */}
      <div className='rounded-full  flex items-center justify-center'>
        <div className='sm:w-[35vh] sm:h-[35vh] w-[200px] h-[200px] rounded-full'>
          <img src={img} alt="Circular Image" />
        </div>
      </div>

    </div>
      
      {/* Explore button  */}
      <div className='w-[80%] h-[10%] flex items-center justify-center py-4 '>
      <div className='bg-[#0030FF] rounded-[50px] flex items-center justify-center text-white w-[137px] h-[46px] text-lg'>Get Started</div>
      </div>
        
    </div>
  )
}

export default WorkFlow