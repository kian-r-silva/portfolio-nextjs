import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { RiRadioButtonFill } from 'react-icons/ri';

const SLCCoursePage = () => {
  return (
    <div className='w-full min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300'>
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
          <p className='text-gray-300 mt-4'>During my Summer Science program at Sarah Lawrence College, I worked on various projects with Mike Siff
            and Jim Marshall. One key project involved recreating the Sarah Lawrence course selection system. Initially done in Python with pandas, the
            system was functional but lacked efficiency.</p>
          <p className='text-gray-300 mt-4'>
            In my final semester, I revamped the project in Java using an object-oriented approach. This new system aimed to manage the complex scheduling
            needs of Sarah Lawrence's unique course structure, which includes multiple meeting times for each five-credit course. </p>
          <p className='text-gray-300 mt-4'>
            I extracted course data from the mySLC catalog and processed it into a text file. This data formed the basis for creating CourseBlock objects,
            which store detailed course information. The system includes features for searching courses, managing schedules, and checking for conflicts.
          </p>
          <p className='text-gray-300 mt-4'>
            While the system works well overall, I also developed a basic graphical user interface (GUI) in Java to improve user interaction. The school
            found the algorithm valuable and adapted it to their needs. This project allowed me to apply concepts from my Data Structures and Algorithms
            course, resulting in a more efficient scheduling system.
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
