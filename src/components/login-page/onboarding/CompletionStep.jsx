import React from "react";
import { CheckCircle, Briefcase, Search, Sparkles } from "lucide-react";

export default function CompletionStep({ onboardingData, nextOnboardingStep }) {
  return (
    <div className="space-y-6 text-center">
      <div className="w-20 h-20 bg-gray-900 rounded-full flex items-center justify-center mx-auto shadow-lg">
        <CheckCircle className="w-10 h-10 text-white" />
      </div>
      
      <div>
        <h3 className="text-3xl font-bold text-gray-900 mb-2">You're All Set!</h3>
        <p className="text-lg text-gray-600">
          Your profile is complete. Let's find your perfect job match!
        </p>
      </div>

      <div className="bg-gray-50 rounded-2xl p-6 border-2 border-gray-200">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Briefcase className="w-6 h-6 text-gray-900" />
          <h4 className="text-lg font-semibold text-gray-900">Profile Summary</h4>
        </div>
        <div className="space-y-2 text-sm text-gray-700">
          <p className="flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-gray-900" />
            Personal details completed
          </p>
          <p className="flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-gray-900" />
            Education added
          </p>
          <p className="flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-gray-900" />
            {onboardingData.technologies.length} technologies selected
          </p>
          <p className="flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-gray-900" />
            {onboardingData.frameworks.length} frameworks added
          </p>
        </div>
      </div>

      <button
        onClick={nextOnboardingStep}
        className="w-full py-3.5 rounded-full bg-gray-900 text-white font-semibold text-base shadow-lg transition hover:bg-gray-800 hover:shadow-xl flex items-center justify-center gap-3"
      >
        <Search className="w-5 h-5" />
        Search for Matching Jobs
      </button>
    </div>
  );
}