import { Link } from 'react-router-dom';

const Guidance = () => {
    return (
        <div className='flex flex-col p-3 sm:p-5 md:p-7 lg:p-9 xl:p-11 2xl:p-13 3xl:p-14 gap-1 md:gap-3 2xl:gap-5 3xl:gap-7 2xl:pr-16 2xl:pl-14 3xl:pr-22 3xl:pl-20'>
            <p className='text-black font-bold text-lg md:text-3xl lg:text-4xl xl:text-5xl 3xl:text-6xl'>Let's Cook Some...</p>
            <div className='grid grid-cols-2 grid-rows-2 gap-2 md:gap-x-20'>
                <Link to="/pages/vietnamese-recipes" className='flex flex-row'>
                    <div className='flex flex-col relative bg-black/80 rounded-lg pl-3 pr-3 pb-2 pt-3 md:pl-10 md:pr-10 3xl:p-10 w-full justify-center'>
                        <img src={"https://res.cloudinary.com/eatwithemilyimages/image/upload/v1747178017/20161119_193229-1-768x734_kdrsne.jpg"} className='min-h-28 aspect-5/4 lg:aspect-3/2 xl:aspect-7/3 object-cover rounded-lg' style={{ 
                            WebkitMaskImage: 'linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.55) 90%)' }} />
                        <div className='flex absolute inset-0 justify-center mt-1.5'>
                            <p className=' text-lg xs:text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 3xl:text-6xl font-semibold [text-shadow:2px_2px_2px_black] text-white visited:text-white'>Vietnamese Food</p>
                        </div>
                    </div>
                </Link>
                <Link to="/pages/healthy-recipes" className='flex flex-row'>
                    <div className='flex flex-col relative bg-black/80 rounded-lg pl-3 pr-3 pb-2 pt-3 md:pl-10 md:pr-10 3xl:p-10 w-full justify-center'>
                            <img src={"https://res.cloudinary.com/eatwithemilyimages/image/upload/v1747964143/20170423_154313-768x576_rkykkq.jpg"} className='min-h-28 aspect-5/4 lg:aspect-3/2 xl:aspect-7/3 object-cover rounded-lg' style={{ 
                                WebkitMaskImage: 'linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.50) 90%)' }} />
                            <div className='flex absolute inset-0 justify-center mt-1.5'>
                                <p className='text-lg xs:text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 3xl:text-6xl font-semibold [text-shadow:2px_2px_2px_black] text-white visited:text-white'>Healthy Food</p>
                            </div>
                    </div>
                </Link>
                <Link to="/pages/international-recipes" className='flex flex-row'>
                    <div className='flex flex-col relative bg-black/80 rounded-lg pl-3 pr-3 pb-2 pt-3 md:pl-10 md:pr-10 3xl:p-10 w-full justify-center'>
                        <img src={"https://res.cloudinary.com/eatwithemilyimages/image/upload/v1748120536/IMG_20210127_232519_157_nzfbve.jpg"} className='min-h-28 aspect-5/4 lg:aspect-3/2 xl:aspect-7/3 object-cover rounded-lg' style={{ 
                            WebkitMaskImage: 'linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.65) 90%)' }} />
                        <div className='flex absolute inset-0 justify-center mt-1.5'>
                            <p className='text-lg xs:text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 3xl:text-6xl font-semibold [text-shadow:2px_2px_2px_black] text-white visited:text-white'>Chinese Food</p>
                        </div>
                    </div>
                </Link>
                <Link to="/pages/international-recipes" className='flex flex-row'>
                    <div className='flex flex-col relative bg-black/80 rounded-lg pl-3 pr-3 pb-2 pt-3 md:pl-10 md:pr-10 3xl:p-10 w-full justify-center'>
                        <img src={"https://res.cloudinary.com/eatwithemilyimages/image/upload/v1748118703/20210306_193102_resized_xta0oh.jpg"} className='min-h-28 aspect-5/4 lg:aspect-3/2 xl:aspect-7/3 object-cover rounded-lg' style={{ 
                            WebkitMaskImage: 'linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.75) 90%)' }} />
                        <div className='flex absolute inset-0 justify-center mt-1.5'>
                            <p className='text-lg xs:text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 3xl:text-6xl font-semibold [text-shadow:2px_2px_2px_black] text-white visited:text-white'>International Food</p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Guidance;