import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useSectionTextColor } from "@/hooks/useSectionTextColor";

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const textColor = useSectionTextColor();
    const navigate = useNavigate();

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
        <>
            {/* Mobile Navbar */}
            {isMobile && (
                <motion.nav
                    id="navbar"
                    initial={false}
                    className={`fixed top-0 left-0 right-0 z-50 m-[10px] rounded-[2rem] transition-all duration-300
                        ${(isScrolled || isMenuOpen) ? "backdrop-blur-[5px] border border-white/30 shadow-2xl" : "border border-white/20"}
                    `}
                >
                    {/* Top bar */}
                    <div className="w-full px-4 py-3 flex items-center justify-between">
                        {(isScrolled || isMenuOpen) ? (
                            <button
                                className="p-2 rounded-full transition-all duration-200 text-black bg-white/10 hover:bg-white/20"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                aria-label="Toggle menu"
                            >
                                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                        ) : (
                            <div className="font-extrabold text-2xl sm:text-[1.7rem] leading-[2.1rem] bg-gradient-to-r from-purple-400 via-pink-400 to-orange-300 bg-clip-text text-transparent">
                                SmartApply
                            </div>
                        )}

                        {(isScrolled || isMenuOpen) ? (
                            <div className="flex items-center gap-2 flex-shrink-0">
                                <button className="px-3 py-1.5 rounded-full text-sm font-semibold bg-white text-black border border-gray-300 hover:bg-gray-100 transition-all duration-200 whitespace-nowrap">
                                    Log In
                                </button>
                                <button className="px-4 py-1.5 rounded-full text-sm font-semibold bg-black text-white shadow hover:bg-gray-800 transition-all duration-200 whitespace-nowrap">
                                    Sign Up
                                </button>
                            </div>
                        ) : (
                            <button
                                className="p-2 rounded-full transition-all duration-200 text-black bg-white/10 hover:bg-white/20"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                aria-label="Toggle menu"
                            >
                                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                        )}
                    </div>

                    {/* Expanded Menu */}
                    <AnimatePresence initial={false}>
                        {isMenuOpen && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ 
                                    height: { duration: 0.4, ease: "easeInOut" },
                                    opacity: { duration: 0.3 }
                                }}
                                className="overflow-hidden"
                            >
                                <div className={`px-4 pb-6 space-y-4 ${textColor}`}>
                                    <div className="h-px bg-white/20 mb-4"></div>
                                    <a
                                        href="#"
                                        className="block py-3 px-6 border-gray-200 border-[1px] rounded-full hover:text-indigo-500 hover:bg-white/10 font-semibold transition-all duration-200"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Jobs
                                    </a>
                                    <a
                                        href="#"
                                        className="block py-3 px-6 border-gray-200 border-[1px] rounded-full hover:text-indigo-500 hover:bg-white/10 font-semibold transition-all duration-200"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Companies
                                    </a>
                                    <a
                                        href="#"
                                        className="block py-3 px-6 border-gray-200 border-[1px] rounded-full hover:text-indigo-500 hover:bg-white/10 font-semibold transition-all duration-200"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Career Resources
                                    </a>
                                    <a
                                        href="#"
                                        className="block py-3 px-6 border-gray-200 border-[1px] rounded-full hover:text-indigo-500 hover:bg-white/10 font-semibold transition-all duration-200"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        For Employers
                                    </a>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.nav>
            )}

            {/* Desktop Navbar */}
            {!isMobile && (
                <motion.nav
                    id="navbar"
                    initial={false}
                    className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 rounded-full
                        ${isScrolled ? "m-[10px] backdrop-blur-[5px] border border-white/30 shadow-2xl" : "m-[5px] border border-white/20"}
                    `}
                >
                    <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
                        {/* Logo */}
                        <div className="font-extrabold text-2xl sm:text-[1.7rem] leading-[2.1rem] bg-gradient-to-r from-purple-400 via-pink-400 to-orange-300 bg-clip-text text-transparent">
                            SmartApply
                        </div>

                        {/* Desktop Menu */}
                        <div className={`flex items-center space-x-6 font-bold ${textColor}`}>
                            <a href="#" className="hover:text-pink-400 font-semibold transition-colors duration-200 whitespace-nowrap">Jobs</a>
                            <a href="#" className="hover:text-pink-400 font-semibold transition-colors duration-200 whitespace-nowrap">Companies</a>
                            <a href="#" className="hover:text-pink-400 font-semibold transition-colors duration-200 whitespace-nowrap">Career Resources</a>
                            <a href="#" className="hover:text-pink-400 font-semibold transition-colors duration-200 whitespace-nowrap">For Employers</a>
                        </div>

                        {/* Desktop Login/Signup */}
                        <div className="flex items-center gap-3 ml-4 flex-shrink-0">
                            <button 
                                className="px-4 py-2 rounded-full font-semibold bg-white text-black border border-gray-300 hover:bg-gray-100 transition-all duration-200 whitespace-nowrap"
                                onClick={() => navigate('/login')}
                            >
                                Log In
                            </button>
                            <button 
                                className="px-6 py-2 rounded-full font-semibold bg-black text-white shadow hover:bg-gray-800 transition-all duration-200 whitespace-nowrap"
                                onClick={() => navigate('/login')}
                            >
                                Sign Up
                            </button>
                        </div>
                    </div>
                </motion.nav>
            )}
        </>
    );
};

export default Navbar;
