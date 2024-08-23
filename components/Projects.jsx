import Image from 'next/image'
import React from 'react'
import slcImg from '../public/assets/projects/SLC-CourseSystem.jpg'

const Projects = () => {
  return (
    <div className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase'>Projects</p>
        <h2 className='py-4'>What I've Built</h2>
        <div className='grid md: grid-cols-2 gap-8'>
            
            <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-300 rounded-xl p-4 group hover:bg-gradient-to-r from-[#ffffff] to-[#a4a0a0]'>
              <Image src={slcImg} alt='SLC Course System' className='rounded-xl' /> 
            </div>

        </div>
      </div>
    </div>
  )
}

export default Projects