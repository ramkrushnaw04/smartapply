export default function HiringNowCard() {
  const jobs = [
    { company: "Google", role: "Software Engineer" },
    { company: "Airbnb", role: "Product Designer" },
    { company: "Meta", role: "Data Analyst" },
    { company: "Dropbox", role: "Front-End Developer" },
  ];

  return (
    <div className={`w-80 bg-white rounded-2xl h-[300px] shadow-md p-5 border hover:shadow-lg
        transform transition-transform ease-in-out duration-500`}
        >
      <div className="flex justify-center mb-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z"
          />
        </svg>
      </div>
      <h2 className="text-center font-semibold text-gray-800 mb-4">
        Top Companies Hiring Now
      </h2>

      <div className="space-y-3">
        {jobs.map((job, index) => (
          <div key={index} className="flex justify-between text-gray-700">
            <span className="font-medium">{job.company}</span>
            <span className="text-gray-500">{job.role}</span>
          </div>
        ))}
      </div>
    </div>
  );
}