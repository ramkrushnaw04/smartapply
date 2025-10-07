import React from "react";
import { Link } from "react-router-dom";

export default function LoginNavbar({ isSignUp, setIsSignUp }) {
  return (
    <nav className="w-full sticky top-0 z-40 backdrop-blur-sm bg-white/80 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-6">
            <Link to="/" className="text-2xl font-extrabold text-gray-900">
              Smart
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400">
                Apply
              </span>
            </Link>
            <div className="hidden md:flex items-center gap-6 text-sm text-gray-700">
              <Link to="/landing" className="hover:text-gray-900">
                Home
              </Link>
              <a href="#jobs" className="hover:text-gray-900">
                Jobs
              </a>
              <a href="#how" className="hover:text-gray-900">
                How it works
              </a>
              <a href="#pricing" className="hover:text-gray-900">
                Pricing
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Toggle Sign In / Sign Up */}
            <div className="flex items-center gap-2 p-1 bg-gray-100 rounded-full">
              <button
                onClick={() => setIsSignUp(false)}
                className={`px-4 py-2 rounded-full font-medium text-sm transition-all ${
                  !isSignUp
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Sign In
              </button>
              <button
                onClick={() => setIsSignUp(true)}
                className={`px-4 py-2 rounded-full font-medium text-sm transition-all ${
                  isSignUp
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}