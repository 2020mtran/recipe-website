import React from 'react';

const MainContainer = ({ children }) => {
    return (
        <div class="flex flex-col w-full">
            {children}
        </div>
    );
};

export default MainContainer;