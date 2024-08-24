import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import Image from 'next/image';

const Main = () => {
    return (
        <div id='home' className='w-full h-screen flex items-center justify-center text-center'>
            <div className='max-w-[1240px] w-full p-2'>
                <div>
                    <p className='uppercase text-sm tracking-widest text-gray-600'>Welcome to my portfolio!</p>
                    <h1 className='text-center py-4 hover:animate-fade-left animate-on-hover animate-duration-3000 animate-ease-linear'>
                        My Name is <span className='text-[#9f5ea1]'>Kian</span>
                    </h1>
                    <h1 className='text-center py-2 hover:animate-fade-right animate-duration-4000 text-gray-500'>
                        Aspiring Software Developer
                    </h1>
                    <p  className='text-center max-w-[70%] py-4 m-auto text-gray-600'>
                        I am currently a 3-2 engineering student, studying computer science at Sarah Lawrence College and Columbia University, 
                        graduating in the Columbia Class of '26. I am eager to join a forward-focused company that is dedicated to making a positive 
                        impact through innovative technology development. My passion lies in contributing to projects that drive meaningful change and 
                        push the boundaries of what's possible.
                    </p>
                    <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                            <FaLinkedin className='w-7 h-7' />
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                            <FaGithub className='w-7 h-7'/>
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                            <FaInstagram className='w-7 h-7'/>
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                            <Image src='/assets/resume_icon.png' alt='resumeicon' width='25' height='25' className='w-7 h-7'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Main;
