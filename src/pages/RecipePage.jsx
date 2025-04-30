import { React, useState } from 'react';
import { useParams } from 'react-router-dom';
import RecipeInfo from '../vr-page-components/RecipeInfo.jsx';
import Header from '../homepage-components/Header';
import Sidebar from '../homepage-components/Sidebar';

const RecipePage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { id } = useParams();
    const recipe = RecipeInfo.find((r) => (r.id) === parseInt(id));

    if (!recipe) {
        return <p className="text-black text-xl">Recipe not found.</p>;
    }

    return (
        <div className='flex flex-col items-center'>
            <Header isOpen={isOpen} setIsOpen={setIsOpen} />
            <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
            <div className='relative w-full lg:w-2/3 xl:hidden h-64'>
                <img src={recipe.display} alt={recipe.name} className="w-full h-64 object-cover"/>
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent"></div>
                <p className="absolute w-full bottom-2 text-white text-3xl md:text-4xl font-bold text-center">{recipe.name}</p>
            </div>
            <div className='flex-row hidden xl:flex xl:w-2/3 px-5 py-2 gap-5'>
                <div className='relative xl:w-full h-64'>
                    <div className='w-full'>
                        <img src={recipe.display} alt={recipe.name} className="w-full h-64 object-cover"/>
                        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent"></div>
                        <p className="absolute w-full bottom-2 text-white text-3xl md:text-4xl font-bold text-center">{recipe.name}</p>
                    </div>
                </div>
                <div className='xl:w-full'>
                    <div className='flex flex-row relative items-center mt-2'>
                        <p className="text-chilired text-lg font-bold md:text-2xl 2xl:text-2xl mr-2">Difficulty: {recipe.difficulty}</p>
                        <div className="flex-grow border-t border-black/85"></div>
                    </div>
                    <p className="text-black mt-1 text-sm md:text-base 2xl:text-xl">{recipe.summary}</p>
                </div>
            </div>
            <div className='w-full lg:w-2/3 px-5 py-2'>
                <div className='flex flex-row relative items-center mt-2 xl:hidden'>
                    <p className="text-chilired text-lg md:text-2xl mr-2">Difficulty: {recipe.difficulty}</p>
                    <div className="flex-grow border-t border-black/85"></div>
                </div>
                <p className="text-black mt-1 text-sm md:text-base xl:hidden">{recipe.summary}</p>
                <div className='flex flex-row relative items-center mt-2'>
                    <p className='text-chilired text-lg font-semibold md:text-2xl mr-2 flex'>Ingredients</p>
                    <div className="flex-grow border-t border-black/85"></div>
                </div>
                <ul className="mt-2 list-disc list-inside text-black">
                    {recipe.ingredients.map((ingredient, index) => (
                        <li key={index} className="text-sm md:text-base 2xl:text-xl">{ingredient}</li>
                    ))}
                </ul>
                <div className='flex flex-row relative items-center mt-2'>
                    <p className='text-chilired text-lg font-semibold md:text-2xl mr-2 flex'>Steps</p>
                    <div className="flex-grow border-t border-black/85"></div>
                </div>
                <div className='grid grid-cols-2 gap-6'>
                    {recipe.steps.map(([description, image], index) => (
                        <div key={index} className='flex flex-col p-4 rounded-lg shadow bg-white min-h-[300px]'>
                            {image && <img key={index} src={image} className='rounded-lg object-cover h-90 mb-3 w-full'/>}
                            <p className="text-sm md:text-xl 2xl:text-2xl mb-2 text-black">{index + 1}. {description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default RecipePage;