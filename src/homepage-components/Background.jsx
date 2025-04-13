import React from 'react';

const Background = ({ children }) => {
    return (
        <div className="flex min-h-screen w-full bg-snowpink">
            {children}
        </div>
    );
};

export default Background;