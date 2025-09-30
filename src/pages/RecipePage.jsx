import { React, useState } from 'react';
import { useParams } from 'react-router-dom';
import RecipeInfo from '../vr-page-components/RecipeInfo.json';
import Header from '../homepage-components/Header';
import Sidebar from '../homepage-components/Sidebar';
import Footer from '../homepage-components/Footer';
import BannerAd from "../homepage-components/BannerAd";
import VerticalAd from "../homepage-components/VerticalAd.jsx";
import YouTubeEmbed from '../homepage-components/YoutubeEmbed.jsx';

const RecipePage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { id } = useParams();
    const recipe = RecipeInfo.find((r) => (r.id) === parseInt(id));

    if (!recipe) {
        return <p className="text-black text-xl">Recipe not found.</p>;
    }

    return (
        <div className='flex flex-col items-center bg-snowpink'>
            <Header isOpen={isOpen} setIsOpen={setIsOpen} />
            <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
            <div className='flex flex-row'>
                <div className='hidden xl:flex flex-col justify-around xl:ml-15'>
                    <VerticalAd adSlot={"5930319498"}/>
                    <VerticalAd adSlot={"5930319498"}/>
                    <VerticalAd adSlot={"5930319498"}/>
                </div>
                <div className='flex flex-col items-center'>
                    <div className='relative w-full lg:hidden h-64'>
                        <img src={recipe.display} alt={recipe.name} className="w-full h-64 object-cover"/>
                        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent"></div>
                        <p className="absolute w-full bottom-2 text-white text-3xl md:text-4xl font-bold text-center">{recipe.name}</p>
                    </div>
                    <div className='hidden flex-row items-center lg:flex lg:w-5/6 px-5 py-2 gap-5'>
                        <div className='relative lg:w-full h-64'>
                            <div className='w-full'>
                                <img src={recipe.display} alt={recipe.name} className="w-full h-64 object-cover"/>
                                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent"></div>
                                <p className="absolute w-full bottom-2 text-white text-3xl md:text-4xl font-bold text-center">{recipe.name}</p>
                            </div>
                        </div>
                        <div className='lg:w-full'>
                            <div className='flex flex-row relative items-center'>
                                <p className="text-chilired text-lg font-bold md:text-2xl 2xl:text-2xl mr-2">Summary</p>
                                <div className="flex-grow border-t border-black/85"></div>
                            </div>
                            <p className="text-black mt-1 text-sm md:text-base 2xl:text-xl">{recipe.summary}</p>
                        </div>
                    </div>
                    <div className='w-full lg:w-5/6 px-5 py-2'>
                        <div className='flex flex-row relative items-center mt-2 xl:hidden'>
                            <p className="text-chilired text-lg font-bold md:text-2xl mr-2">Summary</p>
                            <div className="flex-grow border-t border-black/85"></div>
                        </div>
                        <p className="text-black mt-1 text-sm md:text-base xl:hidden">{recipe.summary}</p>
                        {recipe.videoId && recipe.videoId.trim() !== "" && (
                            <>
                                <div className='flex flex-row relative items-center mt-2'>
                                    <p className='text-chilired text-lg font-semibold md:text-2xl mr-2 flex'>Tutorial Video</p>
                                    <div className="flex-grow border-t border-black/85"></div>
                                </div>
                                <YouTubeEmbed videoId={recipe.videoId} />
                            </>
                        )}
                        <div className='flex flex-row relative items-center mt-2'>
                            <p className='text-chilired text-lg font-semibold md:text-2xl mr-2 flex'>Ingredients</p>
                            <div className="flex-grow border-t border-black/85"></div>
                        </div>
                        <ul className="mt-2 list-disc list-inside text-black">
                            {recipe.ingredients.map((ingredient, index) => {
                                if (ingredient.includes("For ")) {
                                    return (
                                        <li
                                            key={index}
                                            className="text-base md:text-lg 2xl:text-xl font-bold mt-4 mb-1 list-none"
                                        >
                                            {ingredient}
                                        </li>
                                    );
                                } else {
                                    return (
                                        <li
                                            key={index}
                                            className="text-sm md:text-base 2xl:text-xl ml-4"
                                        >
                                            {ingredient}
                                        </li>
                                    );
                                }
                            })}
                        </ul>
                        <BannerAd adSlot={"6177731509"} />
                        <div className='flex flex-row relative items-center mt-2'>
                            <p className='text-chilired text-lg font-semibold md:text-2xl mr-2 mb-3 flex'>Steps</p>
                            <div className="flex-grow border-t border-black/85"></div>
                        </div>
                        <div className='hidden md:grid grid-cols-2 gap-6 pb-7'>
                            {recipe.steps.map(([description, image], index) => (
                                <div key={index} className='flex flex-col p-4 rounded-lg shadow bg-white min-h-[300px]'>
                                    {image && <img key={index} src={image} className='rounded-lg object-cover h-90 mb-3 w-full'/>}
                                    <p className="text-sm md:text-xl 2xl:text-2xl mb-2 text-black">{index + 1}. {description}</p>
                                </div>
                            ))}
                        </div>
                        <div className='grid grid-cols-1 gap-3 md:hidden'>
                            {recipe.steps.map(([description, image], index) => (
                                <div key={index} className='flex flex-col p-4 rounded-lg shadow bg-white min-h-[100px]'>
                                    {image && <img key={index} src={image} className='rounded-lg object-cover h-90 mb-3 w-full'/>}
                                    <p className="text-sm md:text-xl 2xl:text-2xl mb-2 text-black">{index + 1}. {description}</p>
                                </div>
                            ))}
                        </div>
                        <BannerAd adSlot={"6177731509"} />
                    </div>
                </div>
                <div className='hidden xl:flex flex-col justify-around xl:mr-15'>
                    <VerticalAd adSlot={"5930319498"}/>
                    <VerticalAd adSlot={"5930319498"}/>
                    <VerticalAd adSlot={"5930319498"}/>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default RecipePage;