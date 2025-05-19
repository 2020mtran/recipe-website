import { React, useState } from 'react';
import Header from '../homepage-components/Header';
import Sidebar from '../homepage-components/Sidebar';
import VRRecipes from './VRRecipes';

const VRMainContainer = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex flex-col min-h-screen w-full overflow-y-auto">
            <Header isOpen={isOpen} setIsOpen={setIsOpen} />
            <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
            <VRRecipes />
            {children}
        </div>
    );
};

export default VRMainContainer;