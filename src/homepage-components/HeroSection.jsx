import React from 'react';
import SpringRolls from '../assets/springrolls.webp'

const HeroSection = () => {
    return (
        <div className="flex flex-row w-full p-5 items-center">
            <p className='text-chilired text-lg/5 font-bold pr-2'>From <span className='italic'>our</span> kitchen to <span className='italic'>yours</span>, let's make Vietnamese food together!</p>
            <img src={SpringRolls} className='w-1/2 rounded-lg'/>
        </div>
    );
};

export default HeroSection;