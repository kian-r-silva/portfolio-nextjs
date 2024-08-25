import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { PiReadCvLogoLight } from "react-icons/pi";
import Image from 'next/image';

const Main = () => {
    return (
        <div id='home' className='w-full h-screen flex items-center justify-center text-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900'>
            <div className='max-w-[1240px] w-full p-4'>
                <div>
                    <p className='uppercase text-sm tracking-widest text-gray-400'>Welcome to my portfolio!</p>
                    <h1 className='text-center py-4 text-white text-4xl sm:text-5xl md:text-6xl font-bold'>
                        My Name is <span className='text-[#e94560]'>Kian</span>
                    </h1>
                    <h2 className='text-center py-2 text-gray-400 text-2xl sm:text-3xl'>
                        Aspiring Software Developer
                    </h2>
                    <p className='text-center max-w-[70%] py-4 m-auto text-gray-400'>
                        I am currently a 3-2 engineering student, studying computer science at Sarah Lawrence College and Columbia University,
                        graduating in the Columbia Class of '26. I am eager to join a forward-focused company that is dedicated to making a positive
                        impact through innovative technology development. My passion lies in contributing to projects that drive meaningful change and
                        push the boundaries of what's possible.
                    </p>
                    <div className='flex items-center justify-between max-w-[330px] m-auto py-8'>
                        <div className='rounded-full shadow-lg shadow-gray-700 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <FaLinkedin className='w-8 h-8 text-[#e94560]' />
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-700 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <FaGithub className='w-8 h-8 text-[#e94560]'/>
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-700 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <FaInstagram className='w-8 h-8 text-[#e94560]'/>
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-700 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <PiReadCvLogoLight className='w-8 h-8 text-[#e94560]' />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
