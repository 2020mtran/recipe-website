import { React, useState } from 'react';
import Header from './Header'
import Sidebar from './Sidebar';

const MainContainer = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex flex-col w-full">
            <Header isOpen={isOpen} setIsOpen={setIsOpen} />
            <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
            {children}
        </div>
    );
};

export default MainContainer;