import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { RiRadioButtonFill } from 'react-icons/ri';

const SLCCoursePage = () => {
  return (
    <div className='w-full h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-full bg-gray-900/70 z-10' />
        <Image
          src='/assets/projects/SLC-CourseSystem.jpg'
          alt='SLC Course System'
          layout='fill'
          objectFit='cover'
          className='absolute z-0'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2 text-2xl lg:text-4xl font-bold'>Sarah Lawrence College Course Selection System</h2>
          <h3 className='text-lg lg:text-xl font-light'>Java / HTML</h3>
        </div>
      </div>
      <div className='max-w-[1240px] mx-auto p-4 md:p-8 grid md:grid-cols-5 gap-8 '>
        <div className='col-span-4'>
          <p className='text-[#e94560] uppercase tracking-wider text-sm font-bold'>Project</p>
          <h2 className='text-2xl lg:text-3xl font-bold'>Overview</h2>
          <p className='text-gray-300 mt-4'>As part of my Summer Science program at Sarah Lawrence College, I had the opportunity to work on various projects under the guidance of Mike Siff and Jim Marshall. One of my projects involved recreating the Sarah Lawrence course selection system in Python using the pandas library. Although functional, the initial version was unorganized and inefficient. During the last semester, I decided to redo this project in Java, focusing on an object-oriented approach to create a more efficient solution for building student schedules at Sarah Lawrence College.

            Sarah Lawrence courses follow a unique structure, with a typical fifteen-credit semester divided into three five-credit courses, each with multiple meeting times, including mandatory sessions, group conferences, and labs. The complexity of determining which courses fit into a student's schedule necessitated the development of a course scheduling system.

            I started by extracting course data from the mySLC course catalog and processing it into a text file, which served as the foundation for creating CourseBlock objects in my program. These objects store detailed information about each course and its meeting times, enabling the program to organize and manage the data effectively.

            The program's core functionality includes searching for courses, adding and removing courses from a schedule, and checking for conflicts between courses. The conflictCheck method ensures that a student's schedule is free of conflicts by comparing course meeting times, days, and other relevant factors. While the system works well for the majority of cases, I acknowledge that it may not handle every possible scenario perfectly.

            To enhance the user experience and provide a visual representation of the constructed schedule, I developed a very rough graphical user interface (GUI) in Java. The GUI was designed primarily as a simple means of displaying the schedule, making it easier to interact with than a terminal interface.

            Ultimately, the school recognized the value of the algorithm and decided to take it on, modifying it to better fit their specific needs. This project allowed me to apply the concepts learned in my Data Structures and Algorithms course, resulting in a more efficient and organized course scheduling system.
          </p>
          <a href='https://github.com/kian-r-silva/Sarah-Lawrence-Schedule' target='_blank' rel='noopener noreferrer'>
            <button className='px-8 py-2 mt-4 text-white bg-[#e94560] rounded-lg shadow-md hover:bg-[#d22c4d] hover:shadow-lg transition duration-300'>
              View Code
            </button>
          </a>
        </div>
        <div className='col-span-4 md:col-span-1 bg-gray-900 text-gray-300 shadow-xl shadow-gray-800 rounded-xl'>
          <div className='p-4'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1 gap-2'>
              <p className='text-gray-400 py-2 flex items-center'><RiRadioButtonFill className='pr-2 text-[#e94560]' /> Java</p>
              <p className='text-gray-400 py-2 flex items-center'><RiRadioButtonFill className='pr-2 text-[#e94560]' /> HTML</p>
              <p className='text-gray-400 py-2 flex items-center'><RiRadioButtonFill className='pr-2 text-[#e94560]' /> Jsoup</p>
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

export default SLCCoursePage;
