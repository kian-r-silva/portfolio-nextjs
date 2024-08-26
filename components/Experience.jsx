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
                <p className='mt-2 text-gray-200'>
                  I successfully conducted API testing by designing and executing over 200 test cases, ensuring the functionality, data integrity,
                  and error handling of RESTful services. I utilized tools like Postman to streamline and automate the testing process, reducing
                  manual efforts by 50%. My work also involved detecting and reporting more than 50 defects, using bug-tracking tools and data
                  analysis, which contributed to improved software reliability.
                </p>
              </div>
            </div>
            <div className='flex items-center p-4 rounded-lg bg-gray-600 shadow-md w-full'>
              <Image src='/assets/SLC Image.jpg' alt='SLC' width='64' height='64' className='rounded-full' />
              <div className='pl-4 ml-4'>
                <h3 className='text-2xl font-semibold text-gray-300'>Teacher Assistant/Tutor, Introduction to Computer Science</h3>
                <p className='text-gray-300'>Sarah Lawrence College</p>
                <p className='text-gray-400'>Sept 2023 – Dec 2023</p>
                <p className='mt-2 text-gray-200'>
                  Adapted teaching methods to establish core computer science principles and problem-solving skills. Provided support in intro courses,
                  effectively guiding students in debugging their code.
                </p>
              </div>
            </div>
            <div className='flex items-center p-4 rounded-lg bg-gray-600 shadow-md w-full'>
              <Image src='/assets/SLC Image.jpg' alt='SLC' width='64' height='64' className='rounded-full' />
              <div className='pl-4 ml-4'>
                <h3 className='text-2xl font-semibold text-gray-200'>Computer Science Research Assistant</h3>
                <p className='text-gray-300'>Sarah Lawrence College</p>
                <p className='text-gray-400'>May 2023 – August 2023</p>
                <p className='mt-2 text-gray-200'>
                  Developed a Python library to benchmark efficiency, cutting runtime by 40%. Revamped course selection system with a Python/Flask web app,
                  enhancing student registration and user satisfaction. Integrated industry practices into labs, boosting student comprehension and
                  application.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experiences