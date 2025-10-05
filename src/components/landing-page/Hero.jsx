import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="content flex-1 flex flex-col items-center justify-center pt-36 px-8 sm:px-4"
      data-bg = 'light'
    >
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
        className=" text-4xl md:text-5xl font-bold text-center mb-4"
      >
        Your Next Job Is <br />
        Just{" "}
        <motion.span
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
          className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400"
        >
          One Click
        </motion.span>{" "}
        Away
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
        className=" text-gray-600 text-center mb-8 max-w-xl"
      >
        Find opportunities that match your passion, not just your resume.
        <br />
        Let’s build the career you deserve — starting today.
      </motion.p>

      {/* Search Bar */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
        className="flex items-center bg-white rounded-full shadow-md px-6 py-3 w-full max-w-2xl mb-10"
      >
        <input
          type="text"
          placeholder="Job Title or Keyword"
          className="flex-1 bg-transparent outline-none text-gray-700"
        />

        <button className="ml-4 bg-gradient-to-r from-indigo-400 to-pink-400 text-white font-semibold px-6 py-2 rounded-full shadow transition hover:opacity-90">
          Search
        </button>
      </motion.div>

      {/* Trusted Section */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6, ease: "easeOut" }}
        className="flex flex-col items-center"
      >
        <div className="flex items-center -space-x-3 mb-2">
          {[1, 2, 3, 4].map((i) => (
            <motion.img
              key={i}
              src={`https://randomuser.me/api/portraits/${
                i % 2 === 0 ? "women" : "men"
              }/${i}.jpg`}
              alt={`User ${i}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 + i * 0.1, duration: 0.6, ease: "easeOut" }}
              className="w-10 h-10 rounded-full border-2 border-white"
            />
          ))}
        </div>
        <p className="text-gray-700 text-sm">
          Trusted By <span className="font-bold">100,000+ People</span>
        </p>
      </motion.div>
    </motion.main>
  );
}
