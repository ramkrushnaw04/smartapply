export const Footer = () => {
  const footerSections = [
    {
      title: "Product",
      links: ["How it works", "Pricing", "Features"]
    },
    {
      title: "Company",
      links: ["About", "Careers", "Contact"]
    },
    {
      title: "Support",
      links: ["Help Center", "Privacy", "Terms"]
    }
  ];

  return (
    <footer className="relative bg-gradient-to-t from-[#0f172a] to-[#1e293b] bg-opacity-95 backdrop-blur-md border-t border-gray-800 text-gray-300 py-20">
      {/* Optional subtle noise overlay */}
      <div className="absolute inset-0 pointer-events-none bg-[url('/noise-texture.png')] opacity-5"></div>

      <div className="relative z-10 container mx-auto px-6 max-w-7xl">
        <div className="grid md:grid-cols-4 gap-14">
          <div>
            <h3 className="text-3xl font-extrabold mb-6 text-white drop-shadow-lg tracking-wide">
              SmartApply
            </h3>
            <p className="max-w-sm leading-relaxed text-gray-400">
              The intelligent way to find and land your perfect job opportunity.
            </p>
          </div>
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold mb-6 text-blue-500 tracking-wide text-lg transition-colors duration-300">
                {section.title}
              </h4>
              <ul className="space-y-3 text-gray-400">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="hover:text-blue-400 hover:drop-shadow-md transition-all duration-300 tracking-wide"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm tracking-wide space-y-4 md:space-y-0">
          <p>&copy; 2025 SmartApply. All rights reserved.</p>
          <div className="flex space-x-6">
            {/* Placeholder icons - replace with real icons or components */}
            <span className="w-5 h-5 bg-blue-600 rounded-full opacity-80"></span>
            <span className="w-5 h-5 bg-blue-600 rounded-full opacity-80"></span>
            <span className="w-5 h-5 bg-blue-600 rounded-full opacity-80"></span>
          </div>
        </div>
      </div>
    </footer>
  );
};
