"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { RiCloseFill, RiMenuFill } from "react-icons/ri";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { PiReadCvLogoLight } from "react-icons/pi";
import Image from 'next/image';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);
    const [navBg, setNavBg] = useState('#111827');
    const [linkColor, setLinkColor] = useState('#e94560');

    const handleNav = () => {
        setNav(!nav);
    }

    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 90) {
                setShadow(true);
            } else {
                setShadow(false);
            }
        }
        window.addEventListener('scroll', handleShadow);
        return () => {
            window.removeEventListener('scroll', handleShadow);
        };
    }, []);

    return (
        <div style={{ backgroundColor: `${navBg}` }} className={`${shadow ? 'shadow-xl shadow-gray-900' : ''} fixed w-full h-20 z-[100]`}>
            <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
                <Link href='/#home'>
                    <Image src="/assets/KianSilvaIcon.png" alt="KianSilvaIcon" width={75} height={50} />
                </Link>
                <div>
                    <ul style={{ color: `${linkColor}` }} className='hidden md:flex'>
                        <Link href='/#home'>
                            <li className='ml-10 text-sm uppercase hover:border-b hover:border-[#e94560] transition duration-300'>Home</li>
                        </Link>
                        <Link href='/#about'>
                            <li className='ml-10 text-sm uppercase hover:border-b hover:border-[#e94560] transition duration-300'>About</li>
                        </Link>
                        <Link href='/#skills'>
                            <li className='ml-10 text-sm uppercase hover:border-b hover:border-[#e94560] transition duration-300'>Skills</li>
                        </Link>
                        <Link href='/#projects'>
                            <li className='ml-10 text-sm uppercase hover:border-b hover:border-[#e94560] transition duration-300'>Projects</li>
                        </Link>
                        <Link href='/#contact'>
                            <li className='ml-10 text-sm uppercase hover:border-b hover:border-[#e94560] transition duration-300'>Contact</li>
                        </Link>
                    </ul>
                    <div style={{ color: `${linkColor}` }} onClick={handleNav} className='md:hidden'>
                        <RiMenuFill size={25} />
                    </div>
                </div>
            </div>

            <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-gray-900/80' : ''}>
                <div className={nav ? 'md:hidden fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-gray-900 text-gray-300 p-10 ease-in duration-500' : 'fixed left-[-100%] p-10 ease-in duration-500'}>
                    <div className='flex w-full items-center justify-between'>
                        <Link href='/'>
                            <Image src="/assets/KianSilvaIcon.png" alt="KianSilvaIcon" width={100} height={50} />
                        </Link>
                        <div onClick={handleNav} className='p-3 cursor-pointer'>
                            <RiCloseFill size={20} />
                        </div>
                    </div>
                    <div className='border-b border-gray-600 my-4'>
                        <p className='w-[85%] md:w-[90%] py-4 text-[20px]'>Welcome to my portfolio!</p>
                    </div>
                    <div className='py-4 flex flex-col'>
                        <ul className='uppercase'>
                            <Link href='/#home'>
                                <li onClick={() => setNav(false)} className='py-4 text-sm hover:text-[#e94560] transition duration-300'>Home</li>
                            </Link>
                            <Link href='/#about'>
                                <li onClick={() => setNav(false)} className='py-4 text-sm hover:text-[#e94560] transition duration-300'>About</li>
                            </Link>
                            <Link href='/#skills'>
                                <li onClick={() => setNav(false)} className='py-4 text-sm hover:text-[#e94560] transition duration-300'>Skills</li>
                            </Link>
                            <Link href='/#projects'>
                                <li onClick={() => setNav(false)} className='py-4 text-sm hover:text-[#e94560] transition duration-300'>Projects</li>
                            </Link>
                            <Link href='/#contact'>
                                <li onClick={() => setNav(false)} className='py-4 text-sm hover:text-[#e94560] transition duration-300'>Contact</li>
                            </Link>
                        </ul>
                        <div className='pt-40'>
                            <p className='uppercase tracking-widest text-[#e94560]'>Let's Connect!</p>
                            <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                                <a href='https://www.linkedin.com/in/kian-silva-/' target='_blank' rel='noopener noreferrer'>
                                    <div className='rounded-full shadow-lg shadow-gray-900 bg-gray-700 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                                        <FaLinkedin className='w-8 h-8 text-[#e94560]' />
                                    </div>
                                </a>
                                <a href='https://github.com/kian-r-silva' target='_blank' rel='noopener noreferrer'>
                                    <div className='rounded-full shadow-lg shadow-gray-900 bg-gray-700 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                                        <FaGithub className='w-8 h-8 text-[#e94560]' />
                                    </div>
                                </a>
                                <a href='https://www.instagram.com/kian.silva/' target='_blank' rel='noopener noreferrer'>
                                    <div className='rounded-full shadow-lg shadow-gray-900 bg-gray-700 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                                        <FaInstagram className='w-8 h-8 text-[#e94560]' />
                                    </div>
                                </a>
                                <a href='/Kian Silva Resume 2024.pdf' target='_blank' rel='noopener noreferrer'>
                                    <div className='rounded-full shadow-lg shadow-gray-900 bg-gray-700 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                                        <PiReadCvLogoLight className='w-8 h-8 text-[#e94560]' />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
