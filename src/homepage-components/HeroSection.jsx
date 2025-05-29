import TypingEffect from './TypingEffect';
import { Link } from 'react-router-dom';

const HeroSection = () => {
    return (
        <Link to="/pages/vietnamese-recipes/26" className="flex flex-row w-full p-3 pb-0 sm:p-5 sm:pb-0 md:p-7 md:pb-0 lg:p-9 lg:pb-0 xl:p-11 xl:pb-0 2xl:p-13 2xl:pb-0 2xl:pr-16 2xl:pl-14 3xl:p-14 3xl:pb-0 3xl:pr-22 3xl:pl-20 items-center">
            <p className='text-chilired text-xl/5 xs:text-2xl/7 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl xl:mr-6 2xl:text-7xl 3xl:text-8xl font-bold'>From <span className='italic'>our</span> kitchen to <span className='italic'>yours</span>, let's make <span className="text-chilired"> <TypingEffect words={["Vietnamese", "Healthy", "Dessert", "American", "Mexican", "Korean", "Japanese"]} /></span> food together!</p>
            <img src={"https://res.cloudinary.com/eatwithemilyimages/image/upload/v1747256964/20170708_023204-768x598_x53szy.jpg"} className='w-[50%] md:w-[45%] xl:w-[45%] 2xl:w-[40%] rounded-lg'/>
        </Link>
    );
};

export default HeroSection;