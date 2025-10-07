import React from "react";
import { User, Phone, MapPin, Camera } from "lucide-react";

export default function PersonalDetailsStep({ onboardingData, setOnboardingData }) {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-3 border-2 border-gray-200">
          <User className="w-7 h-7 text-gray-900" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900">Personal Details</h3>
        <p className="text-gray-600 mt-2">Let's start with your basic information</p>
      </div>

      <div className="flex justify-center">
        <div className="relative">
          <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center border-2 border-gray-200">
            {onboardingData.photo ? (
              <img src={onboardingData.photo} alt="Profile" className="w-full h-full rounded-full object-cover" />
            ) : (
              <Camera className="w-8 h-8 text-gray-400" />
            )}
          </div>
          <button className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center text-white shadow-lg hover:bg-gray-800 transition">
            <Camera className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">Full Name</label>
          <input
            type="text"
            value={onboardingData.fullName}
            onChange={(e) => setOnboardingData({ ...onboardingData, fullName: e.target.value })}
            className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-base focus:border-gray-900 focus:outline-none transition-all bg-white"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2 flex items-center gap-2">
            <Phone className="w-4 h-4 text-gray-600" />
            Phone Number
          </label>
          <input
            type="tel"
            value={onboardingData.phone}
            onChange={(e) => setOnboardingData({ ...onboardingData, phone: e.target.value })}
            className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-base focus:border-gray-900 focus:outline-none transition-all bg-white"
            placeholder="+1 (555) 000-0000"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2 flex items-center gap-2">
            <MapPin className="w-4 h-4 text-gray-600" />
            Address
          </label>
          <textarea
            value={onboardingData.address}
            onChange={(e) => setOnboardingData({ ...onboardingData, address: e.target.value })}
            className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-base focus:border-gray-900 focus:outline-none transition-all resize-none bg-white"
            rows="3"
            placeholder="123 Main St, City, State, ZIP"
          />
        </div>
      </div>
    </div>
  );
}