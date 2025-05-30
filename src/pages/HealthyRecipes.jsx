import React from 'react';
import HRMainContainer from '../hr-page-components/HRMainContainer';

const HealthyRecipes = ({ children }) => (
    <>
        <HRMainContainer>
            { children }
        </HRMainContainer>
    </>
);

export default HealthyRecipes;