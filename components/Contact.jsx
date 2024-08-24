import React from 'react'
import contactImg from '../public/assets/ContactIMG.JPG'
import Image from 'next/image'

const Contact = () => {
  return (
    <div className='w-full lg:h-screen'>
        <div className='max-w-[1240px] m-auto px-2 py-16 w-4'>
            <p className='text-xl tracking-widest uppercase'>Contact</p>
            <h2 className='py-4'>Get in Touch</h2>
            <div className='grid lg:grid-cols-5 gap-8'>
{/* left */}
                <div className='col-span-3 lg:col-span-2 w-full h-full rounded-xl p-4 '>
                <div className='lg:p-4 h-full'>
                    <div>
                        <Image className='rounded-xl hover:scale-105 ease-in duration-300' src={contactImg} alt='contact' />
                    </div>
                </div>
                </div>
(/* right */)
            </div>
        </div>
    </div>
  )
}

export default Contact