import Image from 'next/image';
import React from 'react';

const Skills = () => {
    return (
        <div className='w-full lg:h-screen p-2'>
            <div className='max-w[1240px] justify-center h-full'>
                <p className='text-xl tracking-widest uppercase'>Skills</p>
                <h2 className='py-4'>What I Can Do</h2>
                <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>

                    <div className='p-6 shadow-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src='/assets/skills/html.png' width='64' height='64' alt='/'></Image>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>HTML</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src='/assets/skills/css.png' width='64' height='64' alt='CSS' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>CSS</h3>
                            </div>
                        </div>
                    </div>


                    <div className='p-6 shadow-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src='/assets/skills/javascript.png' width='64' height='64' alt='JavaScript' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>JavaScript</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src='/assets/skills/python.png' width='64' height='64' alt='Python' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Python</h3>
                            </div>
                        </div>
                    </div>


                    <div className='p-6 shadow-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src='/assets/skills/java.png' width='64' height='64' alt='Java' />

                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Java</h3>
                            </div>
                        </div>
                    </div>


                    <div className='p-6 shadow-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src='/assets/skills/nextjs.png' width='64' height='64' alt='nextJs' />

                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>NextJS</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src='/assets/skills/pandas.png' width='64' height='64' alt='pandas' />

                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Pandas</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src='/assets/skills/react.png' width='64' height='64' alt='react' />

                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>React</h3>
                            </div>
                        </div>
                    </div>


                    <div className='p-6 shadow-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src='/assets/skills/docker.png' width='64' height='64' alt='Docker' />

                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Docker</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src='/assets/skills/aws.png' width='64' height='64' alt='AWS' />

                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>AWS</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src='/assets/skills/node.png' width='64' height='64' alt='nodeJS' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>NodeJS</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src='/assets/skills/tailwind.png' width='64' height='64' alt='Tailwind' />

                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Tailwind</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Skills;
