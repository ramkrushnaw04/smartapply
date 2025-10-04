import React from 'react';

export const CTASection = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-800 overflow-hidden">
      {/* Glass overlay for depth */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-lg pointer-events-none"></div>

      {/* Radial spotlight behind content */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at center, rgba(255,255,255,0.2), transparent 70%)",
          filter: "blur(80px)"
        }}
      ></div>

      <div className="relative z-10 container mx-auto px-6 max-w-3xl text-center text-white animate-fade-in">
        <h2 className="text-6xl font-extrabold drop-shadow-lg mb-6 leading-tight">
          Ready to transform your career?
        </h2>
        <p className="text-white/90 text-xl mb-12 max-w-lg mx-auto leading-relaxed">
          Join thousands of professionals who have found their dream jobs with SmartApply&apos;s AI-powered platform.
        </p>
        <div className="flex flex-col sm:flex-row gap-8 justify-center">
          <button className="bg-white text-blue-600 px-12 py-5 rounded-3xl font-extrabold shadow-lg hover:shadow-[0_0_25px_rgba(59,130,246,0.8)] hover:bg-white transition-all transform hover:scale-110">
            Start Free Trial
          </button>
          <button className="bg-white/20 backdrop-blur-md text-white px-12 py-5 rounded-3xl font-semibold border border-white/30 hover:bg-white/30 hover:border-white/50 shadow-md transition-all transform hover:scale-105">
            Schedule Demo
          </button>
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
      `}</style>
    </section>
  );
};
