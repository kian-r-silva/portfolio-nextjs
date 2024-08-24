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
        <div id='about' className='w-full md:h-auto p-2 flex flex-col items-center py-16'>
            <div className='max-w-[1240px] mx-auto md:grid grid-cols-3 gap-8'>
                <div className='col-span-2'>
                    <p className='uppercase text-xl tracking-widest'>About</p>
                    <h2 className='py-4'>Who I am</h2>
                    <p className='py-2 text-gray-600'>
                        I have an unyielding passion for technology and a deep desire to join a
                        forward-focused company. I want to be part of a team dedicated to making
                        a positive impact through innovative tech development. My journey in the
                        tech world has been all about exploring new horizons and finding ways to
                        harness technology for the greater good. I thrive in tight-knit communities
                        where collaboration is key. Working with a diverse group of talented individuals
                        is something I truly enjoy. I believe the best ideas come from collective brainstorming
                        and bringing different perspectives together. I'm always excited to meet new people and
                        try new things, so feel free to reach out and connect with me!
                    </p>
                </div>
                <div className='col-span-1 w-full h-auto m-auto flex items-center justify-center p-4'>
                    <Image src='/assets/KianSilvaProfPic.jpg' 
                        alt='profile pic'
                        width={500}
                        height={500}
                        className='object-cover rounded-lg'
                    />
                </div>
            </div>
            <div className='max-w-[1240px] mx-auto md:grid grid-cols-2 gap-8 items-center'>
                <div className='col-span-1'>
                    <h2 className='py-4'>How I Stay Busy</h2>
                    <ul className='list-disc list-inside space-y-4 text-gray-600'>
                        <li>
                            <strong>Soccer:</strong> As captain of the Sarah Lawrence Men's Soccer team for three exhilarating years, I thrived on the thrill of competition and the camaraderie of my teammates. My passion for soccer started young and has always been my go-to stress relief. Along the way, I earned four Defensive Player of the Week awards, the Rookie of the Year award, and a spot on the Skyline Conference honor roll three times. Along the way I also managed to break three program records in goalkeeping. Now, I enjoy giving back through one-on-one youth coaching with some of my former teammates. And yes, I'm a die-hard Barcelona fan – Forca Barca!
                        </li>
                        <li>
                            <strong>Volleyball:</strong> I discovered volleyball on a whim and it quickly became a new passion. Playing for Sarah Lawrence's Division 3 team for two years, I not only had a blast but also broke two program records and earned the Coaches Award and a Skyline Conference honor roll spot. Volleyball taught me the joy of trying new things and excelling in unexpected arenas.
                        </li>
                        <li>
                            <strong>Ski Club President:</strong> As president of Sarah Lawrence's ski and snowboard club, I organized epic ski trips that brought together students of all skill levels to share the thrill of the slopes. It was all about creating unforgettable experiences and fostering a love for winter sports.
                        </li>
                        <li>
                            <strong>SAAC Member:</strong> Serving on the Student Athlete Advisory Committee (SAAC), I ensured my teammates' voices were heard. We planned awesome events like barbecues and themed games to boost school spirit and bring the campus community together.
                        </li>
                        <li>
                            <strong>Athletics DEI Member:</strong> On the Athletics Diversity, Equity, and Inclusion (DEI) committee, I worked to promote equal representation and create a welcoming environment for all athletes. We organized events to celebrate diversity and make everyone feel at home in our athletic department.
                        </li>
                        <li>
                            <strong>Movies and TV:</strong> I'm a huge fan of movies and TV shows, with a special place in my heart for anything Christopher Nolan directs. My all-time favorite show is "Avatar: The Last Airbender." I love discussing films and series, and I'm always on the lookout for the next great watch.
                        </li>
                    </ul>
                </div>
                <div className='col-span-1 justify-center items-center'>
                    <Slideshow images={images} interval={3000} />
                </div>
            </div>
        </div>
    );
};

export default About;
