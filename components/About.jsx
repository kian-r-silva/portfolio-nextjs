"use client";

import React from 'react';
import Image from 'next/image';
import Slideshow from './Slideshow';

const About = () => { 
    const images = [
        { src: '/assets/Soccer.jpg', alt: 'Soccer' },
        { src: '/assets/Volleyball.jpg', alt: 'Volleyball' },
        { src: '/assets/skiClub.jpg', alt: 'Ski Club' },
        { src: '/assets/Friends.jpg', alt: 'Friends' },
        { src: '/assets/VolleyballFriend.jpg', alt: 'Volleyball Friends' },
    ];

    return (
        <div id='about' className='w-full md:h-auto p-4 flex flex-col items-center py-16 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900'>
            <div className='max-w-[1240px] mx-auto md:grid grid-cols-3 gap-8'>
                <div className='col-span-2'>
                    <p className='uppercase text-xl tracking-widest text-[#e94560]'>About</p>
                    <h2 className='py-4 text-3xl md:text-4xl font-bold text-gray-400'>Who I am</h2>
                    <p className='py-4 text-lg text-gray-300 bg-gray-600 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300'>
                    I have an unyielding passion for technology and a deep desire to join a forward-focused company where I can continue growing and 
                    learning new skills. I want to be part of a team dedicated to making a positive impact through innovative tech development. My journey 
                    in the tech world has been all about exploring new horizons and finding ways to harness technology for the greater good. I thrive in 
                    tight-knit communities where collaboration is key, and I enjoy working with a diverse group of talented individuals. Being bilingual in 
                    Spanish, I'm particularly open to working with teams from different backgrounds, as I believe the best ideas come from collective brainstorming 
                    and bringing diverse perspectives together. I'm always excited to meet new people and try new things, so feel free to reach out and connect 
                    with me!
                    </p>
                </div>
                <div className='col-span-1 w-full h-auto m-auto flex items-center justify-center p-4'>
                    <Image src='/assets/KianSilvaProfPic.jpg' 
                        alt='profile pic'
                        width={500}
                        height={500}
                        className='object-cover rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300'
                    />
                </div>
            </div>
            <div className='max-w-[1240px] mx-auto md:grid grid-cols-2 gap-8 items-center mt-12'>
                <div className='col-span-1'>
                    <h2 className='py-4 text-3xl md:text-4xl font-bold text-gray-400'>How I Stay Busy</h2>
                    <ul className='text-md list-disc list-inside space-y-4 text-gray-300 bg-gray-600 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300'>
                        <li>
                            <strong>Soccer:</strong> As captain of the Sarah Lawrence Men's Soccer team for three amazing years, I thrived on the excitement of competition and the 
                            close bond with my teammates. Soccer has been a passion of mine since I was young, and it's always been my go-to way to unwind. Over the years, I earned 
                            four Defensive Player of the Week awards, the Rookie of the Year award, and a spot on the Skyline Conference honor roll three times. I also managed to 
                            break three program records in goalkeeping. Now, I love giving back by coaching youth soccer one-on-one with some of my former teammates. And yes, I'm 
                            a die-hard Barcelona fan – Força Barça!
                        </li>
                        <li>
                            <strong>Volleyball:</strong>I discovered volleyball on a whim, and it quickly became a new passion. Playing for Sarah Lawrence's Division 3 team for 
                            two years was an absolute blast. During that time, I broke two program records and earned the Coaches Award along with a spot on the Skyline Conference
                             honor roll. Volleyball showed me the joy of trying new things and excelling in unexpected arenas.
                        </li>
                        <li>
                            <strong>Ski Club President:</strong> As president of Sarah Lawrence's ski and snowboard club, I organized amazing ski trips that brought together students
                             of all skill levels to enjoy the thrill of the slopes. It was all about creating unforgettable experiences and sharing a love for winter sports.
                        </li>
                        <li>
                            <strong>SAAC Member:</strong> Serving on the Student Athlete Advisory Committee (SAAC), I made sure my teammates' voices were heard. We organized fun events 
                            like barbecues and themed games to boost school spirit and bring the campus community together.
                        </li>
                        <li>
                            <strong>Athletics DEI Member:</strong> On the Athletics Diversity, Equity, and Inclusion (DEI) committee, I worked to promote equal representation and create 
                            a welcoming environment for all athletes. We organized events to celebrate diversity and ensure everyone felt at home in our athletic department.
                        </li>
                        <li>
                            <strong>Movies and TV:</strong> I'm a huge fan of movies and TV shows, especially anything directed by Christopher Nolan. My all-time favorite show is 
                            "Avatar: The Last Airbender." I love talking about films and series, and I'm always on the lookout for my next great watch.
                        </li>
                    </ul>
                </div>
                <div className='col-span-1 justify-center items-center mt-8 md:mt-0'>
                    <Slideshow images={images} interval={3000} />
                </div>
            </div>
        </div>
    );
};

export default About;
