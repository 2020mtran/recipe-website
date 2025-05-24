import React from 'react';
import IRMainContainer from '../ir-page-components/IRMainContainer';

const InternationalRecipes = ({ children }) => (
    <>
        <IRMainContainer>
            { children }
        </IRMainContainer>
    </>
);

export default InternationalRecipes;