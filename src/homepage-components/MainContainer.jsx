import { React, useState } from 'react';
import Header from './Header'
import Sidebar from './Sidebar';
import HeroSection from './HeroSection';

const MainContainer = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex flex-col w-full">
            <Header isOpen={isOpen} setIsOpen={setIsOpen} />
            <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
            <HeroSection></HeroSection>
            {children}
        </div>
    );
};

export default MainContainer;