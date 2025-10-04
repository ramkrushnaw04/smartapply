import React from "react";

export default function JobCard() {
  return (
    <div className="max-w-xs w-full bg-white rounded-3xl border-white p-5 shadow-md flex flex-col gap-3"
      style={{
        borderImage: 'linear-gradient(to top right, #a5b4fc, #d8b4fe, #fbcfe8) 1'
      }}>
      {/* Company Logo and Name */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-br from-indigo-800 via-blue-900 to-purple-900">
          {/* Replace with your actual logo */}
          <img
            src="https://avatars.githubusercontent.com/u/9919?s=200&v=4"
            alt="Company Logo"
            className="w-10 h-10 rounded-full"
          />
        </div>
        <div>
          <div className="font-semibold text-lg text-gray-900">TechNova</div>
          <div className="flex items-center gap-1 text-gray-500 text-xs mt-1">
            <svg className="w-4 h-4 mr-1 inline" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 2C8.13401 2 5 5.13401 5 9C5 13.86 12 22 12 22C12 22 19 13.86 19 9C19 5.13401 15.866 2 12 2Z" /><circle cx="12" cy="9" r="2.5" /></svg>
            San Francisco, USA
          </div>
        </div>
      </div>

      {/* Job Title */}
      <div className="font-bold text-lg text-gray-900 mt-1 mb-1">Front-End Developer</div>

      {/* Tags */}
      <div className="flex gap-2 items-center mb-1">
        <span className="bg-gray-100 text-gray-500 px-3 py-1 rounded-full text-xs font-semibold">Full Time</span>
      </div>
      <div className="flex gap-4 text-gray-700 text-sm items-center">
        <span className="flex items-center gap-1">
          <svg className="w-4 h-4 inline" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"/></svg>
          Permanent
        </span>
        <span className="flex items-center gap-1">
          <svg className="w-4 h-4 inline" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c2.21 0 4-1.79 4-4S14.21 0 12 0 8 1.79 8 4s1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2c0 2.21 5.33 4 8 4s8-1.79 8-4v-2c0-2.66-5.33-4-8-4z"/></svg>
          $6,500–10,000/Month
        </span>
      </div>

      {/* Description */}
      <div className="mt-3 mb-2 text-gray-700 text-sm">
        Develop Responsive User Interfaces Using React. Collaborate With Designers And Backend Teams To Improve UX Across Platforms.
      </div>

      {/* Button & date */}
      <div className="flex items-center justify-between mt-2">
        <button className="px-5 py-2 rounded-full border border-indigo-200 bg-white font-semibold text-sm shadow transition hover:opacity-90 
          text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
          Apply Now
        </button>
        <span className="text-xs text-gray-400 ml-2">3 days ago</span>
      </div>
    </div>
  );
}
