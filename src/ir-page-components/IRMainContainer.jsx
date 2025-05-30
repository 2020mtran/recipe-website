import { React, useState } from 'react';
import Header from '../homepage-components/Header';
import Sidebar from '../homepage-components/Sidebar';
import IRRecipes from './IRRecipes.jsx';

const IRMainContainer = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex flex-col min-h-screen w-full overflow-y-auto">
            <Header isOpen={isOpen} setIsOpen={setIsOpen} />
            <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
            <IRRecipes />
            {children}
        </div>
    );
};

export default IRMainContainer;