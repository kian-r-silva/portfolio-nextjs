import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { RiRadioButtonFill } from 'react-icons/ri';

const F1_Sched = () => {
    return (
        <div className='w-full'>
            <div className='w-screen h-[30vh] lg:h-[40vh] relative '>
                <div className='absolute top-0 left-0 w-full h-full bg-black/70 z-10' />
                <Image
                    src='/assets/projects/Simulated Annealing.jpg'
                    alt='SLC Course System'
                    layout='fill'
                    objectFit='cover'
                    className='absolute z-0'
                />
                <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                    <h2 className='py-2 text-2xl font-bold'>Flow Soccer</h2>
                    <h3 className='text-lg'>SquareSpace / Liquid HTMl </h3>
                </div>
            </div>
            <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 '>
                <div className='col-span-4'>
                    <p>Project</p>
                    <h2>Overview</h2>
                    <p>I undertook this project to support a friend's youth coaching business, designing a platform that blends modern web design with practical functionality. Built 
                        on Squarespace, I leveraged custom HTML and Liquid code to create a seamless, user-friendly space where coaches and players can connect, learn, and grow together.
                        Every aspect of the design, including the logo, was crafted by me. As I continue to develop my design skills, I aim to rebuild this website 
                        independently from Squarespace, further enhancing its features and functionality in the coming year.
                        
                    </p>
                    <button className='px-8 py-2 mt-4 mr-8'>Site</button>
                </div>
                <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl'>
                    <div className='p-2'>
                        <p className='text-center font-bold pb-2'>Technologies</p>
                        <div className='grid grid-cols-3 md:grid-cols-1'>
                            <p className='text-gray-600 py-2 flex item-center'><RiRadioButtonFill className='pr-1' /> SquareSpace</p>
                            <p className='text-gray-600 py-2 flex item-center'><RiRadioButtonFill className='pr-1' /> Liquid</p>
                            <p className='text-gray-600 py-2 flex item-center'><RiRadioButtonFill className='pr-1' /> HTML</p>
                            <p className='text-gray-600 py-2 flex item-center'><RiRadioButtonFill className='pr-1' /> Adobe Illustrator</p>

                        </div>
                    </div>
                </div>
                <Link href='/#projects'>
                    <p className='underline cursor-pointer'>Back</p>
                </Link>
            </div>
        </div>
    );
}

export default F1_Sched;
