import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const ProjectItem = ({title, backgroundImg, projectUrl}) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full rounded-xl p-4 group hover:bg-gradient-to-r from-[#e6a4a4] to-[#e85c89]'>
        <Image 
        src={backgroundImg} 
        alt={title} 
        className='rounded-xl group-hover:opacity-20 transition duration-300 ease-in-out' 
        /> 
        <div className='absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out z-10'>
        <h3 className='text-2xl text-black tracking-wider'>{title}</h3>
        <p className='pb-4 pt-2 text-black'>Java</p>
        <Link href={projectUrl}>
            <p className='py-3 rounded-lg bg-white text-gray-700 text-lg cursor-pointer'>More Info</p>
        </Link>
        </div>
    </div>
  )
}

export default ProjectItem