import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { RiRadioButtonFill } from 'react-icons/ri';

const F1_Sched = () => {
    return (
        <div className='w-full h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300'>
            <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
                <div className='absolute top-0 left-0 w-full h-full bg-gray-900/70 z-10' />
                <Image
                    src='/assets/projects/Simulated Annealing.jpg'
                    alt='Formula 1 Schedule Optimization'
                    layout='fill'
                    objectFit='cover'
                    className='absolute z-0'
                />
                <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                    <h2 className='py-2 text-2xl lg:text-4xl font-bold'>Formula 1 Schedule Optimization Using Simulated Annealing</h2>
                    <h3 className='text-lg lg:text-xl font-light'>Python</h3>
                </div>
            </div>

            <div className='max-w-[1240px] mx-auto p-4 md:p-8 grid md:grid-cols-5 gap-8 '>
                <div className='col-span-4'>
                    <p className='text-[#e94560] uppercase tracking-wider text-sm font-bold'>Project</p>
                    <h2 className='text-2xl lg:text-3xl font-bold'>Overview</h2>
                    <p className='text-gray-300 mt-4'>
                        This is my Calculus II conference project, created at Sarah Lawrence College for Ross Parker's class. This semester-long research project allowed me to explore my interests in optimization algorithms while applying key concepts learned throughout the course.

                        Formula One Racing is a unique sport that combines advanced engineering and exceptional driving skills. Each year, teams must design and develop a new car, focusing on innovations in areas like aerodynamics and engine efficiency. Recently, the sport has been transitioning to more eco-friendly hybrid engines. However, despite these advancements, the sport's global travel schedule is inefficient, causing unnecessary carbon emissions and financial strain on teams.

                        To address this, I explored optimizing the Formula One calendar using the Simulated Annealing algorithm, which is inspired by the metallurgical process of heating and cooling materials to eliminate impurities. This algorithm helps find a near-optimal travel route by gradually refining solutions through random exploration and systematic cooling.

                        By applying Simulated Annealing, I was able to reduce the total travel distance by over 94,000 kilometers, making the season more cost-effective and environmentally friendly. This optimization could lead to more efficient transportation methods and reduced expenses for Formula One teams, ultimately enhancing the competition and sustainability of the sport.
                    </p>
                    <a href='https://github.com/kian-r-silva/Simulated-Annealing/' target='_blank' rel='noopener noreferrer'>
                        <button className='px-8 py-2 mt-4 text-white bg-[#e94560] rounded-lg shadow-md hover:bg-[#d22c4d] hover:shadow-lg transition duration-300'>
                            View Code
                        </button>
                    </a>
                </div>
                <div className='col-span-4 md:col-span-1 bg-gray-900 text-gray-300 shadow-xl shadow-gray-800 rounded-xl'>
                    <div className='p-4'>
                        <p className='text-center font-bold pb-2'>Technologies</p>
                        <div className='grid grid-cols-3 md:grid-cols-1 gap-2'>
                            <p className='text-gray-400 py-2 flex items-center'><RiRadioButtonFill className='pr-2 text-[#e94560]' /> Python</p>
                            <p className='text-gray-400 py-2 flex items-center'><RiRadioButtonFill className='pr-2 text-[#e94560]' /> NumPy</p>
                            <p className='text-gray-400 py-2 flex items-center'><RiRadioButtonFill className='pr-2 text-[#e94560]' /> GeoPy</p>
                            <p className='text-gray-400 py-2 flex items-center'><RiRadioButtonFill className='pr-2 text-[#e94560]' /> Plotly</p>
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

export default F1_Sched;
