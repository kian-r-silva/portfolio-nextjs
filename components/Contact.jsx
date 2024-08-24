import React from 'react'
import contactImg from '../public/assets/contact.jpg'
import Image from 'next/image'
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";


const Contact = () => {
  return (
    <div id='contact' className='w-full lg:h-screen'>
        <div className='max-w-[1240px] m-auto px-2 py-16 w-full '>
            <p className='text-xl tracking-widest uppercase'>
                Contact
            </p>
            <h2 className='py-4'>Get In Touch</h2>
            <div className='grid lg:grid-cols-5 gap-8'>
                <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
                    <div className='lg:p-4 h-full '>
                        <div>
                            <Image
                            className='rounded-xl hover:scale-105 ease-in duration-300'
                            src={contactImg}
                            alt='/'
                            />
                        </div>
                        <div>
                            <h2 className='py-2'>Kian Silva</h2>
                            <p>Computer Science Student - Aspiring Software Developer</p>
                            <p className='py-4'>I am always looking for new opportunities to connect and am happy to take on more freelance positions! Please feel free to contact whenever.</p>
                        </div>
                    <div>
                        <p className='uppercase pt-8'>Connect With Me!</p>
                        <div className='flex items-center justify-between py-4 pt-4'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                            <FaLinkedin className='w-7 h-7' />
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                            <FaGithub className='w-7 h-7'/>
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                            <FaInstagram className='w-7 h-7'/>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
{/* right */}
            
            </div>
        </div>
    </div>
  )
}

export default Contact