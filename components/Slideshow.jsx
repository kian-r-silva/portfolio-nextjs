"use client"; // Ensure this is at the top

import React, { useState, useEffect } from 'react';

const Slideshow = ({ images, interval = 5000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, interval);

        return () => clearInterval(slideInterval);
    }, [currentIndex, images, interval]);

    return (
        <div className='slideshow-container relative w-full h-full'>
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`slide ${index === currentIndex ? 'active' : 'hidden'}`}
                    style={{ transition: 'opacity 1s ease-in-out' }}
                >
                    <img src={image.src} alt={image.alt} className=' rounded-lg w-full h-auto' />
                </div>
            ))}
        </div>
    );
};

export default Slideshow;
