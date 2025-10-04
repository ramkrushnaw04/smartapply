import React from 'react';

export const TrustSection = () => {
  const companies = [
  { name: 'Microsoft', src: 'icons8-microsoft-48.png' },
  { name: 'Google', src: 'icons8-google-48.png' },
  { name: 'Meta', src: 'icons8-meta-48.png' },
  { name: 'Amazon', src: 'icons8-amazon-48.png' },
  { name: 'Apple', src: 'icons8-apple-48.png' },
  { name: 'NVIDIA', src: 'icons8-nvidia-48.png' },
  { name: 'Tesla', src: 'icons8-tesla-48.png' },
//   { name: 'TCS', color: 'bg-indigo-600', src: 'icons8-tcs-48.png' },
//   { name: 'Infosys', color: 'bg-blue-700', src: 'icons8-infosys-48.png' },
//   { name: 'HCL Technologies', color: 'bg-red-700', src: 'icons8-hcl-48.png' },
//   { name: 'Wipro', color: 'bg-teal-600', src: 'icons8-wipro-48.png' },
//   { name: 'Accenture', color: 'bg-purple-700', src: 'icons8-accenture-48.png' }
];


  return (
    <section className="relative  overflow-hidden py-16 min-h-[40vh] flex items-center">
      {/* Matching animated orb background */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-indigo-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-44 h-44 bg-blue-400/10 rounded-full blur-2xl animate-pulse" style={{ transform: 'translate(-50%,-50%)', animationDelay: '1s' }}></div>
        <div className="absolute top-40 left-1/4 w-2 h-2 bg-blue-500/40 rounded-full animate-ping"></div>
        <div className="absolute bottom-40 right-1/3 w-3 h-3 bg-indigo-500/30 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
      </div>
      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-12">
          <span className="bg-white/70 backdrop-blur-md text-blue-600 text-xs font-medium px-7 py-2 rounded-full border border-blue-200/50 shadow-md uppercase tracking-wide">
            Trusted by professionals
          </span>
          <h2 className="mt-5 text-3xl md:text-4xl font-bold text-gray-900 drop-shadow">
            At leading tech companies
          </h2>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-20 pt-2 ">
          {companies.map((company, index) => (
            <div
              key={index}
              className="group flex flex-col justify-center items-center space-y-3 transition-all duration-500 hover:opacity-100 hover:scale-105"
            >
              <img src={company.src} alt="" />
              <span className='text-gray-900 text-xl font-bold'> {company.name}</span>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-14 max-w-md rounded-3xl shadow-2xl border border-white/50 bg-white/50 backdrop-blur-xl px-10 py-7 flex flex-col items-center">
          <span className="text-lg font-bold text-blue-700">
            2,000+ professionals use our platform
          </span>
          <p className="mt-2 text-gray-700 font-medium text-center">
            Join smart talent at the world’s best companies.
          </p>
        </div>
      </div>
    </section>
  );
};
