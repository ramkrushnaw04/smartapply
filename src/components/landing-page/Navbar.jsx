import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

import { useSectionTextColor } from "@/hooks/useSectionTextColor";

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const textColor = useSectionTextColor()

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <nav
            id="navbar"
            className={`fixed top-0 left-0 right-0 z-50 rounded-full  transition-all duration-300 m-5 border-b
                ${isScrolled
                    ? " border-white/30 shadow-2xl "
                    : " border-white/20  "
                }
                ${isScrolled && !isMobile
                    ? " backdrop-blur-[7px] "
                    : " backdrop-blur-none "
                }    
                ${isMobile ? " m-[10px] " : (isScrolled ? " m-[10px] " : " m-[5px] ")}
            `}
        >
             
            <div className={`w-full mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between shadow-3xl ${isMobile ? "backdrop-blur-[7px] rounded-full " : "backdrop-blur-none "}`}>
                {/* Logo */}
                <div className="text-2xl font-bold text-indigo-500 px-3 drop-shadow cursor-pointer flex-shrink-0" >
                    SmartApply
                </div>

                {/* Desktop Menu */}
                {!isMobile && (
                    <div className={`flex items-center space-x-6 font-bold ${textColor}`} >
                        <a href="#" className=" hover:text-indigo-500 font-semibold transition-colors whitespace-nowrap">Jobs</a>
                        <a href="#" className=" hover:text-indigo-500 font-semibold transition-colors whitespace-nowrap">Companies</a>
                        <a href="#" className=" hover:text-indigo-500 font-semibold transition-colors whitespace-nowrap">Career Resources</a>
                        <a href="#" className=" hover:text-indigo-500 font-semibold transition-colors whitespace-nowrap">For Employers</a>
                    </div>
                )}

                {/* Desktop Login/Signup */}
                {!isMobile && (
                    <div className="flex items-center gap-3 ml-4 flex-shrink-0">
                        <button className="px-4 py-2 rounded-full font-semibold bg-white/10 text-indigo-500 border border-indigo-400 hover:bg-indigo-50 transition whitespace-nowrap">
                            Log In
                        </button>
                        <button className="px-6 py-2 rounded-full font-semibold bg-gradient-to-r from-indigo-400 to-pink-400 text-white shadow hover:opacity-90 transition whitespace-nowrap">
                            Sign Up
                        </button>
                    </div>
                )}

                {/* Mobile Menu Toggle Button */}
                {isMobile && (
                    <button
                        className="p-2 rounded-full transition-colors text-indigo-500 bg-white/10 "
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                )}
            </div>

            {/* Mobile Menu with animation */}
            {isMobile && isMenuOpen && (
                <div
                    className={`mt-4 bg-transparent backdrop-blur rounded-2xl p-6 space-y-4 shadow-2xl border border-white/30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
                    transform transition-all duration-300 ease-in-out origin-top
                    ${isMenuOpen ? "opacity-100 scale-100 max-h-screen" : "opacity-0 scale-95 max-h-0 overflow-hidden"}
                    ${textColor}
                    `}
                    aria-hidden={!isMenuOpen}
                >
                    <a href="#" className="block hover:text-indigo-500 font-semibold transition-colors">Jobs</a>
                    <a href="#" className="block hover:text-indigo-500 font-semibold transition-colors">Companies</a>
                    <a href="#" className="block hover:text-indigo-500 font-semibold transition-colors">Career Resources</a>
                    <a href="#" className="block hover:text-indigo-500 font-semibold transition-colors">For Employers</a>
                    <button className="w-full bg-white/40 text-indigo-500 border border-indigo-400 px-4 py-2 rounded-full font-semibold hover:bg-indigo-50 transition">
                        Log In
                    </button>
                    <button className="w-full bg-gradient-to-r from-indigo-400 to-pink-400 text-white px-6 py-2 rounded-full font-semibold shadow hover:opacity-90 transition">
                        Sign Up
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
