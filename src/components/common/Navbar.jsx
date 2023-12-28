import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import img from '../../assets/ricoz 4.png';

const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <div className="bg-[#14121D] max-h-[12vh] flex flex-row justify-between text-white w-full mx-auto items-center p-2">
            <div className="relative flex items-center justify-between w-[80%] mx-auto">
                <div className="flex items-center">
                    <img src={img} alt="Logo" width={'100px'} />
                </div>
                <div className={`md:flex  items-center space-x-4 ${isMenuOpen ? 'absolute top-[60px] right-[-20px] justify-start p-3 bg-blue-800 rounded-lg items-center' : 'hidden'}`}>
                <div className="hover:bg-[#372b78] cursor-pointer rounded-xl px-3 text-center ">AboutUs</div>
                    <div className="hover:bg-[#372b78] cursor-pointer rounded-xl px-3 text-center">Services</div>
                    <div className="hover:bg-[#372b78] cursor-pointer rounded-xl px-3">Courses</div>
                    <div className="hover:bg-[#372b78] cursor-pointer rounded-xl px-3">Contact</div>
                </div>

                <div className={` bg-[#0030FF] hover:bg-[#372b78] cursor-pointer rounded-[50px] flex items-center justify-center h-[46px] px-4 text-lg`}>
                    Sign up
                </div>
                <div className="md:hidden">
                    <FaBars size={30} onClick={toggleMenu} />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
