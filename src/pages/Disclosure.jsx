import { React, useState } from 'react';
import Footer from "../homepage-components/Footer";
import Header from "../homepage-components/Header";
import Sidebar from '../homepage-components/Sidebar';

const Disclosure = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="flex flex-col w-full min-h-screen gap-3">
            <Header isOpen={isOpen} setIsOpen={setIsOpen} />
            <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
            <div className="flex flex-col mx-15 gap-7 mt-3 min-h-screen">
                <div className="flex flex-col gap-2">
                    <p className="flex text-chilired text-left text-2xl/5 xs:text-2xl/7 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl xl:mr-6 2xl:text-5xl 3xl:text-8xl font-bold">Disclosure</p>
                    <p className="text-black text-xl xl:text-2xl">Eat With Emily is a recipe website that include various forms of monetization.</p>
                </div>
                <div className="flex flex-col gap-2">
                    <p className="text-chilired font-bold text-2xl xl:text-3xl">Advertising</p>
                    <p className="text-black text-xl xl:text-2xl">This site displays third-party advertisements through Google AdSense. These ads are clearly marked and may use cookies or web beacons to collect non-personalized data in order to serve relevant content.</p>
                </div>
                <div className="flex flex-col gap-2">
                    <p className="text-chilired font-bold text-2xl xl:text-3xl">Affiliate Links</p>
                    <p className="text-black text-xl xl:text-2xl">Some links on this website may be affiliate links. This means that if you click on a link and make a purchase, I may earn a small commission at no extra cost to you. As an Amazon Associate, I may earn from qualifying purchases (if/when this program is implemented).</p>
                    <p className="text-black text-xl xl:text-2xl">I only promote products or services that I personally use or believe would be of value to my readers.</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Disclosure;