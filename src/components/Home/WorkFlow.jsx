import React from 'react'
import img from '../../assets/workflow_center.png'
import wf1 from '../../assets/wf-1.png';
import wf2 from '../../assets/wf-2.png';
import wf3 from '../../assets/wf-3.png';
import wf4 from '../../assets/wf-4.png';

const WorkFlow = () => {
  return (
    <div className='text-white bg-white w-[100%] h-[100vh] p-7 flex flex-col items-center justify-center  gap-[3%]'>
      <div className=' w-[100%] sm:w-[70%] h-[5%] text-black sm:text-4xl text-2xl text-center flex items-center justify-center mb-5'>Enhance Your Workflow with Integrated Tools</div>
      {/* The Circle Code Starts from here  */}
      <div className='relative w-[100%] sm:w-[60%] h-[80%] flex items-center justify-center'>

      <div className='absolute  sm:w-[30%] w-[40%] left-[-29px] sm:left-0 top-0 h-full flex flex-col justify-between'>
        <div className='absolute top-0  left-0 w-[100%] h-[45%] flex flex-col items-center justify-between z-20'>
          <div className='h-[40%] w-full flex justify-center'>
            <img src={wf1} width={'27%'} alt="Left Pillar Top Image" />
          </div>
          <div className='w-[100%] sm:w-[80%] text-black flex flex-col items-center justify-center'>
            <div className='sm:text-lg text-[15px] text-center font-semibold'>Messaging Platform</div>
            <div className='sm:text-[15px] text-[13px] leading-4 sm:leading-5 text-gray-800 text-center'>Stay connected and collaborate seamlessly with clients and team members.</div>
          </div>
        </div>
        <div className='absolute bottom-0  left-0 w-[100%] h-[45%] flex flex-col items-center justify-between z-20'>
          <div className='h-[40%] w-full flex justify-center'>
            <img src={wf3} width={'27%'} alt="Left Pillar Top Image" />
          </div>
          <div className='w-[100%] sm:w-[80%] text-black flex flex-col items-center justify-center'>
            <div className='sm:text-lg text-[15px] text-center font-semibold'>CRM System</div>
            <div className='sm:text-[15px] text-[13px] leading-4 sm:leading-5 text-gray-800 text-center'>Manage client relationships effectively with our user-friendly CRM system.</div>
          </div>
        </div>
      </div>

      <div className='absolute   sm:w-[30%] w-[40%] right-0  top-0 h-full flex flex-col justify-between'>
        <div className='absolute top-0   left-0 w-[100%] h-[45%] flex flex-col items-center justify-between z-20'>
          <div className='h-[40%] w-full flex justify-center'>
            <img src={wf2} width={'27%'} alt="Left Pillar Top Image" />
          </div>
          <div className='w-[100%] sm:w-[80%] text-black flex flex-col items-center justify-center'>
            <div className='sm:text-lg text-[15px] text-center  font-semibold'>Collaborative Workspace</div>
            <div className='sm:text-[15px] text-[13px] leading-4 sm:leading-5 text-gray-800 text-center'>Experience the power of collaboration in our shared workspace .</div>
          </div>
        </div>
        <div className='absolute bottom-0  mt-10 left-0 w-[100%] h-[50%]  flex flex-col items-center  justify-between z-20'>
          <div className='h-[40%] w-full flex justify-center'>
            <img src={wf4} width={'27%'} alt="Left Pillar Top Image" />
          </div>
          <div className='w-[100%] sm:w-[80%] text-black flex flex-col items-center justify-center'>
            <div className='sm:text-lg text-[15px] text-center font-semibold'>Calendar Integration</div>
            <div className='sm:text-[15px] text-[13px] leading-4 sm:leading-5 text-gray-800 text-center'>Simplify your scheduling and time management with our calendar integration.</div>
          </div>
        </div> 
      </div>

      {/* <div className='absolute sm:w-[30%] w-[40%] right-0 top-0 h-full flex flex-col justify-between'>
        <div className='absolute top-0 right-0 w-[100%] h-[40%] z-20 flex flex-col items-center justify-between'>
          <div className='h-[40%] w-full flex justify-center'>
            <img src={wf2} width={'27%'} alt="Right Pillar Top Image" />
          </div>
          <div className='w-[80%] text-black flex flex-col items-center justify-center'>
            <div className='text-lg text-center font-semibold'>Collaborative Workspace</div>
            <div className='text-[15px] leading-5 text-gray-800 text-center'>Experience the power of collaboration in our shared workspace together.</div>
          </div>
        </div>

        <div className='absolute bottom-0 right-0 w-[100%] h-[40%]  flex flex-col items-center justify-between'>
          <div className='h-[40%] w-full flex justify-center'>
            <img src={wf4} width={'27%'} alt="Right Pillar Bottom Image" />
          </div>
          <div className='w-[80%] text-black flex flex-col items-center justify-center'>
            <div className='text-lg text-center font-semibold'>Calendar Integration</div>
            <div className='text-[15px] leading-5 text-gray-800 text-center'>Simplify your scheduling and time management with our calendar integration.</div>
          </div>
        </div>
      </div> */}

      {/* Circle */}
      <div className='w-[55vh] h-[55vh]    rounded-full  flex items-center justify-center'>
        <div className='sm:w-[44vh] sm:h-[44vh] w-[25vh] h-[25vh] rounded-full'>
          <img src={img} alt="Circular Image" />
        </div>
      </div>

      {/* circlle border */}
      <div className='w-[55vh] h-[18vh]   absolute top-0  overflow-hidden'>
               <div className='w-[55vh] h-[55vh] mt-10 rounded-full border-2 border-gray-800 '></div>
      </div>
      <div className='w-[55vh] h-[15vh] flex items-end  absolute bottom-0  overflow-hidden'>
               <div className='w-[55vh] h-[55vh] mb-8 rounded-full border-2 border-gray-800 '></div>
      </div>
    </div>
      
      {/* Explore button  */}
      <div className='w-[80%] h-[10%] flex items-center justify-center'>
      <div className='bg-[#0030FF] rounded-[50px] flex items-center justify-center text-white w-[137px] h-[46px] text-lg'>Get Started</div>
      </div>
        
    </div>
  )
}

export default WorkFlow