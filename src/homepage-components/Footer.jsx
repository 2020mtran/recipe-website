import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='flex flex-col w-full p-3 sm:p-5 md:p-3 lg:p-3 xl:p-5 2xl:p-5 3xl:p-7 gap-0.5 2xl:gap-1 3xl:gap-1 bg-black/80'>
            <p className='text-snowpink text-center text-xxs/3 md:text-xs lg:text-base xl:text-lg 2xl:text-xl 3xl:text-xl'>Information from your device may be used to personalize your experience on this site.</p>
            <p className='text-snowpink text-center text-xxs/3 md:text-xs lg:text-base xl:text-lg 2xl:text-xl 3xl:text-xl'>All rights reserved. Copyright © EatWithEmily.com</p>
            <div className='flex flex-row self-center gap-5'>
                <Link to="/pages/disclosure" className='text-white visited:!text-snowpink text-center text-xxs/3 md:text-xs lg:text-base xl:text-lg 2xl:text-xl 3xl:text-xl'>Disclosure</Link>
                <p className='text-center text-xxs/3 md:text-xs lg:text-base xl:text-lg 2xl:text-xl 3xl:text-xl'> | </p>
                <Link to="/pages/privacy-policy" className='text-white visited:!text-snowpink text-center text-xxs/3 md:text-xs lg:text-base xl:text-lg 2xl:text-xl 3xl:text-xl'>Privacy Policy</Link>
            </div>
        </div>
    );
};

export default Footer;