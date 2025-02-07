import React from 'react';
import CornedBeef from '../assets/cornedbeef.jpg'
import TurkeyWrap from '../assets/turkeywrap.jpg'
import Torta from '../assets/torta.jpg'

const NewRecipes = () => {
    return (
        <div className='flex flex-col p-3 sm:p-5 md:p-7 lg:p-9 xl:p-11 2xl:p-13 3xl:p-14 gap-1 md:gap-3 2xl:gap-5 3xl:gap-7'>
            <p className='text-black font-bold text-lg md:text-3xl lg:text-4xl xl:text-5xl 3xl:text-6xl'>New Recipes</p>
            <div className="flex flex-row justify-between w-full gap-1 items-center">
                <div className='flex flex-col w-[30%] gap-1 2xl:gap-3'>
                    <img src={CornedBeef} className='aspect-square object-cover rounded-lg drop-shadow-md md:drop-shadow-lg'/>
                    <p className='text-xxs/3 md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl text-black font-semibold text-center min-h-[40px] md:min-h-[60px]'>Bill Bailey's Corned Beef Round</p>
                </div>
                <div className="h-1/2 border-l-1 lg:border-l-2 -mt-10 md:-mt-15 border-black/85"></div>
                <div className='flex flex-col w-[30%] gap-1 2xl:gap-3'>
                    <img src={TurkeyWrap} className='aspect-square object-cover rounded-lg drop-shadow-md md:drop-shadow-lg'/>
                    <p className='text-xxs/3 md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl text-black font-semibold text-center min-h-[40px] md:min-h-[60px]'>Turkey Wrap</p>
                </div>
                <div className="h-1/2 border-l-1 lg:border-l-2 -mt-10 md:-mt-15 border-black/85"></div>
                <div className='flex flex-col w-[30%] gap-1 2xl:gap-3'>
                    <img src={Torta} className='aspect-square object-cover rounded-lg drop-shadow-md md:drop-shadow-lg'/>
                    <p className='text-xxs/3 md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl text-black font-semibold text-center min-h-[40px] md:min-h-[60px]'>Carne Asada Torta (Mexican Steak Sandwich)</p>
                </div>
            </div>
        </div>
    );
};

export default NewRecipes;