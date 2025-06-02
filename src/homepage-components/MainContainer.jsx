import { React, useState } from 'react';
import Header from './Header'
import Sidebar from './Sidebar';
import HeroSection from './HeroSection';
import FeaturedRecipes from './FeaturedRecipes';
import NewRecipes from './NewRecipes';
import Reviews from './Reviews';
import Guidance from './Guidance';
import Footer from './Footer';
import BannerAd from "../homepage-components/BannerAd";

const MainContainer = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex flex-col w-full overflow-y-auto">
            <Header isOpen={isOpen} setIsOpen={setIsOpen} />
            <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
            <HeroSection></HeroSection>
            <FeaturedRecipes></FeaturedRecipes>
            <NewRecipes></NewRecipes>
            <div className='w-[70%] self-center'>
                <BannerAd adSlot={"1234567890"} />
            </div>
            <Reviews></Reviews>
            <Guidance></Guidance>
            <div className='w-[70%] self-center'>
                <BannerAd adSlot={"1234567890"} />
            </div>
            <Footer></Footer>
            {children}
        </div>
    );
};

export default MainContainer;