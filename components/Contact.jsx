import React from 'react';
import contactImg from '../public/assets/contact.jpg';
import Image from 'next/image';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import Link from 'next/link';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';

const Contact = () => {
  return (
    <div id='contact' className='w-full h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300 lg:h-screen'>
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
        <p className='text-xl text-[#e94560] tracking-widest uppercase'>Contact</p>
        <h2 className='py-4'>Get In Touch</h2>
        <div className='grid lg:grid-cols-5 gap-8'>
          <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-900 bg-gray-600 rounded-xl p-4'>
            <div className='lg:p-4 h-full'>
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
                <p className='py-4'>
                  I am always looking for new opportunities to connect and am happy to take on more freelance positions! Please feel free to contact whenever.
                </p>
              </div>
              <div>
                <p className='uppercase pt-8'>Connect With Me!</p>
                <div className='flex items-center justify-between py-4'>
                  <div className='rounded-full shadow-lg  shadow-gray-900 p-3 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <FaLinkedin className='w-7 h-7' />
                  </div>
                  <div className='rounded-full shadow-lg  shadow-gray-900 p-3 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <FaGithub className='w-7 h-7' />
                  </div>
                  <div className='rounded-full shadow-lg  shadow-gray-900 p-3 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <FaInstagram className='w-7 h-7' />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-span-3 w-full h-auto rounded-xl shadow-xl shadow-gray-900 bg-gray-600 lg:p-4'>
            <div className='p-4'>
              <form>
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                  <div className='flex flex-col'>
                    <label className='uppercase text-small'>Name</label>
                    <input type='text' className='border-2 rounded-lg p-3 flex border-gray-200' />
                  </div>
                  <div className='flex flex-col'>
                    <label className='uppercase text-small'>Phone Number</label>
                    <input type='text' className='border-2 rounded-lg p-3 flex border-gray-200' />
                  </div>
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-small'>Email</label>
                  <input type='email' className='border-2 rounded-lg p-3 flex border-gray-200' />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-small'>Subject</label>
                  <input type='text' className='border-2 rounded-lg p-3 flex border-gray-200' />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-small'>Message</label>
                  <textarea className='border-2 rounded-lg p-3 border-gray-200' rows='10'></textarea>
                </div>
                <button className='w-full p-4 text-white bg-[#e94560] mt-4 rounded-lg hover:bg-[#d22c4d] transition duration-300 ease-in-out'>
                    Send Message
                </button>

              </form>
            </div>
          </div>
        </div>
        <div className='flex justify-center py-12'>
          <Link href='/'>
            <div className='rounded-full shadow-lg  shadow-gray-900 bg-gray-600 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
              <HiOutlineChevronDoubleUp className='text-[#e94560]' size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
