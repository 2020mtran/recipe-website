import { Link } from 'react-router-dom';

const NewRecipes = () => {
    return (
        <div className='flex flex-col p-3 pb-0 sm:p-5 sm:pb-0 md:p-7 md:pb-0 lg:p-9 lg:pb-0 xl:p-11 xl:pb-0 2xl:p-13 2xl:pb-0 3xl:p-14 3xl:pb-0 gap-1 md:gap-3 2xl:gap-5 2xl:pr-16 2xl:pl-14 3xl:gap-7 3xl:pr-22 3xl:pl-20'>
            <p className='text-black font-bold text-lg md:text-3xl lg:text-4xl xl:text-5xl 3xl:text-6xl'>New Recipes</p>
            <div className="flex flex-row justify-between w-full gap-1 items-center">
                <Link to="/pages/international-recipes/98" className='flex flex-col w-[30%] gap-1 2xl:gap-3'>
                    <img src={"https://res.cloudinary.com/eatwithemilyimages/image/upload/v1748293791/20210320_212627_fepsst.jpg"} className='aspect-square object-cover rounded-lg drop-shadow-md md:drop-shadow-lg'/>
                    <p className='text-xxs/3 md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl text-black font-semibold text-center min-h-[40px] md:min-h-[60px]'>Bill Bailey's Corned Beef Round</p>
                </Link>
                <div className="h-1/2 border-l-1 lg:border-l-2 -mt-10 md:-mt-15 border-black/85"></div>
                <Link to="/pages/international-recipes/134" className='flex flex-col w-[30%] gap-1 2xl:gap-3'>
                    <img src={"https://res.cloudinary.com/eatwithemilyimages/image/upload/v1748487774/20210407_173801_resized_qi1rnq.jpg"} className='aspect-square object-cover rounded-lg drop-shadow-md md:drop-shadow-lg'/>
                    <p className='text-xxs/3 md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl text-black font-semibold text-center min-h-[40px] md:min-h-[60px]'>Chicken Udon Noodle</p>
                </Link>
                <div className="h-1/2 border-l-1 lg:border-l-2 -mt-10 md:-mt-15 border-black/85"></div>
                <Link to="/pages/international-recipes/81" className='flex flex-col w-[30%] gap-1 2xl:gap-3'>
                    <img src={"https://res.cloudinary.com/eatwithemilyimages/image/upload/v1748055382/last-telera-photo_kpwpyj.jpg"} className='aspect-square object-cover rounded-lg drop-shadow-md md:drop-shadow-lg'/>
                    <p className='text-xxs/3 md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl text-black font-semibold text-center min-h-[40px] md:min-h-[60px]'>Carne Asada Torta (Mexican Steak Sandwich)</p>
                </Link>
            </div>
        </div>
    );
};

export default NewRecipes;