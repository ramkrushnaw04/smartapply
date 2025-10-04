import React from 'react';
import { ArrowRight, Zap, Shield, Users } from 'lucide-react';

export const FeaturesSection = () => {
  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "AI-Powered Applications",
      description: "Smart algorithms match you with perfect opportunities",
      color: "bg-gradient-to-br from-blue-600 to-indigo-700"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure & Private",
      description: "Your data is protected with enterprise-grade security",
      color: "bg-gradient-to-br from-green-500 to-green-700"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Network",
      description: "Connect with industry professionals and mentors",
      color: "bg-gradient-to-br from-orange-500 to-orange-700"
    }
  ];

  return (
    <section className="relative py-20  overflow-hidden min-h-[60vh]">
      {/* Floating blur orbs and circles */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-16 left-12 w-60 h-60 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-16 right-16 w-52 h-52 bg-indigo-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-blue-400/10 rounded-full blur-2xl animate-pulse" style={{ transform: 'translate(-50%, -50%)', animationDelay: '1s' }} />

        <div className="absolute top-32 right-20 w-32 h-32 bg-blue-500/5 rounded-full animate-pulse" />
        <div className="absolute top-1/2 left-20 w-20 h-20 bg-indigo-500/10 rounded-full animate-bounce" style={{ animationDuration: '3s' }} />
        <div className="absolute bottom-32 left-1/3 w-16 h-16 bg-blue-400/8 rounded-2xl rotate-45 animate-spin" style={{ animationDuration: '8s' }} />

        <div className="absolute top-40 left-1/4 w-2 h-2 bg-blue-500/40 rounded-full animate-ping" />
        <div className="absolute bottom-40 right-1/3 w-3 h-3 bg-indigo-500/30 rounded-full animate-ping" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-8 drop-shadow">
              Find your perfect match in minutes
            </h2>
            <div className="space-y-10">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-5">
                  <div className={"w-14 h-14  rounded-2xl flex items-center justify-center text-white flex-shrink-0 shadow-lg " + feature.color}>
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-lg">{feature.title}</h3>
                    <p className="text-gray-600 text-base">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="mt-10 bg-blue-600 text-white px-10 py-4 rounded-2xl font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 flex items-center space-x-3 shadow-lg">
              <span>Start Your Journey</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <div className="relative">
            <div className="bg-white/40 backdrop-blur-2xl rounded-3xl p-10 shadow-2xl border border-white/50 hover:shadow-3xl transition-shadow duration-500">
              <div className="space-y-7">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-gray-900">Application Progress</h3>
                  <span className="text-blue-600 text-sm font-semibold">85% Complete</span>
                </div>
                <div className="space-y-5">
                  {['Profile Setup', 'Resume Upload', 'Preferences', 'AI Analysis'].map((step, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className={`w-7 h-7 rounded-full flex items-center justify-center text-white font-semibold ${
                        index < 3 ? 'bg-blue-600' : 'bg-gray-200 text-gray-600'
                      } transition-colors`}>
                        {index < 3 ? '✓' : index + 1}
                      </div>
                      <span className={`${index < 3 ? 'text-gray-900' : 'text-gray-500'} text-base`}>
                        {step}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -left-6 w-20 h-20 bg-blue-200 rounded-full opacity-50" />
            <div className="absolute -bottom-6 -right-6 w-28 h-28 bg-indigo-200 rounded-full opacity-30" />
          </div>


          




        </div>
      </div>
    </section>
  );
};
