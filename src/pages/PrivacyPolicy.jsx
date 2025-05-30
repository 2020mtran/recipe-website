import { React, useState } from 'react';
import Footer from "../homepage-components/Footer";
import Header from "../homepage-components/Header";
import Sidebar from '../homepage-components/Sidebar';

const PrivacyPolicy = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="flex flex-col w-full min-h-screen gap-3">
            <Header isOpen={isOpen} setIsOpen={setIsOpen} />
            <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
            <div className="flex flex-col mx-15 gap-7 mt-3 mb-3 min-h-screen">
                <div className="flex flex-col gap-2">
                    <p className="flex text-chilired text-left text-2xl/5 xs:text-2xl/7 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl xl:mr-6 2xl:text-5xl 3xl:text-8xl font-bold">Privacy Policy</p>
                </div>
                <div className="flex flex-col gap-2">
                    <p className="text-chilired font-bold text-2xl xl:text-3xl">Effective Date: June 2025</p>
                    <p className="text-black text-xl xl:text-2xl">EatWithEmily.com values your privacy. This Privacy Policy explains how we collect, use, and protect your personal information when you visit https://www.eatwithemily.com</p>
                </div>
                <div className="flex flex-col gap-2">
                    <p className="text-chilired font-bold text-2xl xl:text-3xl">How We Use Your Information</p>
                    <p className="text-black text-xl xl:text-2xl">To personalize your experience on our site.</p>
                    <p className="text-black text-xl xl:text-2xl">To understand how users interact with our content so we can improve our offerings.</p>
                    <p className="text-black text-xl xl:text-2xl">To serve ads relevant to your interests via third-party ad networks.</p>
                </div>
                <div className="flex flex-col gap-2">
                    <p className="text-chilired font-bold text-2xl xl:text-3xl">Google AdSense</p>
                    <p className="text-black text-xl xl:text-2xl">We use Google AdSense to serve ads. Google may use cookies or web beacons to collect non-personally identifiable information about your visits to this and other websites to provide advertisements about goods and services of interest to you.</p>
                    <p className="text-black text-xl xl:text-2xl">You can learn more about how Google uses your data here: https://policies.google.com/technologies/ads</p>
                </div>
                <div className="flex flex-col gap-2">
                    <p className="text-chilired font-bold text-2xl xl:text-3xl">Affiliate Links</p>
                    <p className="text-black text-xl xl:text-2xl">Some links on this site may be affiliate links. This means we may earn a commission if you click a link and make a purchase — at no additional cost to you. While we are not currently affiliated with Amazon, we may join their affiliate program in the future.</p>
                </div>
                <div className="flex flex-col gap-2">
                    <p className="text-chilired font-bold text-2xl xl:text-3xl">Cookies</p>
                    <p className="text-black text-xl xl:text-2xl">The Site uses cookies to improve your browsing experience. You may choose to disable cookies through your browser settings, though doing so may limit some features of the Site.</p>
                </div>
                <div className="flex flex-col gap-2">
                    <p className="text-chilired font-bold text-2xl xl:text-3xl">Third-Party Services</p>
                    <p className="text-black text-xl xl:text-2xl">We may include or offer third-party products or services on our website. These third parties have separate and independent privacy policies, and we are not responsible for the content or activities of these linked sites.</p>
                </div>
                <div className="flex flex-col gap-2">
                    <p className="text-chilired font-bold text-2xl xl:text-3xl">Your Consent</p>
                    <p className="text-black text-xl xl:text-2xl">By using our website, you consent to our Privacy Policy.</p>
                </div>
                <div className="flex flex-col gap-2">
                    <p className="text-chilired font-bold text-2xl xl:text-3xl">Updates to This Policy</p>
                    <p className="text-black text-xl xl:text-2xl">We may update this Privacy Policy from time to time. All updates will be posted on this page with a revised effective date.</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default PrivacyPolicy;