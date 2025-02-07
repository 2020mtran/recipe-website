import React from 'react';
import SpringRolls from '../assets/springrolls.webp'

const HeroSection = () => {
    return (
        <div className="flex flex-row w-full p-3 sm:p-5 md:p-7 lg:p-9 xl:p-11 2xl:p-13 3xl:p-14 items-center">
            <p className='text-chilired text-xl/5 xs:text-2xl/7 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl xl:mr-6 2xl:text-7xl 3xl:text-8xl font-bold'>From <span className='italic'>our</span> kitchen to <span className='italic'>yours</span>, let's make Vietnamese food together!</p>
            <img src={SpringRolls} className='w-[50%] md:w-[45%] xl:w-[45%] 2xl:w-[40%] rounded-lg'/>
        </div>
    );
};

export default HeroSection;