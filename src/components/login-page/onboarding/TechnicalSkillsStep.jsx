import React from "react";
import { Code } from "lucide-react";

export default function TechnicalSkillsStep({ 
  onboardingData, 
  setOnboardingData,
  techOptions,
  frameworkOptions,
  toggleTech,
  toggleFramework
}) {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-3 border-2 border-gray-200">
          <Code className="w-7 h-7 text-gray-900" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900">Technical Skills</h3>
        <p className="text-gray-600 mt-2">Select your technical expertise</p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-3">Programming Languages</label>
          <div className="flex flex-wrap gap-2">
            {techOptions.map((tech) => (
              <button
                key={tech}
                type="button"
                onClick={() => toggleTech(tech)}
                className={`px-4 py-2 rounded-full font-medium text-sm transition ${
                  onboardingData.technologies.includes(tech)
                    ? "bg-gray-900 text-white shadow-md hover:bg-gray-800"
                    : "bg-gray-100 text-gray-700 border-2 border-gray-200 hover:border-gray-900"
                }`}
              >
                {tech}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-3">Frameworks & Libraries</label>
          <div className="flex flex-wrap gap-2">
            {frameworkOptions.map((framework) => (
              <button
                key={framework}
                type="button"
                onClick={() => toggleFramework(framework)}
                className={`px-4 py-2 rounded-full font-medium text-sm transition ${
                  onboardingData.frameworks.includes(framework)
                    ? "bg-gray-900 text-white shadow-md hover:bg-gray-800"
                    : "bg-gray-100 text-gray-700 border-2 border-gray-200 hover:border-gray-900"
                }`}
              >
                {framework}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">Years of Experience</label>
          <select
            value={onboardingData.experience}
            onChange={(e) => setOnboardingData({ ...onboardingData, experience: e.target.value })}
            className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-base focus:border-gray-900 focus:outline-none transition-all bg-white"
          >
            <option value="">Select experience</option>
            <option value="0-1">0-1 years</option>
            <option value="1-3">1-3 years</option>
            <option value="3-5">3-5 years</option>
            <option value="5+">5+ years</option>
          </select>
        </div>
      </div>
    </div>
  );
}