import React from 'react';
import BanhXeo from '../assets/banhxeo.jpg'
import BbqRoastPork from '../assets/bbqroastpork.jpg'
import StickyRiceMango from '../assets/StickyRiceMango.jpg'

const FeaturedRecipes = () => {
    return (
        <div className='flex flex-col p-3 pb-0 sm:p-5 sm:pb-0 md:p-7 md:pb-0 lg:p-9 lg:pb-0 xl:p-11 xl:pb-0 2xl:p-13 2xl:pb-0 3xl:p-14 3xl:pb-0 gap-1 md:gap-3 2xl:gap-5 3xl:gap-7'>
            <p className='text-black font-bold text-lg md:text-3xl lg:text-4xl xl:text-5xl 3xl:text-6xl'>Featured Recipes</p>
            <div className="flex flex-row justify-between w-full gap-1 items-center">
                <div className='flex flex-col w-[30%] gap-1 2xl:gap-3'>
                    <img src={BanhXeo} className='aspect-square object-cover rounded-lg drop-shadow-md md:drop-shadow-lg'/>
                    <p className='text-xxs/3 md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl text-black font-semibold text-center min-h-[40px] md:min-h-[60px]'>Vietnamese Crispy Crepe (Bánh Xèo)</p>
                </div>
                <div className="h-1/2 border-l-1 lg:border-l-2 -mt-10 md:-mt-15 border-black/85"></div>
                <div className='flex flex-col w-[30%] gap-1 2xl:gap-3'>
                    <img src={BbqRoastPork} className='aspect-square object-cover rounded-lg drop-shadow-md md:drop-shadow-lg'/>
                    <p className='text-xxs/3 md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl text-black font-semibold text-center min-h-[40px] md:min-h-[60px]'>Chinese BBQ Roast Pork</p>
                </div>
                <div className="h-1/2 border-l-1 lg:border-l-2 -mt-10 md:-mt-15 border-black/85"></div>
                <div className='flex flex-col w-[30%] gap-1 2xl:gap-3'>
                    <img src={StickyRiceMango} className='aspect-square object-cover rounded-lg drop-shadow-md md:drop-shadow-lg'/>
                    <p className='text-xxs/3 md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl text-black font-semibold text-center min-h-[40px] md:min-h-[60px]'>Thai Sweet Sticky Rice with Mango</p>
                </div>
            </div>
        </div>
    );
};

export default FeaturedRecipes;