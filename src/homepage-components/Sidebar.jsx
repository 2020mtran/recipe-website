import { React, useRef, useEffect } from 'react';
import { FaHome, FaBook } from "react-icons/fa";
import { IoPerson, IoSearch } from "react-icons/io5";
import { TbBowl, TbBowlChopsticks } from "react-icons/tb";
import { LuSalad, LuDessert } from "react-icons/lu";
import { FaEarthAmericas } from "react-icons/fa6";

const Sidebar = ({ isOpen, setIsOpen }) => {
    const sidebarRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen])

    return (
        <>
            {isOpen && (
                <div className='fixed inset-0 bg-black/20 backdrop-blur-xs transition-opacity duration-300 z-[9998]' onClick={() => setIsOpen(false)}></div>
            )}
            <div className={`flex flex-col fixed top-0 left-0 h-full w-66 pt-3 bg-chilired 
            transform ${isOpen ? "transform-x-0" : "-translate-x-full"} 
            transition-transform duration-300 ease-in-out z-[9999]`} ref={sidebarRef}>
                <div className="flex flex-col self-center space-x-0 gap-2">
                    <div className="flex flex-row items-center gap-1 pt-2 pb-2 border-b border-b-black/50">
                        <FaHome className="text-snowpink w-8 h-8"></FaHome>
                        <button className="bg-transparent text-2xl font-semibold text-snowpink">Home</button>
                    </div>
                    <div className="flex flex-row items-center gap-1 pt-0 pb-2 border-b border-b-black/50">
                        <TbBowlChopsticks className="text-snowpink w-8 h-8"></TbBowlChopsticks>
                        <button className="bg-transparent text-2xl font-semibold text-snowpink">Vietnamese Recipes</button>
                    </div>
                    <div className="flex flex-row items-center gap-1 pt-0 pb-2 border-b border-b-black/50">
                        <LuSalad className="text-snowpink w-8 h-8"></LuSalad>
                        <button className="bg-transparent text-2xl font-semibold text-snowpink">Healthy Recipes</button>
                    </div>
                    <div className="flex flex-row items-center gap-1 pt-0 pb-2 border-b border-b-black/50">
                        <LuDessert className="text-snowpink w-8 h-8"></LuDessert>
                        <button className="bg-transparent text-2xl font-semibold text-snowpink">Dessert Recipes</button>
                    </div>
                    <div className="flex flex-row items-center gap-1 pt-0 pb-2 border-b border-b-black/50">
                        <FaEarthAmericas className="text-snowpink w-8 h-8"></FaEarthAmericas>
                        <button className="bg-transparent text-2xl font-semibold text-snowpink">International Recipes</button>
                    </div>
                    <div className="flex flex-row items-center gap-1 pt-0 pb-2">
                        <IoPerson className="text-snowpink w-9 h-9"></IoPerson>
                        <button className="bg-transparent text-2xl font-semibold text-snowpink">About</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;