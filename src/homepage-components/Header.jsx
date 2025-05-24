import { React, useState } from 'react';
import { GiNoodles } from "react-icons/gi";
import { FaHome, FaBook, FaInstagram, FaFacebook, FaYoutube, FaPinterest, FaBars } from "react-icons/fa";
import { IoPerson, IoSearch } from "react-icons/io5";
import { LuSalad } from "react-icons/lu";
import { TbBowlChopsticks } from "react-icons/tb";
import { Link } from 'react-router-dom';

const Header = ({ isOpen, setIsOpen }) => {
    return (
        <div className="flex flex-row w-full justify-between border-b-black border-b-3 pt-2 pb-1 pr-4 pl-2 xl:pr-10 xl:pl-8 2xl:pr-15 2xl:pl-11 3xl:pr-22 3xl:pl-20">
            <div className="flex flex-row gap-2 pl-2">
                <button>
                    <FaBars className="flex text-black self-center w-7 h-7 sm:w-9 sm:h-9 lg:hidden cursor-pointer" onClick={() => setIsOpen(true)}></FaBars>
                </button>
                <div className="flex flex-row items-center pr-0">
                    <GiNoodles className="text-black self-center w-11 h-11 sm:w-13 sm:h-13 lg:w-12 lg:h-12 2xl:w-14 2xl:h-14" />
                    <div className="flex flex-col self-center leading-4">
                        <p className="text-lg/4 sm:text-2xl/5 lg:text-2xl/5 2xl:text-3xl/7 font-semibold text-left text-chilired">Eat With</p>
                        <p className="text-lg/4 sm:text-2xl/5 lg:text-2xl/5 2xl:text-3xl/7 font-semibold text-left text-chilired">Emily</p>
                    </div>
                </div>
            </div>
            <div className="hidden lg:flex xl:hidden flex-row space-x-0 gap-10">
                <div className="flex flex-row items-center gap-1">
                    <FaHome className="text-black w-10 h-10"></FaHome>
                    <button className="bg-transparent text-3xl font-semibold text-black">Home</button>
                </div>
                <div className="flex flex-row items-center gap-1">
                    <FaBook className="text-black w-8 h-8"></FaBook>
                    <button className="bg-transparent text-2xl font-semibold text-black">Recipes</button>
                </div>
                <div className="flex flex-row items-center gap-1">
                    <IoPerson className="text-black w-9 h-9"></IoPerson>
                    <button className="bg-transparent text-2xl font-semibold text-black">About</button>
                </div>
            </div>
            <div className="hidden xl:flex flex-row gap-10 3xl:gap-20">
                <Link to="/" className="flex flex-row items-center gap-1">
                    <FaHome className="text-black w-9 h-9"></FaHome>
                    <button className="bg-transparent text-2xl 2xl:text-3xl font-semibold text-black">Home</button>
                </Link>
                <Link to="/pages/vietnamese-recipes" className="flex flex-row items-center gap-1">
                    <TbBowlChopsticks className="text-black w-9 h-9 2xl:w-10 2xl:h-10"></TbBowlChopsticks>
                    <button className="bg-transparent text-2xl 2xl:text-3xl font-semibold text-black">Vietnamese</button>
                </Link>
                <Link to="/pages/healthy-recipes" className="flex flex-row items-center gap-1">
                    <LuSalad className="text-black w-9 h-9 2xl:w-10 2xl:h-10"></LuSalad>
                    <button className="bg-transparent text-2xl 2xl:text-3xl font-semibold text-black">Healthy</button>
                </Link>
                <Link to="/pages/international-recipes" className="flex flex-row items-center gap-1">
                    <FaBook className="text-black w-8 h-8 2xl:w-8 2xl:h-8"></FaBook>
                    <button className="bg-transparent text-2xl 2xl:text-3xl font-semibold text-black">Other</button>
                </Link>
                <div className="flex flex-row items-center gap-1">
                    <IoPerson className="text-black w-10 h-10 2xl:w-9 2xl:h-9"></IoPerson>
                    <button className="bg-transparent text-2xl 2xl:text-3xl font-semibold text-black">About</button>
                </div>
            </div>
            <div className="flex flex-row flex-wrap items-center pr-2 gap-2">
                <FaInstagram className="text-chilired w-5 h-5 sm:w-8 sm:h-8"></FaInstagram>
                <FaFacebook className="text-chilired w-5 h-5 sm:w-8 sm:h-8"></FaFacebook>
                <FaYoutube className="text-chilired w-5 h-5 sm:w-8 sm:h-8"></FaYoutube>
                <FaPinterest className="text-chilired w-5 h-5 sm:w-8 sm:h-8"></FaPinterest>
                {/* <IoSearch className="text-chilired w-9 h-9 sm:w-12 sm:h-12 lg:w-14 lg:h-14"></IoSearch> */}
            </div>
        </div>
    );
};

export default Header;