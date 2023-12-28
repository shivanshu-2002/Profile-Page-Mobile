import React, { useState, useEffect } from 'react';
import TestimonialCard from './TestimonialCard';
import t1 from '../../assets/testimon1.png';
import t2 from '../../assets/testimon2.png';
import t3 from '../../assets/testimon3.png';

const Testimonial = () => {
  const [numCards, setNumCards] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width > 600) {
        setNumCards(3);
      } else if (width > 450) {
        setNumCards(2);
      } else {
        setNumCards(1);
      }
    };

    // Initial call to set the initial number of cards
    handleResize();

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='text-white bg-[#14121D] w-full p-5 flex items-center justify-center'>
      <div className='w-[95%] sm:w-[80%] h-[80%]  flex flex-col gap-[10%]'>
        <div className='sm:text-4xl text-2xl p-4 mb-3 text-center w-full h-[7%] flex justify-center items-center'>Real Stories from Real Professionals</div>
        <div className='h-[83%] p-2 w-full flex flex-row justify-between'>
          {Array.from({ length: numCards }, (_, index) => (
            <TestimonialCard key={index} img={index === 0 ? t1 : index === 1 ? t2 : t3} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
