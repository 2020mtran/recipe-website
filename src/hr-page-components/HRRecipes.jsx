import React, { useState } from 'react';
import { Link } from "react-router-dom";
import RecipeInfo from '../vr-page-components/RecipeInfo.json'
import Footer from '../homepage-components/Footer';
import BannerAd from '../homepage-components/BannerAd';

const HRecipes = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const filteredRecipes = RecipeInfo.filter(recipe => 
        recipe.category === "Healthy" && (recipe.name).toLowerCase().includes(searchQuery.toLowerCase())
    );
    return (
        <div className="flex flex-col w-full min-h-screen gap-3">
            <div className="flex flex-col w-full flex-grow overflow-x-hidden">
                <div className='flex flex-col p-3 pb-0 sm:p-5 sm:pb-0 md:p-7 md:pb-0 lg:p-9 lg:pb-0 xl:p-11 xl:pb-0 xl:pt-5 2xl:p-13 2xl:pb-0 2xl:pt-8 2xl:pr-16 2xl:pl-14 3xl:p-14 3xl:pb-0 3xl:pt-14 3xl:pr-22 3xl:pl-20 gap-4 items-center'>
                    <div className='flex flex-row w-full justify-between items-center sm:items-end'>
                        <p className='flex text-chilired text-left text-2xl/5 xs:text-2xl/7 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl xl:mr-6 2xl:text-5xl 3xl:text-8xl font-bold'>Healthy Recipes</p>
                        <div className='flex flex-row gap-2 sm:gap-5 items-center'>
                            <input type="text" placeholder="Search recipe..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
                            className='w-full sm:w-96 px-4 py-2 text-black placeholder-black border border-gray-300 rounded-lg text-md sm:text-lg focus:outline-none focus:ring-2 focus:ring-chilired'></input>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 pb-10 w-full">
                        {filteredRecipes.length > 0 ? (
                            filteredRecipes.map((recipe) => (
                                <Link to={`./${recipe.id}`} key={recipe.id} className='flex flex-col bg-black/80 rounded-lg 3xl:p-10 w-full gap-1 justify-center items-center shadow-lg
                                transition-all duration-300 ease-in-out transform hover:scale-105'>
                                    <img key={recipe.display} src={recipe.display} alt={recipe.name} className='rounded-lg w-[120%] h-[120%] object-cover transition-transform duration-300 ease-in-out hover:scale-97'/>
                                    <p className='pr-2 pl-2 pb-2 text-snowpink text-xl xl:text-2xl'>{recipe.name}</p>
                                </Link>
                            ))
                        ) : (
                                <p className="col-span-full w-full h-screen text-center text-black text-lg font-medium">No recipes found.</p>
                            )}
                    </div>
                </div>
            </div>
            <div className='w-[70%] self-center'>
                <BannerAd adSlot={"6177731509"} />
            </div>
            <Footer></Footer>
        </div>
    );
};

export default HRecipes;