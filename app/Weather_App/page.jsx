import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { RiRadioButtonFill } from 'react-icons/ri';

const Weather_App = () => {
    return (
        <div className='w-full h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300'>
            <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
                <div className='absolute top-0 left-0 w-full h-full bg-gray-900/70 z-10' />
                <Image
                    src='/assets/projects/React_WeatherApp.jpg'
                    alt='Weather_App'
                    layout='fill'
                    objectFit='cover'
                    className='absolute z-0'
                />
                <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                    <h2 className='py-2 text-2xl lg:text-4xl font-bold'>React Weather App</h2>
                    <h3 className='text-lg lg:text-xl font-light'>React / JavaScript </h3>
                </div>
            </div>
            <div className='max-w-[1240px] mx-auto p-4 md:p-8 grid md:grid-cols-5 gap-8 '>
                <div className='col-span-4'>
                    <p className='text-[#e94560] uppercase tracking-wider text-sm font-bold'>Project</p>
                    <h2 className='text-2xl lg:text-3xl font-bold'>Overview</h2>
                    <p className='text-gray-300 mt-4'>One of the significant projects I’ve worked on is a weather application that began as a proof of concept in working with APIs during the summer of my freshman year at Sarah Lawrence Collge. This project was part of an internship with PharmaCCX, where I aimed to gain practical experience with APIs and ensured the end-to-end connection of their platforms APIs. The initial goal was to understand how to fetch and display weather data from external sources.

                        The app utilizes the OpenWeatherAPI to provide weather information. While the application generally performs well, it does encounter occasional errors when searching for specific cities. Despite these issues, the app effectively showcases its intended functionality and has been enhanced with various style adjustments and minor improvements over time.

                    </p>
                    <a href='https://github.com/kian-r-silva/WeatherApp' target='_blank' rel='noopener noreferrer'>
                        <button className='px-8 py-2 mt-4 text-white bg-[#e94560] rounded-lg shadow-md hover:bg-[#d22c4d] hover:shadow-lg transition duration-300'>
                            View Code
                        </button>
                    </a>
                </div>
                <div className='col-span-4 md:col-span-1 bg-gray-900 text-gray-300 shadow-xl shadow-gray-800 rounded-xl'>
                    <div className='p-4'>
                        <p className='text-center font-bold pb-2'>Technologies</p>
                        <div className='grid grid-cols-3 md:grid-cols-1 gap-2'>
                            <p className='text-gray-400 py-2 flex items-center'><RiRadioButtonFill className='pr-2 text-[#e94560]' /> React</p>
                            <p className='text-gray-400 py-2 flex items-center'><RiRadioButtonFill className='pr-2 text-[#e94560]' /> JavaScript</p>
                            <p className='text-gray-400 py-2 flex items-center'><RiRadioButtonFill className='pr-2 text-[#e94560]' /> React Router DOM </p>
                            <p className='text-gray-400 py-2 flex items-center'><RiRadioButtonFill className='pr-2 text-[#e94560]' />  OpenWeather API</p>

                        </div>
                    </div>
                </div>
                <Link href='/#projects'>
                    <p className='text-[#e94560] underline cursor-pointer hover:text-[#d22c4d] transition duration-300'>Back</p>
                </Link>
            </div>
        </div>
    );
}

export default Weather_App;
