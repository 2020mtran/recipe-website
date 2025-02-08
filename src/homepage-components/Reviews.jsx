import React from 'react';
import CornedBeef from '../assets/cornedbeef.jpg'
import TurkeyWrap from '../assets/turkeywrap.jpg'
import Torta from '../assets/torta.jpg'
import { FaYoutube } from "react-icons/fa";

const Reviews = () => {
    return (
        <div className='flex flex-col p-3 sm:p-5 md:p-7 lg:p-9 xl:p-11 2xl:p-13 3xl:p-14 gap-1 md:gap-3 2xl:gap-5 3xl:gap-7'>
            <p className='text-black font-bold text-lg md:text-3xl lg:text-4xl xl:text-5xl 3xl:text-6xl'>Viewer Reviews</p>
            <div className='grid grid-cols-2 grid-rows-2 gap-2'>
                <div className='flex flex-row'>
                    <div className='flex flex-col bg-black/80 rounded-lg p-5 w-full gap-1 justify-center'>
                        <p className='text-xs xs:text-sm sm:text-base md:text-lg lg:text-2xl'>You really nailed this! Can't wait to try!</p>
                        <div className='flex flex-row gap-1 items-center'>
                            <p className='text-xxs xs:text-xs sm:text-sm md:text-base lg:text-lg'>- kerridelorme6605</p>
                            <FaYoutube className='text-chilired sm:w-5' />
                        </div>
                    </div>
                </div>
                <div className='flex flex-row'>
                    <div className='flex flex-col bg-black/80 rounded-lg p-5 w-full gap-1 justify-center'>
                        <p className='text-xs xs:text-sm sm:text-base md:text-lg lg:text-2xl'>Am going to make this come this weekend, I love your recipe best!</p>
                        <div className='flex flex-row gap-1 items-center'>
                            <p className='text-xxs xs:text-xs sm:text-sm md:text-base lg:text-lg'>- ladylilo6044</p>
                            <FaYoutube className='text-chilired sm:w-5' />
                        </div>
                    </div>
                </div>
                <div className='flex flex-row'>
                    <div className='flex flex-col bg-black/80 rounded-lg p-5 w-full gap-1 justify-center'>
                        <p className='text-xs xs:text-sm sm:text-base md:text-lg lg:text-2xl'>This looks amazing! I love how you make the recipes so easy to follow.</p>
                        <div className='flex flex-row gap-1 items-center'>
                            <p className='text-xxs xs:text-xs sm:text-sm md:text-base lg:text-lg'>- nikol210</p>
                            <FaYoutube className='text-chilired sm:w-5'/>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row'>
                    <div className='flex flex-col bg-black/80 rounded-lg p-5 w-full gap-1 justify-center'>
                        <p className='text-xs xs:text-sm sm:text-base md:text-lg lg:text-2xl'>Good and easy recipe!</p>
                        <div className='flex flex-row gap-1 items-center'>
                            <p className='text-xxs xs:text-xs sm:text-sm md:text-base lg:text-lg'>- labonirosalee7800</p>
                            <FaYoutube className='text-chilired sm:w-5'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;