import React from 'react';

const Footer = () => {
    return (
        <div className='flex flex-col p-3 sm:p-5 md:p-3 lg:p-3 xl:p-5 2xl:p-5 3xl:p-7 gap-0.5 2xl:gap-1 3xl:gap-1 bg-black/80'>
            <p className='text-center text-xxs/3 md:text-xs lg:text-base xl:text-lg 2xl:text-xl 3xl:text-xl'>Information from your device may be used to personalize your experience on this site.</p>
            <p className='text-center text-xxs/3 md:text-xs lg:text-base xl:text-lg 2xl:text-xl 3xl:text-xl'>Copyright © EatWithEmily.com | All rights reserved.</p>
            <p className='text-center text-xxs/3 md:text-xs lg:text-base xl:text-lg 2xl:text-xl 3xl:text-xl'>Privacy Policy</p>
        </div>
    );
};

export default Footer;