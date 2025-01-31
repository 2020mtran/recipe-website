import React from 'react';

const Background = ({ children }) => {
    return (
        <div class="flex h-screen w-full bg-snowpink">
            {children}
        </div>
    );
};

export default Background;