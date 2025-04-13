import React from 'react';
import MainContainer from '../homepage-components/MainContainer';

const Homepage = ({ children }) => (
    <>
        <MainContainer>
            { children }
        </MainContainer>
    </>
);

export default Homepage;