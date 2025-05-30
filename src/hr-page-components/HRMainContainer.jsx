import { React, useState } from 'react';
import Header from '../homepage-components/Header';
import Sidebar from '../homepage-components/Sidebar';
import HRRecipes from './HRRecipes.jsx';

const HRMainContainer = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex flex-col min-h-screen w-full overflow-y-auto">
            <Header isOpen={isOpen} setIsOpen={setIsOpen} />
            <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
            <HRRecipes />
            {children}
        </div>
    );
};

export default HRMainContainer;