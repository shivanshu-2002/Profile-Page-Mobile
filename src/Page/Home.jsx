import React from 'react'
import Navbar from '../components/common/Navbar'
import img2 from '../assets/top_1.png';
import img3 from '../assets/top_2.png'
import Card from '../components/Home/Card'
import top1 from '../assets/bag.png';
import top2 from '../assets/durbin.png';
import top3 from '../assets/mircoscope.png'
import chooseimg from '../assets/choose.png'

// Why Choose recoz section ...
import cu1 from '../assets/ce1.png';
import cu2 from '../assets/ce2.png';
import cu3 from '../assets/ce3.png';
import cu4 from '../assets/ce4.png';
import CourseCard from '../components/Home/CourseCard';

// Skill Section...
import skill1 from '../assets/skill1.png';
import skill2 from '../assets/skill2.png';
import skill3 from '../assets/skill3.png'
import Testimonial from '../components/Home/Testimonial';
import WorkFlow from '../components/Home/WorkFlow';
import ContactUs from '../components/common/ContactUs';
import Footer from '../components/common/Footer';

const Home = () => {
    return (
        <div className='w-[100%]'>
            {/* Navbar Section */}
            <Navbar />
            {/* Banner */}
            <div class="bg-gradient-to-r  from-[#181623] to-[#17245B] p-4 min-h-[65vh] sm:h-[80vh] w-[100%]  flex justify-center items-center">
                <div className='sm:w-[50%] w-[60%] h-full  flex items-center justify-center '>
                    <div className='w-[100%] flex flex-col items-start justify-start gap-5'>
                        <div className='sm:text-[45px] text-[25px] font-semibold sm:leading-[64px] text-white'>Discover Top Tech Professionals in Minutes.</div>
                        <div className='sm:text-[24px] text-[16px]  text-white  '>Streamline Your Business Needs with Ricoz's All-in-One Tech Service Hub.</div>
                        <div className='bg-[#0030FF] rounded-[50px] flex items-center justify-center text-white w-[137px] h-[46px] text-lg'>Get Started</div>
                    </div>
                </div>

                <div className='sm:w-[30%]  w-[50%] h-full flex flex-col sm:justify-start justify-center items-center mt-5  gap-[90px] '>
                    <div className=' w-[100%] h-[22vh]   flex justify-end  '>
                        <div className=' sm:w-[22vw] w-[100%]'>
                            <img src={img2} />
                        </div>
                    </div>
                    <div className='sm:w-[100%] w-0  flex justify-start '>
                        <div className='w-[15vw] h-[15vh]'>
                            <img src={img3} />
                        </div>
                    </div>

                </div>
            </div>

            {/* Platform Features */}
            <div className='bg-white w-[100%] h-[70vh] mx-auto'>
                <div className='w-[80%] mx-auto h-full my-4 '>
                    <div className='text-3xl font-semibold'>Explore Our Platform's Unique Features</div>
                    <div className=' flex  gap-10 mt-5  items-center justify-center'>
                        <Card img={top1} />
                        <Card img={top2} />
                        <Card img={top3} />
                    </div>
                </div>
            </div>

            {/* why choose ricoz */}
            
            <div className='bg-[#14121D] w-[100%] sm:h-[100vh] flex flex-col'>
                <div className='text-4xl text-white p-3 text-center'>Why Choose Ricoz?</div>
                <div className='w-[80%] mx-auto mb-4 mt-5 h-[80%] flex flex-col-reverse gap-3 sm:flex-row rounded-xl '>
                    <div className='sm:w-[45%] w-[80%] h-[50%] sm:h-[100%] rounded-xl flex   items-center justify-end '>
                        <img src={chooseimg} width={'100%'} />
                    </div>
                    <div className='sm:w-[60%] w-[100%]   h-full rounded-xl gap-10 flex flex-col justify-center items-start  '>
                        
                        <div className='w-[100%] sm:ml-3 mx-auto h-[80px] flex flex-row justify-center gap-3  items-center '>
                            <div className='w-[60px] h-[60px] text-xl bg-white  items-center justify-center rounded-full'>
                                <img src={cu1} />
                            </div>
                            <div className='w-[80%]  sm:text-xl'>
                                <div className='text-white text-lg sm:text-xl  font-semibold'>Vast Professional Network</div>
                                <div className='text-gray-300 sm:text-[18px] text-sm'>Access a wide range of skilled tech professionals, all in one platform.</div>
                            </div>
                        </div>

                        <div className='w-[100%] sm:ml-3 mx-auto h-[80px] flex flex-row justify-center gap-3  items-center '>
                            <div className='w-[60px] h-[60px] text-xl bg-white  items-center justify-center rounded-full'>
                                <img src={cu2} />
                            </div>
                            <div className='w-[80%]  text-xl'>
                                <div className='text-white font-semibold text-lg sm:text-xl '>Quality You Can Trust</div>
                                <div className='text-gray-300 sm:text-[18px] text-sm'>Our stringent quality scoring system ensures that you receive exceptional services.</div>
                            </div>
                        </div>

                        <div className='w-[100%] sm:ml-3 mx-auto h-[80px] flex flex-row justify-center gap-3  items-center '>
                            <div className='w-[60px] h-[60px] text-xl bg-white  items-center justify-center rounded-full'>
                                <img src={cu3} />
                            </div>
                            <div className='w-[80%]  text-xl'>
                                <div className='text-white font-semibold text-lg sm:text-xl '>Effortless Collaboration</div>
                                <div className='text-gray-300 sm:text-[18px] text-sm'>Our integrated tools facilitate seamless communication and collaboration</div>
                            </div>
                        </div>

                        <div className='w-[100%] sm:ml-3 mx-auto h-[80px] flex flex-row justify-center gap-3  items-center '>
                            <div className='w-[60px] h-[60px] text-xl bg-white  items-center justify-center rounded-full'>
                                <img src={cu4} />
                            </div>
                            <div className='w-[80%]  text-xl'>
                                <div className='text-white font-semibold text-lg sm:text-xl '>Save Time and Effort</div>
                                <div className='text-gray-300 sm:text-[18px] text-sm'>With our platform, finding professionals and managing projects becomes effortless.</div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

            {/* Unlock New Skills */}
            <div className='text-black  w-[100%] h-[95vh] gap-5 flex items-center justify-center'>
                <div className='w-[80%]  text-black h-[90%] flex flex-col gap-8'>
                    <div className='w-full  h-[20%]  flex justify-between'>
                        <div className='w-[70%] h-full flex flex-col gap-3'>
                            <div className='text-4xl font-semibold '>Unlock New Skills with Our Courses</div>
                            <div className='text-2xl  '>Learn and Grow at Your Own Pace.</div>
                        </div>
                        <div className='w-[30%] flex items-center justify-start'>
                            <div className='bg-[#0030FF] rounded-[50px] flex items-center justify-center text-white w-[137px] h-[46px] text-lg'>Expolor More</div>
                        </div>
                    </div>
                   
                    <div className=' w-full  h-[70%] flex  items-center justify-between'>
                        <CourseCard img={skill1} />
                        <CourseCard img={skill2} />
                        <CourseCard img={skill3} />
                    </div>
                </div>
            </div>

            {/* Testimonials */}

            <Testimonial />
            {/* Work Flow*/}
            <WorkFlow />
            {/* Contact-Us */}
            <ContactUs/>
            {/* Footer */}
            <Footer/>
        </div>
    )
}

export default Home