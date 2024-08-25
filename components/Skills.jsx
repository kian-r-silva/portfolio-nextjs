"use client";

import Image from 'next/image';
import React from 'react';

const Skills = () => {
    return (
        <div id='skills' className='w-full md:h-auto p-4 flex flex-col items-center py-16 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300'>
            <div className='max-w-[1240px] mx-auto md:grid grid-cols-3 gap-8'>
                <div className='col-span-3'>
                    <p className='uppercase text-xl tracking-widest text-[#e94560]'>Skills</p>
                    <h2 className='py-4 text-3xl md:text-4xl font-bold'>What I Can Do</h2>
                </div>
                <div className='col-span-3 grid grid-cols-2 lg:grid-cols-4 gap-8'>

                    <div className='p-6 shadow-lg bg-gray-600 rounded-lg hover:scale-105 hover:shadow-2xl ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src='/assets/skills/html.png' width='64' height='64' alt='HTML' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3 className='text-gray-300'>HTML</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-lg bg-gray-600 rounded-lg hover:scale-105 hover:shadow-2xl ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src='/assets/skills/css.png' width='64' height='64' alt='CSS' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3 className='text-gray-300'>CSS</h3>
                            </div>
                        </div>
                    </div>


                    <div className='p-6 shadow-lg bg-gray-600 rounded-lg hover:scale-105 hover:shadow-2xl ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src='/assets/skills/javascript.png' width='64' height='64' alt='JavaScript' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3 className='text-gray-300'>JavaScript</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-lg bg-gray-600 rounded-lg hover:scale-105 hover:shadow-2xl ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src='/assets/skills/python.png' width='64' height='64' alt='Python' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3 className='text-gray-300'>Python</h3>
                            </div>
                        </div>
                    </div>


                    <div className='p-6 shadow-lg bg-gray-600 rounded-lg hover:scale-105 hover:shadow-2xl ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src='/assets/skills/java.png' width='64' height='64' alt='Java' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3 className='text-gray-300'>Java</h3>
                            </div>
                        </div>
                    </div>


                    <div className='p-6 shadow-lg bg-gray-600 rounded-lg hover:scale-105 hover:shadow-2xl ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src='/assets/skills/nextjs.png' width='64' height='64' alt='NextJS' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3 className='text-gray-300'>NextJS</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-lg bg-gray-600 rounded-lg hover:scale-105 hover:shadow-2xl ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src='/assets/skills/pandas.png' width='64' height='64' alt='Pandas' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3 className='text-gray-300'>Pandas</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-lg bg-gray-600 rounded-lg hover:scale-105 hover:shadow-2xl ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src='/assets/skills/react.png' width='64' height='64' alt='React' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3 className='text-gray-300'>React</h3>
                            </div>
                        </div>
                    </div>


                    <div className='p-6 shadow-lg bg-gray-600 rounded-lg hover:scale-105 hover:shadow-2xl ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src='/assets/skills/docker.png' width='64' height='64' alt='Docker' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3 className='text-gray-300'>Docker</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-lg bg-gray-600 rounded-lg hover:scale-105 hover:shadow-2xl ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src='/assets/skills/aws.png' width='64' height='64' alt='AWS' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3 className='text-gray-300'>AWS</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-lg bg-gray-600 rounded-lg hover:scale-105 hover:shadow-2xl ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src='/assets/skills/node.png' width='64' height='64' alt='NodeJS' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3 className='text-gray-300'>NodeJS</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-lg bg-gray-600 rounded-lg hover:scale-105 hover:shadow-2xl ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src='/assets/skills/tailwind.png' width='64' height='64' alt='Tailwind' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3 className='text-gray-300'>Tailwind</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
