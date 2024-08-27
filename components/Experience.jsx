import Image from 'next/image'
import React from 'react'

const Experiences = () => {
  return (
    <div id='experience' className='w-full md:h-auto p-4 flex flex-col items-center py-16 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900'>
      <div className='max-w-[1240px] mx-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-3'>
          <p className='uppercase text-xl tracking-widest text-[#e94560]'>Experience</p>
          <h2 className='py-4 text-3xl md:text-4xl font-bold text-gray-300'>Where I've Worked</h2>
          <div className='space-y-8'>
            <div className='flex items-center p-4 rounded-lg bg-gray-600 shadow-md w-full'>
              <Image src='/assets/PharmaCCX.png' alt='PharmaCCX' width='64' height='64' className='rounded-full' />
              <div className='pl-4 ml-4'>
                <h3 className='text-2xl font-semibold text-gray-300'>Back-end Technology Intern</h3>
                <p className='text-gray-300'>PharmaCCX</p>
                <p className='text-gray-400'>June 2022 – Feb 2024</p>
                <ul className='mt-2 list-disc ml-4 text-gray-200'>
                  <li>Successfully performed API testing by designing and executing 200+ test cases, ensuring the functionality, data integrity, and
                    error handling of RESTful services.</li>
                  <li>Utilized tools such as Postman to streamline and automate the testing process, achieving a 50% decrease in manual testing
                    efforts.</li>
                  <li>Detected and reported 50+ defects and issues, using bug-tracking tools and data analysis, resulting in enhanced software
                    reliability.</li>
                </ul>
              </div>
            </div>
            <div className='flex items-center p-4 rounded-lg bg-gray-600 shadow-md w-full'>
              <Image src='/assets/SLC Image.jpg' alt='SLC' width='64' height='64' className='rounded-full' />
              <div className='pl-4 ml-4'>
                <h3 className='text-2xl font-semibold text-gray-300'>Teacher Assistant/Tutor, Introduction to Computer Science</h3>
                <p className='text-gray-300'>Sarah Lawrence College</p>
                <p className='text-gray-400'>Sept 2023 – Dec 2023</p>
                <ul className='mt-2 list-disc ml-4 text-gray-200'>
                  <li>Developed and adapted teaching styles to establish fundamental computer science principles and problem-solving techniques.</li>
                  <li>Provided support to students in introductory computer science courses, quickly finding and teaching an understanding for finding
                    bugs in students’ code.</li>
                </ul>
              </div>
            </div>
            <div className='flex items-center p-4 rounded-lg bg-gray-600 shadow-md w-full'>
              <Image src='/assets/SLC Image.jpg' alt='SLC' width='64' height='64' className='rounded-full' />
              <div className='pl-4 ml-4'>
                <h3 className='text-2xl font-semibold text-gray-200'>Computer Science Research Assistant</h3>
                <p className='text-gray-300'>Sarah Lawrence College</p>
                <p className='text-gray-400'>May 2023 – August 2023</p>
                <ul className='mt-2 ml-4 list-disc text-gray-200'>
                  <li>Developed a robust Python library for measuring and benchmarking the efficiency of Python language constructs and algorithms,
                    resulting in a 40% reduction in runtime for critical operations.</li>
                  <li>Revamped institution's course catalogue and scheduling using Python and Flask, creating an efficient web app. Enhanced student
                    registration experience, real-time updates, and intuitive search, improving overall user satisfaction and administrative processes.</li>
                  <li>Incorporated industry best practices and real-world examples into lab assignments, improving students' understanding of core
                    concepts and practical applications.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experiences