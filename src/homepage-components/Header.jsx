import React from 'react';
import { GiNoodles } from "react-icons/gi";
import { FaHome, FaBook, FaInstagram, FaFacebook, FaYoutube, FaPinterest } from "react-icons/fa";
import { IoPerson, IoSearch } from "react-icons/io5";

const Header = () => {
    return (
        <div class="flex flex-row w-full justify-between px-4 py-4 gap-10 border-b-black border-b-3">
            <div class="flex flex-row gap-10">
                <div class="flex flex-row pr-4">
                    <GiNoodles class="text-black w-20 h-20" />
                    <div class="flex flex-col">
                        <p class="text-4xl font-semibold text-left text-chilired">Eat With</p>
                        <p class="text-4xl font-semibold text-left text-chilired">Emily</p>
                    </div>
                </div>
                <div class="flex flex-row space-x-6 gap-10">
                    <div class="flex flex-row items-center gap-1">
                        <FaHome class="text-black w-12 h-12"></FaHome>
                        <button class="bg-transparent text-3xl font-semibold text-black">Home</button>
                    </div>
                    <div class="flex flex-row items-center gap-1">
                        <FaBook class="text-black w-10 h-10"></FaBook>
                        <button class="bg-transparent text-3xl font-semibold text-black">Recipes</button>
                    </div>
                    <div class="flex flex-row items-center gap-1">
                        <IoPerson class="text-black w-11 h-11"></IoPerson>
                        <button class="bg-transparent text-3xl font-semibold text-black">About</button>
                    </div>
                </div>
            </div>
            <div class="flex flex-row items-center gap-3">
                <FaInstagram class="text-chilired w-8 h-8"></FaInstagram>
                <FaFacebook class="text-chilired w-8 h-8"></FaFacebook>
                <FaYoutube class="text-chilired w-8 h-8"></FaYoutube>
                <FaPinterest class="text-chilired w-8 h-8"></FaPinterest>
                <IoSearch class="text-chilired w-12 h-12"></IoSearch>
            </div>
        </div>
    );
};

export default Header;