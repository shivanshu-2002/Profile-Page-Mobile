import React from 'react';
import CourseCard from '../../components/Home/CourseCard';
import skill1 from '../../assets/skill1.png';
import skill2 from '../../assets/skill2.png';
import skill3 from '../../assets/skill3.png';

const Courses = () => {
  return (
    <div className='text-black w-[100%] min-h-[105vh] gap-5 flex items-center justify-center'>
      <div className='w-[80%] text-black h-[90%] flex flex-col gap-8'>
        <div className='w-full h-[20%] flex flex-col gap-2 sm:flex-row justify-between'>
          <div className='w-[90%] sm:w-[70%] h-full flex flex-col sm:gap-3'>
            <div className='sm:text-4xl text-3xl text-start font-semibold '>Unlock New Skills with Our Courses</div>
            <div className='sm:text-2xl text-lg '>Learn and Grow at Your Own Pace.</div>
          </div>
          <div className='sm:w-[30%] flex items-center justify-start'>
            <div className='bg-[#0030FF] rounded-[50px] flex items-center justify-center text-white w-[137px] h-[46px] sm:text-lg text-[15]'>Explore More</div>
          </div>
        </div>

        <div className='w-full sm:h-[70%] h-[90%] flex flex-wrap gap-4 items-center justify-center'>
          <CourseCard img={skill1} />
          <CourseCard img={skill2} />
          <CourseCard img={skill3} />
        </div>
      </div>
    </div>
  );
};

export default Courses;
