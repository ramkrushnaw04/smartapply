import React from 'react';
import { ChevronRight } from 'lucide-react';

// Glassy Job Card
const JobCard = ({ job }) => (
  <div className="bg-white/60 backdrop-blur-xl border border-white/70 shadow-xl rounded-3xl px-7 py-8 group transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-300 cursor-pointer">
    <div className="flex justify-between items-start mb-5">
      <div className="flex items-center space-x-3">
        <div className={"w-14 h-14  rounded-xl flex items-center justify-center text-white text-2xl font-bold drop-shadow-lg "+` ${job.color} `}>
          {job.company.charAt(0)}
        </div>
        <div>
          <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors text-lg">
            {job.title}
          </h3>
          <p className="text-gray-600 text-sm">{job.company}</p>
        </div>
      </div>
      
    </div>
    <div className="space-y-2 mb-4">
      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur transition-all"> {job.compensation} </span>
      <p className="text-gray-600 font-semibold">{job.location}</p>
      <p className="text-gray-500 text-xs">{job.type}</p>
    </div>
    <div className="flex space-x-3">
      <button className="flex-1 bg-blue-600 text-white py-2 rounded-2xl font-bold hover:bg-blue-700 hover:shadow-lg transition-all">
        Apply Now
      </button>
      <button className="px-5 py-2 border border-blue-100 rounded-2xl text-blue-600 font-medium bg-white/60 hover:border-blue-400 hover:text-blue-700 transition-all">
        View Details
      </button>
    </div>
  </div>
);

// Featured Jobs Section with Floating Circles
export const FeaturedJobsSection = () => {
  const jobs = [
    { title: "Senior Software Engineer", company: "Google Inc.", location: "Mountain View, CA", compensation: "180K-250K", type: "Full-time",color: 'bg-red-300' },
    { title: "Product Manager", company: "Microsoft", location: "Seattle, WA", compensation: "160K-220K", type: "Full-time",color: 'bg-blue-300' },
    { title: "Data Scientist", company: "Meta", location: "Menlo Park, CA", compensation: "200K-280K", type: "Full-time",color: 'bg-green-300'},
    { title: "UX Designer", company: "Apple Inc.", location: "Cupertino, CA", compensation: "140K-190K", type: "Full-time",color: 'bg-pink-300' },
    { title: "DevOps Engineer", company: "Amazon", location: "Austin, TX", compensation: "150K-200K", type: "Full-time",color: 'bg-black' },
    { title: "Machine Learning Engineer", company: "Tesla", location: "Palo Alto, CA", compensation: "170K-240K", type: "Full-time",color: 'bg-orange-300' }
  ];

  return (
    <section className="relative py-20  overflow-hidden min-h-[60vh]">
      {/* Floating blur orbs and dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Large blue blur orbs */}
        <div className="absolute top-16 left-8 w-60 h-60 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-12 right-14 w-52 h-52 bg-indigo-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 left-1/2 w-40 h-40 bg-blue-400/10 rounded-full blur-xl animate-pulse" style={{ transform: 'translateX(-50%)', animationDelay: '1s' }}></div>

        {/* Floating decorative circles from HeroSection */}
        <div className="absolute top-32 right-20 w-32 h-32 bg-blue-500/5 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 left-20 w-20 h-20 bg-indigo-500/10 rounded-full animate-bounce" style={{ animationDuration: '3s' }}></div>
        <div className="absolute bottom-32 left-[33%] w-16 h-16 bg-blue-400/8 rounded-2xl rotate-45 animate-spin" style={{ animationDuration: '8s' }}></div>

        {/* Small floating dots */}
        <div className="absolute top-40 left-1/4 w-2 h-2 bg-blue-500/40 rounded-full animate-ping"></div>
        <div className="absolute bottom-40 right-1/3 w-3 h-3 bg-indigo-500/30 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-12 gap-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Featured Opportunities
          </h2>
          <button className="group flex items-center space-x-2 bg-white/80 backdrop-blur-md border border-blue-100 px-6 py-2 rounded-full font-semibold text-blue-600 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200 shadow transition-all">
            <span>View All</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobs.map((job, index) => (
            <JobCard key={index} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
};
