import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { RiRadioButtonFill } from 'react-icons/ri';

const PremPredict = () => {
    return (
        <div className='w-full min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300'>
            <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
                <div className='absolute top-0 left-0 w-full h-full bg-gray-900/70 z-10' />
                <Image
                    src='/assets/projects/PremPredict.jpg'
                    alt='PremPredictThumbnail'
                    layout='fill'
                    objectFit='cover'
                    className='absolute z-0'
                />
                <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                    <h2 className='py-2 text-2xl lg:text-4xl font-bold'>Premier League Predictor</h2>
                    <h3 className='text-lg lg:text-xl font-light'>Python / Sklearn / Pandas / Numpy </h3>
                </div>
            </div>
            <div className='max-w-[1240px] mx-auto p-4 md:p-8 grid md:grid-cols-5 gap-8 '>
                <div className='col-span-4'>
                    <p className='text-[#e94560] uppercase tracking-wider text-sm font-bold'>Project</p>
                    <h2 className='text-2xl lg:text-3xl font-bold'>Overview</h2>
                    <p className='text-gray-300 mt-4'>
                        This project leverages the RandomForestClassifier to predict outcomes of Premier League matches, combining a passion for soccer with machine learning. 
                        Using historical match data from Kaggle, the project explores patterns and trends in team performance to generate predictions and insights.
                        Key components include data preprocessing, feature engineering, model implementation, evaluation, and visualization. With an impressive accuracy of 
                        97.7%, the project highlights feature importance, such as points, win ratio, and average odds, to showcase the model's decision-making process.
                        Future enhancements include integrating advanced features like team form, player statistics, and predictions for upcoming matches and seasons. 
                        The project serves as both a practical application of machine learning techniques and an engaging exploration of soccer analytics.
                    </p>
                    <a href='https://github.com/kian-r-silva/Premier-League-Prediction' target='_blank' rel='noopener noreferrer'>
                        <button className='px-8 py-2 mt-4 text-white bg-[#e94560] rounded-lg shadow-md hover:bg-[#d22c4d] hover:shadow-lg transition duration-300'>
                            View Repo
                        </button>
                    </a>
                </div>
                <div className='col-span-4 md:col-span-1 bg-gray-900 text-gray-300 shadow-xl shadow-gray-800 rounded-xl'>
                    <div className='p-4'>
                        <p className='text-center font-bold pb-2'>Technologies</p>
                        <div className='grid grid-cols-3 md:grid-cols-1 gap-2'>
                            <p className='text-gray-400 py-2 flex items-center'><RiRadioButtonFill className='pr-2 text-[#e94560]' /> Sklearn</p>
                            <p className='text-gray-400 py-2 flex items-center'><RiRadioButtonFill className='pr-2 text-[#e94560]' /> Kaggle</p>
                            <p className='text-gray-400 py-2 flex items-center'><RiRadioButtonFill className='pr-2 text-[#e94560]' /> Python</p>
                            <p className='text-gray-400 py-2 flex items-center'><RiRadioButtonFill className='pr-2 text-[#e94560]' /> Pandas</p>
                            <p className='text-gray-400 py-2 flex items-center'><RiRadioButtonFill className='pr-2 text-[#e94560]' /> Numpy</p>
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

export default PremPredict;
