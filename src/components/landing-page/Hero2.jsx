import React from "react";
// Import SVGs for fingerprint and star here

const HeroSection = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
    <div className="text-center">
      <h1 className="text-[5vw] font-light leading-tight text-gray-400">
        The future<br />
        <span className="">of development</span>
      </h1>
      <div className="flex items-center justify-center mt-2 text-[3vw] font-medium">
        <span className="text-gray-400">is</span>
        {/* Replace below divs with <img src={fingerprintSVG} ... /> etc. as needed */}
        <span className="mx-2">
          {/* Fingerprint SVG */}
          <svg width="40" height="40" fill="none" viewBox="0 0 24 24"><path d="M..." fill="#47FFC6"/></svg>
        </span>
        <span className="text-white mx-1 font-semibold">human</span>
        <span className="mx-2 text-white text-[2vw] font-light">+</span>
        <span className="mx-2">
          {/* Star SVG */}
          <svg width="40" height="40" fill="none" viewBox="0 0 24 24"><path d="M..." fill="#47FFC6"/></svg>
        </span>
        <span className="text-gray-300 font-semibold ml-2">AI</span>
      </div>
      <p className="mt-5 text-gray-400 text-lg max-w-xl mx-auto">
        We help you map the skills you need, track the skills you have, and close your gaps to thrive in a GenAI world.
      </p>
      <button
        className="mt-8 px-8 py-3 rounded-md bg-black text-white border border-[#47FFC6] hover:bg-[#101d1b] transition font-medium shadow-lg shadow-[#47FFC644]"
      >
        Join The Community
      </button>
    </div>
  </div>
);

export default HeroSection;
