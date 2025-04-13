import React from 'react';
import { Link } from "react-router-dom";
import RecipeInfo from './RecipeInfo'

const VRRecipes = () => {
    return (
        <div className="flex flex-col w-full p-3 pb-0 sm:p-5 sm:pb-0 md:p-7 md:pb-0 lg:p-9 lg:pb-0 xl:p-11 xl:pb-0 2xl:p-13 2xl:pb-0 2xl:pr-16 2xl:pl-14 3xl:p-14 3xl:pb-0 3xl:pr-22 3xl:pl-20 gap-4 items-center">
            <p className='text-chilired self-start text-left text-2xl/5 xs:text-2xl/7 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl xl:mr-6 2xl:text-7xl 3xl:text-8xl font-bold'>Vietnamese Recipes</p>
            <div className="grid grid-cols-2 gap-3">
                {RecipeInfo.map((recipe) => (
                    <Link to={`./${recipe.id}`} key={recipe.id} className='flex flex-col bg-black/80 rounded-lg 3xl:p-10 w-full gap-1 justify-center shadow-lg'>
                        <img src={recipe.display} className='rounded-lg'/>
                        <p className='pr-2 pl-2 pb-2 text-xl'>{recipe.name}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default VRRecipes;