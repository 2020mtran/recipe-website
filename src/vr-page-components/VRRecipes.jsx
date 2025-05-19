import React, { useState } from 'react';
import { Link } from "react-router-dom";
import RecipeInfo from './RecipeInfo'
import Footer from '../homepage-components/Footer';

const VRRecipes = () => {
    const [isViet, setIsViet] = useState(false);

    return (
        <div className="flex flex-col w-full gap-3">
            <div className='flex flex-col p-3 pb-0 sm:p-5 sm:pb-0 md:p-7 md:pb-0 lg:p-9 lg:pb-0 xl:p-11 xl:pb-0 xl:pt-5 2xl:p-13 2xl:pb-0 2xl:pt-8 2xl:pr-16 2xl:pl-14 3xl:p-14 3xl:pb-0 3xl:pt-14 3xl:pr-22 3xl:pl-20 gap-4 items-center'>
                <div className='flex flex-row w-full justify-between items-end'>
                    <p className='flex text-chilired text-left text-2xl/5 xs:text-2xl/7 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl xl:mr-6 2xl:text-5xl 3xl:text-8xl font-bold'>Vietnamese Recipes</p>
                    <div>
                        {!isViet ? (
                            <button onClick={() => setIsViet(true)} className='flex place-self-end bg-transparent underline text-2xl 2xl:text-3xl font-semibold text-black'>Tiếng Việt</button>
                        ) : (
                            <button onClick={() => setIsViet(false)} className='flex place-self-end bg-transparent underline text-2xl 2xl:text-3xl font-semibold text-black'>English</button>
                        )}
                    </div>
                </div>
                <div className="grid grid-cols-2 xl:grid-cols-6 gap-3">
                    {RecipeInfo.map((recipe) => (
                        <Link to={`./${recipe.id}`} key={recipe.id} className='flex flex-col bg-black/80 rounded-lg 3xl:p-10 w-full gap-1 justify-center items-center shadow-lg
                        transition-all duration-300 ease-in-out transform hover:scale-105'>
                            <img src={recipe.display} className='rounded-lg w-[120%] h-[120%] object-cover transition-transform duration-300 ease-in-out hover:scale-97'/>
                            <p className='pr-2 pl-2 pb-2 text-snowpink text-xl xl:text-2xl'>
                                {isViet ? recipe.vietName : recipe.name}</p>
                        </Link>
                    ))}
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default VRRecipes;