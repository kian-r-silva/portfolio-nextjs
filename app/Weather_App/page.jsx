import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { RiRadioButtonFill } from 'react-icons/ri';

const Weather_App = () => {
    return (
        <div className='w-full'>
            <div className='w-screen h-[30vh] lg:h-[40vh] relative '>
                <div className='absolute top-0 left-0 w-full h-full bg-black/70 z-10' />
                <Image
                    src='/assets/projects/React_WeatherApp.jpg'
                    alt='Weather_App'
                    layout='fill'
                    objectFit='cover'
                    className='absolute z-0'
                />
                <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                    <h2 className='py-2 text-2xl font-bold'>React Weather App</h2>
                    <h3 className='text-lg'>React / JavaScript </h3>
                </div>
            </div>
            <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 '>
                <div className='col-span-4'>
                    <p>Project</p>
                    <h2>Overview</h2>
                    <p>AOne of the significant projects I’ve worked on is a weather application that began as a proof of concept in working with APIs during the summer of my freshman year at Sarah Lawrence Collge. This project was part of an internship with PharmaCCX, where I aimed to gain practical experience with APIs and ensured the end-to-end connection of their platforms APIs. The initial goal was to understand how to fetch and display weather data from external sources.

                        The app utilizes the OpenWeatherAPI to provide weather information. While the application generally performs well, it does encounter occasional errors when searching for specific cities. Despite these issues, the app effectively showcases its intended functionality and has been enhanced with various style adjustments and minor improvements over time.

                    </p>
                    <button className='px-8 py-2 mt-4 mr-8'>Code</button>
                </div>
                <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl'>
                    <div className='p-2'>
                        <p className='text-center font-bold pb-2'>Technologies</p>
                        <div className='grid grid-cols-3 md:grid-cols-1'>
                            <p className='text-gray-600 py-2 flex item-center'><RiRadioButtonFill className='pr-1' /> React</p>
                            <p className='text-gray-600 py-2 flex item-center'><RiRadioButtonFill className='pr-1' /> JavaScript</p>
                            <p className='text-gray-600 py-2 flex item-center'><RiRadioButtonFill className='pr-1' /> React Router DOM </p>
                            <p className='text-gray-600 py-2 flex item-center'><RiRadioButtonFill className='pr-1' />  OpenWeather API</p>

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

export default Weather_App;
