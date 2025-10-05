

import { Briefcase, MapPin, DollarSign, Clock } from "lucide-react";

const MicrosoftCard = () => {
  return (
    <div
      className={`w-80 bg-white rounded-2xl shadow-md p-5 border hover:shadow-lg
        transform transition-transform ease-in-out duration-500`}
    >
      {/* Company Section */}
      <div className="flex items-center gap-3 mb-4">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
          alt="Microsoft Logo"
          className="w-8 h-8"
        />
        <div>
          <h3 className="text-lg font-semibold">Microsoft</h3>
          <p className="text-gray-500 flex items-center text-sm">
            <MapPin size={14} className="mr-1" />
            WA, USA
          </p>
        </div>
      </div>

      {/* Job Role */}
      <h2 className="text-xl font-bold mb-2">Product Manager</h2>

      {/* Job Details */}
      <div className="flex flex-col gap-2 text-sm text-gray-600 mb-3">
        <span className="flex items-center gap-2">
          <Clock size={16} className="text-gray-500" /> Full Time
        </span>
        <span className="flex items-center gap-2">
          <Briefcase size={16} className="text-gray-500" /> Permanent
        </span>
        <span className="flex items-center gap-2">
          <DollarSign size={16} className="text-gray-500" /> $6,500 - 10,000 / Month
        </span>
      </div>

      {/* Description */}
      <p className="text-gray-700 text-sm leading-relaxed">
        Work with teams to build and launch Microsoft 365 features. Hybrid work available.
      </p>
    </div>
  );
};

export default MicrosoftCard
