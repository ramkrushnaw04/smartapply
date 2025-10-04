import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ContrastText from "./utils/ContrastText";

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    function getContrastColor(hex) {
        const r = parseInt(hex.substr(1, 2), 16);
        const g = parseInt(hex.substr(3, 2), 16);
        const b = parseInt(hex.substr(5, 2), 16);
        const brightness = (r * 299 + g * 587 + b * 114) / 1000;
        return brightness > 128 ? "black" : "white";
    }

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={` fixed top-0 left-0 bg-transparent right-0 z-50 transition-all duration-300 m-5 rounded-full 
                ${isScrolled
                    ? " backdrop-blur-[7px] m-[10px] shadow-2xl border-b border-white/30"
                    : " backdrop-blur-none m-[5px] border-b border-white/20"
                }`
            }
        >
            <div className="mx-auto px-6 py-3">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="text-2xl font-bold text-indigo-500 px-3 drop-shadow cursor-pointer">
                        SmartApp.ly
                    </div>

                    {/* Desktop Menu */}
                    <ContrastText>
                        <div className="md:flex items-center space-x-8 font-bold" >
                            <a href="#" className="navbar-links text-gray-900 hover:text-indigo-500 font-semibold transition-colors">Jobs</a>
                            <a href="#" className="navbar-links text-gray-900 hover:text-indigo-500 font-semibold transition-colors">Companies</a>
                            <a href="#" className="navbar-links text-gray-900 hover:text-indigo-500 font-semibold transition-colors">Career Resources</a>
                            <a href="#" className="navbar-links text-gray-900 hover:text-indigo-500 font-semibold transition-colors">For Employers</a>
                        </div>

                    </ContrastText>

                    {/* Right aligned Login/Signup buttons */}
                    <div className="md:flex items-center gap-3 ml-4">
                        <button className="px-4 py-2 rounded-full font-semibold bg-white/40 text-indigo-500 border border-indigo-400 hover:bg-indigo-50 transition">
                            Log In
                        </button>
                        <button className="px-6 py-2 rounded-full font-semibold bg-gradient-to-r from-indigo-400 to-pink-400 text-white shadow hover:opacity-90 transition">
                            Sign Up
                        </button>
                    </div>

                    {/* Mobile Menu Toggle Button */}
                    <button
                        className={`md:hidden p-2 rounded-full transition-colors ${isScrolled ? "text-indigo-500 bg-white/60" : "text-indigo-500 bg-white/40"
                            }`}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden mt-4 bg-white/50 backdrop-blur rounded-2xl p-6 space-y-4 shadow-2xl border border-white/30">
                        <a href="#" className="block text-gray-900 hover:text-indigo-500 font-semibold transition-colors">Jobs</a>
                        <a href="#" className="block text-gray-900 hover:text-indigo-500 font-semibold transition-colors">Companies</a>
                        <a href="#" className="block text-gray-900 hover:text-indigo-500 font-semibold transition-colors">Career Resources</a>
                        <a href="#" className="block text-gray-900 hover:text-indigo-500 font-semibold transition-colors">For Employers</a>
                        <button className="w-full bg-white/40 text-indigo-500 border border-indigo-400 px-4 py-2 rounded-full font-semibold hover:bg-indigo-50 transition">
                            Log In
                        </button>
                        <button className="w-full bg-gradient-to-r from-indigo-400 to-pink-400 text-white px-6 py-2 rounded-full font-semibold shadow hover:opacity-90 transition">
                            Sign Up
                        </button>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
