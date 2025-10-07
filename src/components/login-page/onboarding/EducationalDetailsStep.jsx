import React from "react";
import { GraduationCap } from "lucide-react";

export default function EducationalDetailsStep({ onboardingData, setOnboardingData }) {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-3 border-2 border-gray-200">
          <GraduationCap className="w-7 h-7 text-gray-900" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900">Educational Background</h3>
        <p className="text-gray-600 mt-2">Tell us about your education</p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">Degree</label>
          <input
            type="text"
            value={onboardingData.degree}
            onChange={(e) => setOnboardingData({ ...onboardingData, degree: e.target.value })}
            className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-base focus:border-gray-900 focus:outline-none transition-all bg-white"
            placeholder="Bachelor's in Computer Science"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">Institution</label>
          <input
            type="text"
            value={onboardingData.institution}
            onChange={(e) => setOnboardingData({ ...onboardingData, institution: e.target.value })}
            className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-base focus:border-gray-900 focus:outline-none transition-all bg-white"
            placeholder="University Name"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">Graduation Year</label>
            <input
              type="text"
              value={onboardingData.graduationYear}
              onChange={(e) => setOnboardingData({ ...onboardingData, graduationYear: e.target.value })}
              className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-base focus:border-gray-900 focus:outline-none transition-all bg-white"
              placeholder="2024"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">Field of Study</label>
            <input
              type="text"
              value={onboardingData.fieldOfStudy}
              onChange={(e) => setOnboardingData({ ...onboardingData, fieldOfStudy: e.target.value })}
              className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-base focus:border-gray-900 focus:outline-none transition-all bg-white"
              placeholder="Computer Science"
            />
          </div>
        </div>
      </div>
    </div>
  );
}