import React from 'react';
import GrilledPorkChops from '../assets/grilledporkchops.jpg'
import TurkeySandwich from '../assets/turkeysandwich.jpg'
import Flan from '../assets/flan.png'
import SloppyJoes from '../assets/sloppyjoes.jpg'

const Guidance = () => {
    return (
        <div className='flex flex-col p-3 sm:p-5 md:p-7 lg:p-9 xl:p-11 2xl:p-13 3xl:p-14 gap-1 md:gap-3 2xl:gap-5 3xl:gap-7 2xl:pr-16 2xl:pl-14 3xl:pr-22 3xl:pl-20'>
            <p className='text-black font-bold text-lg md:text-3xl lg:text-4xl xl:text-5xl 3xl:text-6xl'>Let's Cook Some...</p>
            <div className='grid grid-cols-2 grid-rows-2 gap-2 md:gap-x-20'>
                <div className='flex flex-row'>
                    <div className='flex flex-col relative bg-black/80 rounded-lg pl-3 pr-3 pb-2 pt-3 md:pl-10 md:pr-10 3xl:p-10 w-full justify-center'>
                        <img src={GrilledPorkChops} className='min-h-28 aspect-5/4 lg:aspect-3/2 xl:aspect-7/3 object-cover rounded-lg' style={{ 
                            WebkitMaskImage: 'linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.55) 90%)' }} />
                        <div className='flex absolute inset-0 justify-center mt-1.5'>
                            <p className='text-lg xs:text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 3xl:text-6xl font-semibold [text-shadow:2px_2px_2px_black]'>Vietnamese Food</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row'>
                    <div className='flex flex-col relative bg-black/80 rounded-lg pl-3 pr-3 pb-2 pt-3 md:pl-10 md:pr-10 3xl:p-10 w-full justify-center'>
                            <img src={TurkeySandwich} className='min-h-28 aspect-5/4 lg:aspect-3/2 xl:aspect-7/3 object-cover rounded-lg' style={{ 
                                WebkitMaskImage: 'linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.50) 90%)' }} />
                            <div className='flex absolute inset-0 justify-center mt-1.5'>
                                <p className='text-lg xs:text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 3xl:text-6xl font-semibold [text-shadow:2px_2px_2px_black]'>Healthy Food</p>
                            </div>
                    </div>
                </div>
                <div className='flex flex-row'>
                    <div className='flex flex-col relative bg-black/80 rounded-lg pl-3 pr-3 pb-2 pt-3 md:pl-10 md:pr-10 3xl:p-10 w-full justify-center'>
                        <img src={Flan} className='min-h-28 aspect-5/4 lg:aspect-3/2 xl:aspect-7/3 object-cover rounded-lg' style={{ 
                            WebkitMaskImage: 'linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.65) 90%)' }} />
                        <div className='flex absolute inset-0 justify-center mt-1.5'>
                            <p className='text-lg xs:text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 3xl:text-6xl font-semibold [text-shadow:2px_2px_2px_black]'>Desserts</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row'>
                    <div className='flex flex-col relative bg-black/80 rounded-lg pl-3 pr-3 pb-2 pt-3 md:pl-10 md:pr-10 3xl:p-10 w-full justify-center'>
                        <img src={SloppyJoes} className='min-h-28 aspect-5/4 lg:aspect-3/2 xl:aspect-7/3 object-cover rounded-lg' style={{ 
                            WebkitMaskImage: 'linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.75) 90%)' }} />
                        <div className='flex absolute inset-0 justify-center mt-1.5'>
                            <p className='text-lg xs:text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 3xl:text-6xl font-semibold [text-shadow:2px_2px_2px_black]'>International Food</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Guidance;