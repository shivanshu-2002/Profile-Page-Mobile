import React, { useState, useEffect } from 'react';
import Card from './Card';
import top1 from '../../assets/bag.png';
import top2 from '../../assets/durbin.png';
import top3 from '../../assets/mircoscope.png'; // Corrected asset name

const PlatformFeature = () => {
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
    <div className='bg-white w-full p-3 mx-auto'>
      <div className='sm:w-[80%] w-[100%] mx-auto  p-2 my-4'>
        <div className='sm:text-3xl text-2xl font-semibold text-center'>Explore Our Platform's Unique Features</div>
        <div className='mt-5   flex items-center justify-center gap-4'>
          {Array.from({ length: numCards }, (_, index) => (
            <Card key={index} img={index === 0 ? top1 : index === 1 ? top2 : top3} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlatformFeature;
