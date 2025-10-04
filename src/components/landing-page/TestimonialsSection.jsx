import React from 'react';
import { Star } from 'lucide-react';

const TestimonialCard = ({ testimonial }) => (
  <div className="bg-white/50 backdrop-blur-xl border border-white/50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-500 cursor-pointer hover:scale-[1.03] transform">
    <div className="flex items-center space-x-2 mb-5">
      {[...Array(testimonial.rating)].map((_, i) => (
        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
      ))}
    </div>
    <p className="text-gray-800 mb-7 italic leading-relaxed">"{testimonial.content}"</p>
    <div className="flex items-center space-x-4">
      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-full flex items-center justify-center text-white font-bold text-lg drop-shadow-lg">
        {testimonial.name.charAt(0)}
      </div>
      <div>
        <p className="font-semibold text-gray-900 text-lg">{testimonial.name}</p>
        <p className="text-gray-600 text-sm">{testimonial.role}</p>
      </div>
    </div>
  </div>
);

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Software Engineer at Google",
      content: "SmartApply helped me land my dream job in just 2 weeks. The AI matching is incredibly accurate!",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "Product Manager at Microsoft",
      content: "The platform streamlined my entire job search process. I got 3x more interviews than traditional methods.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "Product Manager at Microsoft",
      content: "The platform streamlined my entire job search process. I got 3x more interviews than traditional methods.",
      rating: 5
    }
  ];

  return (
    <section className="relative py-20  overflow-hidden min-h-[55vh]">
      {/* Background floating blur orbs and circles */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-20 left-12 w-60 h-60 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-16 w-52 h-52 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 left-1/2 w-44 h-44 bg-blue-400/10 rounded-full blur-2xl animate-pulse" style={{ transform: 'translate(-50%, -50%)', animationDelay: '1s' }} />

        <div className="absolute top-32 right-20 w-32 h-32 bg-blue-500/5 rounded-full animate-pulse" />
        <div className="absolute top-1/2 left-24 w-20 h-20 bg-indigo-500/10 rounded-full animate-bounce" style={{ animationDuration: '3.5s' }} />
        <div className="absolute bottom-28 left-1/3 w-16 h-16 bg-blue-400/8 rounded-2xl rotate-45 animate-spin" style={{ animationDuration: '9s' }} />

        <div className="absolute top-40 left-1/4 w-2 h-2 bg-blue-500/40 rounded-full animate-ping" />
        <div className="absolute bottom-44 right-1/3 w-3 h-3 bg-indigo-500/30 rounded-full animate-ping" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-14 drop-shadow">
          What our users say
        </h2>
        <div className="grid md:grid-cols-3 gap-10 mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};
