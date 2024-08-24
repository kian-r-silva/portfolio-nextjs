"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { RiCloseFill, RiMenuFill } from "react-icons/ri";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import Image from 'next/image';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    }

    useEffect(() =>  {
        const handleShadow = () => {
            if (window.scrollY >= 90){
                setShadow(true)
            } else {
                setShadow(false)
            }
        }
        window.addEventListener('scroll', handleShadow)
    })

    return (
        <div className={shadow? 'fixed w-full h-20 shadow-xl z-[100]': 'fixed w-full h-20 z-[100]'}>
            <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
                <Link href='/#home'>
                <Image src="/assets/KianSilvaIcon.png" alt="KianSilvaIcon" width={125} height={50} />
                </Link>
                <div>
                    <ul className='hidden md:flex'>
                        <Link href='/#home'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
                        </Link>
                        <Link href='/#about'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
                        </Link>
                        <Link href='/#skills'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>Skills</li>
                        </Link>
                        <Link href='/#projects'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>Projects</li>
                        </Link>
                        <Link href='/#contact'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>Contact</li>
                        </Link>
                    </ul>
                    <div onClick={handleNav} className='md:hidden'>
                        <RiMenuFill size={25}/>
                    </div>
                </div>
            </div>

            <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/30' : ''}>
                <div className={nav?'md:hidden fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#addbff] p-10 ease-in duration-500'
                                : 'fixed left-[-100%] p-10 ease-in duration-500'}>
                    <div className='flex w-full items-center justify-between'>
                        <Image src="/assets/KianSilvaIcon.png" alt="KianSilvaIcon" width={100} height={50} />
                        <div onClick={handleNav} className='p-3 cursor-pointer'>
                            <RiCloseFill size={20}/>
                        </div>
                    </div>
                    <div className='border-b border-gray-300 my-4'>
                        <p className='w-[85%] md:w-[90%] py-4 text-[20px]'>Welcome to my portfolio!</p>
                    </div>
                    <div className='py-4 flex flex-col'>
                        <ul className='uppercase'>
                            <Link href='/'>
                                <li className='py-4 text-sm'>Home</li>
                            </Link>
                            <Link href='/'>
                                <li className='py-4 text-sm'>About</li>
                            </Link>
                            <Link href='/'>
                                <li className='py-4 text-sm'>Skills</li>
                            </Link>
                            <Link href='/'>
                                <li className='py-4 text-sm'>Projects</li>
                            </Link>
                            <Link href='/'>
                                <li className='py-4 text-sm'>Contact</li>
                            </Link>
                        </ul>
                        <div className='pt-40'>
                            <p className='uppercase tracking-widest text-[#3475a8]'>Let's Connect!</p>
                            <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                                <div className='rounded-md shadow-lg shadow-gray-500 p-3 cursor-pointer hover:scale-105'>
                                    <FaLinkedin className='w-7 h-7' />
                                </div>
                                <div className='rounded-md shadow-lg shadow-gray-500 p-3 cursor-pointer hover:scale-105'>
                                    <FaGithub className='w-7 h-7'/>
                                </div>
                                <div className='rounded-md shadow-lg shadow-gray-500 p-3 cursor-pointer hover:scale-105'>
                                    <FaInstagram className='w-7 h-7'/>
                                </div>
                                <div className='rounded-md shadow-lg shadow-gray-500 p-3 cursor-pointer hover:scale-105'>
                                    <Image src='/assets/resume_icon.png' alt='resumeicon' width='25' height='25' className='w-7 h-7'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
