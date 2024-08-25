import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const ProjectItem = ({ title, backgroundImg, projectUrl, skillType}) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full rounded-xl p-4 group hover:bg-gradient-to-r from-[#e94560] via-[#faaeba] to-[#e94560]'>
      <Image
        src={backgroundImg}
        alt={title}
        className='rounded-xl group-hover:opacity-20 transition duration-300 ease-in-out'
      />
      <div className='absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out z-10'>
        <h3 className='text-3xl text-white tracking-wider'>{title}</h3>
        <p className='pb-4 pt-2 text-white'>{skillType}</p>
        <Link href={projectUrl}>
          <p className='py-3 px-6 rounded-lg bg-[#444056] text-white text-lg font-semibold cursor-pointer hover:bg-[#d22c4d] transition duration-300 ease-in-out'>
            More Info
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
