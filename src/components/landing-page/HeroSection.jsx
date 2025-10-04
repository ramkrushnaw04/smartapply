import React, { useState, useEffect } from 'react';
import { ArrowRight, Search } from 'lucide-react';

export const HeroSection = () => {
  const [currentStat, setCurrentStat] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const stats = [
    { label: 'Applications', value: '+2.5K', change: '+15%' },
    { label: 'Success Rate', value: '94%', change: '+8%' },
    { label: 'Time Saved', value: '80hrs', change: '+25%' }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);

    const handleMouseMove = (e) => {
      setMousePosition({ 
        x: (e.clientX / window.innerWidth) * 100, 
        y: (e.clientY / window.innerHeight) * 100 
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      clearInterval(interval);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <header className="relative  overflow-hidden pt-20 min-h-screen flex items-center">
      {/* Blue blur effects in background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large blue blur orbs */}
        <div className="absolute top-20 left-10  w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-indigo-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-400/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Subtle gradient overlay that follows mouse */}
        {/* <div 
          className="absolute inset-0 transition-all duration-1000 ease-out opacity-30"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)`
          }}
        ></div> */}
      </div>

      {/* Geometric decorations */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating elements */}
        <div className="absolute top-32 right-20 w-32 h-32 bg-blue-500/5 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 left-20 w-20 h-20 bg-indigo-500/10 rounded-full animate-bounce" style={{ animationDuration: '3s' }}></div>
        <div className="absolute bottom-32 left-1/3 w-16 h-16 bg-blue-400/8 rounded-2xl rotate-45 animate-spin" style={{ animationDuration: '8s' }}></div>
        
        {/* Small floating dots */}
        <div className="absolute top-40 left-1/4 w-2 h-2 bg-blue-500/40 rounded-full animate-ping"></div>
        <div className="absolute bottom-40 right-1/3 w-3 h-3 bg-indigo-500/30 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-16">
        <div className={`max-w-4xl mx-auto space-y-6 text-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          
          {/* Oval banner just above heading */}
          <div className="inline-block bg-blue-600/100 text-white px-6 py-2 rounded-full shadow-lg font-semibold text-sm select-none mb-4">
            #1 job seeking platform in India
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
            AI-powered job matching
            <span className="block bg-gradient-to-r mt-5 from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Land your dream career smarter
            </span>
          </h1>
          
          <p className="text-gray-600 text-xl leading-relaxed max-w-xl mx-auto">
            Our AI-powered platform connects job seekers with perfect opportunities, 
            streamlining applications and maximizing success rates with intelligent matching.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 pt-6">
            <button className="group bg-blue-600 text-white px-10 py-5 rounded-2xl font-bold hover:bg-blue-700 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-xl">
              <span className="flex items-center justify-center space-x-2">
                <span>Get Started Free</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
            </button>
            
            <button className="group flex items-center justify-center space-x-3 bg-white/70 backdrop-blur-md text-blue-600 px-10 py-5 rounded-2xl font-bold hover:bg-white/90 transition-all duration-300 border border-blue-200/50 hover:border-blue-300 hover:shadow-lg">
              <Search className="w-5 h-5 transition-transform group-hover:scale-110" />
              <span>Explore Jobs</span>
            </button>
          </div>



          
{/* New section for clients served & industries */}
<div className="mt-10 py-5 max-w-4xl mx-auto flex flex-col sm:flex-row justify-center gap-12 text-center text-gray-700">
  <div>
    <div className="text-4xl font-extrabold text-blue-600">5K+</div>
    <div className="mt-1 text-lg font-semibold">Clients Served</div>
  </div>
  <div>
    <div className="text-4xl font-extrabold text-indigo-600">20+</div>
    <div className="mt-1 text-lg font-semibold">Industries Covered</div>
  </div>
  <div>
    <div className="text-4xl font-extrabold text-blue-500">250+</div>
    <div className="mt-1 text-lg font-semibold">Projects Delivered</div>
  </div>
</div>

        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }

        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </header>
  );
};
