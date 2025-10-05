import React from "react";

const HighestPayingSectorsCard = () => (
  <div className={`w-80 bg-white rounded-2xl shadow-md h-[300px] p-5 border hover:shadow-lg
        transform transition-transform ease-in-out duration-500`} >
    <h3 className="font-bold text-lg mb-4">Highest-Paying Sectors</h3>
    {/* SVG Chart */}
    <svg width="260" height="60" className="mb-3">
      <defs>
        <linearGradient id="sectorGradient" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#93c5fd" stopOpacity="0.7"/>
          <stop offset="100%" stopColor="#fff" stopOpacity="0.2"/>
        </linearGradient>
      </defs>
      <path
        d="M10,45 Q60,20 100,35 Q150,55 200,40 Q230,10 250,50"
        stroke="#2563eb"
        strokeWidth="3"
        fill="none"
      />
      <path
        d="M10,45 Q60,20 100,35 Q150,55 200,40 Q230,10 250,50 L250,60 L10,60 Z"
        fill="url(#sectorGradient)" opacity="0.7"
      />
    </svg>
    <div className="space-y-1 text-base">
      <div className="flex justify-between">
        <span>UI/UX Designer</span>
        <span className="font-medium">$6,500/Month</span>
      </div>
      <div className="flex justify-between">
        <span>Data Scientist</span>
        <span className="font-medium">$7,200/Month</span>
      </div>
    </div>
    <div className="mt-2 text-green-600 text-sm font-semibold">
      +11% job listing this month
    </div>
  </div>
);

export default HighestPayingSectorsCard;
