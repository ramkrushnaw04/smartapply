import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed bg-green-500 top-0 left-0 right-0 z-50 transition-all duration-300 m-7 rounded-full  ${
      isScrolled 
        ? 'bg-white/40 backdrop-blur-lg shadow-2xl border-b border-gray-200/30' 
        : 'bg-transparent'
    }`}>
      <div className=" mx-auto px-4 py-3 ">
        <div className="flex items-center justify-between ">
          <div className={`text-2xl px-3 font-bold transition-colors text-blue-600`}>
            SmartApply
          </div>
          
          
          {/* Desktop Menu */}
          <div className="flex items-center space-x-8">
            <a href="#jobs" className={` text-gray-900 hover:text-blue-600   font-bold`}>
              How it works
            </a>
            <a href="#" className={` text-gray-900 hover:text-blue-600  font-bold`}>
              Pricing
            </a>
            <a href="#" className={` text-gray-900 hover:text-blue-600  font-bold`}>
              About
            </a>
            <a href="#" className={` text-gray-900 hover:text-blue-600  font-bold`}>
              Get Started
            </a>
          </div>

          {/* Right aligned Login button */}
          <div className=" md:block ml-8">

            <button className='px-4 py-2 rounded-full font-semibold transition-all bg-blue-400/5 backdrop-blur-md text-blue-600 '>
                Login
            </button>
          </div>

          

          {/* Mobile Menu Button */}
          <button 
            className={`md:hidden transition-colors ${
              isScrolled ? 'text-blue-600' : 'text-white/90'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-white/40 backdrop-blur-lg rounded-2xl p-4 space-y-4 shadow-2xl border border-white/30">
            <a href="#" className="block text-gray-900 hover:text-blue-600 transition-colors">How it works</a>
            <a href="#" className="block text-gray-900 hover:text-blue-600 transition-colors">Pricing</a>
            <a href="#" className="block text-gray-900 hover:text-blue-600 transition-colors">About</a>
            <button className="w-full bg-white/30 backdrop-blur-md text-blue-600 px-4 py-2 rounded-2xl hover:bg-white/50 transition-colors">
              Login
            </button>
            <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-2xl font-medium hover:shadow-2xl transition-all">
              Get Started
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
