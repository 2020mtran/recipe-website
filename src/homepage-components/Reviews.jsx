import React from 'react';
import { FaYoutube } from "react-icons/fa";

const Reviews = () => {
    return (
        <div className='flex flex-col p-3 pb-0 sm:p-5 sm:pb-0 md:p-7 md:pb-0 lg:p-9 lg:pb-0 xl:p-11 xl:pb-0 2xl:p-13 2xl:pb-0 3xl:p-14 3xl:pb-0 gap-1 md:gap-3 2xl:gap-5 3xl:gap-7 2xl:pr-16 2xl:pl-14 3xl:pr-22 3xl:pl-20'>
            <p className='text-black font-bold text-lg md:text-3xl lg:text-4xl xl:text-5xl 3xl:text-6xl'>Viewer Reviews</p>
            <div className='grid grid-cols-2 grid-rows-2 gap-2'>
                <div className='flex flex-row'>
                    <div className='flex flex-col bg-black/80 rounded-lg p-5 3xl:p-10 w-full gap-1 justify-center'>
                        <p className='text-white text-xs xs:text-sm sm:text-base md:text-lg lg:text-2xl xl:text-3xl 3xl:text-5xl'>You really nailed this! Can't wait to try!</p>
                        <div className='flex flex-row gap-1 3xl:gap-2 items-center'>
                            <p className='text-white text-xxs xs:text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 3xl:text-3xl'>- kerridelorme6605</p>
                            <FaYoutube className='text-chilired sm:w-5 xl:w-7 xl:h-7' />
                        </div>
                    </div>
                </div>
                <div className='flex flex-row'>
                    <div className='flex flex-col bg-black/80 rounded-lg p-5 3xl:p-10 w-full gap-1 justify-center'>
                        <p className='text-white text-xs xs:text-sm sm:text-base md:text-lg lg:text-2xl xl:text-3xl 3xl:text-5xl'>Am going to make this come this weekend, I love your recipe best!</p>
                        <div className='flex flex-row gap-1 3xl:gap-2 items-center'>
                            <p className='text-white text-xxs xs:text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 3xl:text-3xl'>- ladylilo6044</p>
                            <FaYoutube className='text-chilired sm:w-5 xl:w-7 xl:h-7' />
                        </div>
                    </div>
                </div>
                <div className='flex flex-row'>
                    <div className='flex flex-col bg-black/80 rounded-lg p-5 3xl:p-10 w-full gap-1 justify-center'>
                        <p className='text-white text-xs xs:text-sm sm:text-base md:text-lg lg:text-2xl xl:text-3xl 3xl:text-5xl'>This looks amazing! I love how you make the recipes so easy to follow.</p>
                        <div className='flex flex-row gap-1 3xl:gap-2 items-center'>
                            <p className='text-white text-xxs xs:text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 3xl:text-3xl'>- nikol210</p>
                            <FaYoutube className='text-chilired sm:w-5 xl:w-7 xl:h-7'/>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row'>
                    <div className='flex flex-col bg-black/80 rounded-lg p-5 3xl:p-10 w-full gap-1 justify-center'>
                        <p className='text-white text-xs xs:text-sm sm:text-base md:text-lg lg:text-2xl xl:text-3xl 3xl:text-5xl'>Good and easy recipe!</p>
                        <div className='flex flex-row gap-1 3xl:gap-2 items-center'>
                            <p className='text-white text-xxs xs:text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 3xl:text-3xl'>- labonirosalee7800</p>
                            <FaYoutube className='text-chilired sm:w-5 xl:w-7 xl:h-7'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;