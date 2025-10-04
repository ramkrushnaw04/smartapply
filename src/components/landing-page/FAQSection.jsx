import React, { useState, useEffect } from 'react';

export const FAQSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'How does the AI-powered job matching work?',
      answer: 'Our AI analyzes your profile and matches you with job opportunities that best fit your skills and preferences to maximize your success rate.'
    },
    {
      question: 'Is there a free trial available?',
      answer: 'Yes, you can get started for free to explore basic features before upgrading to premium plans for additional benefits.'
    },
    {
      question: 'Can I save jobs to apply later?',
      answer: 'Absolutely! You can save any job listings you are interested in and access them later from your dashboard.'
    },
    {
      question: 'What industries do you cover?',
      answer: 'We cover over 20 industries including technology, healthcare, finance, education, marketing, and more.'
    }
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative overflow-hidden pt-20 pb-20 flex flex-col items-center bg-white">

        <div className="absolute top-20 left-10  w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-indigo-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-400/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div> */}


      <div className={`max-w-4xl w-full space-y-8 px-6 mx-auto text-gray-900 text-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
        <h2 className="text-4xl font-bold mb-6">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-blue-200 rounded-2xl p-6 cursor-pointer bg-blue-50 hover:bg-blue-100 transition-colors duration-300 shadow-md"
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            >
              <div className="flex justify-between items-center font-semibold text-blue-700 text-lg select-none">
                <span>{faq.question}</span>
                <span className="text-2xl font-bold">{activeIndex === index ? '-' : '+'}</span>
              </div>
              {activeIndex === index && (
                <p className="mt-4 text-blue-900 text-left leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
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
