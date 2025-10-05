import React from "react";
import { motion } from "framer-motion";

const users = [
  { name: "Man 1", img: "https://randomuser.me/api/portraits/men/32.jpg" },
  { name: "Woman 1", img: "https://randomuser.me/api/portraits/women/44.jpg" },
  { name: "Esther Howard", img: "https://randomuser.me/api/portraits/men/43.jpg", selected: true, title: "Marketing Coordinator" },
  { name: "Man 2", img: "https://randomuser.me/api/portraits/men/45.jpg" },
  { name: "Woman 2", img: "https://randomuser.me/api/portraits/women/48.jpg" },
];

export default function TestimonialSection() {
  return (
    <section 
        className="content w-full pb-20 sm:py-36 relative overflow-hidden bg-white"
        data-bg = 'light'
    >
      {/* Decorative background */}
      <div
        className="absolute right-0 top-0 w-[60vw] h-[80vh] pointer-events-none opacity-80"
        style={{ zIndex: 0 }}
      ></div>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center ">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-medium text-center mb-12 text-[#232323] "
        >
          What Our Users Say
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
          className="flex items-start justify-center gap-2 w-full max-w-2xl mb-4 px-10 sm:px-0"
        >
          <span className="text-4xl text-indigo-400">“</span>
          <span className="text-lg md:text-xl text-black font-medium text-center flex-1">
            I used to struggle with job platforms, but JobNest makes it feel easy and personal.
            It actually understands what I’m looking for.
          </span>
          <span className="text-4xl text-indigo-400">”</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
          className="mt-8 mb-8 text-center"
        >
          <div className="text-xl font-bold text-gray-900">Esther Howard</div>
          <div className="text-gray-500 text-lg">Marketing Coordinator</div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
          className="flex justify-center gap-4 sm:gap-8 mt-2 "
        >
          {users.map((user, _i) => (
            <motion.div
              key={user.name}
              variants={{
                hidden: { opacity: 0, y: 20, scale: 0.9 },
                visible: { opacity: 1, y: 0, scale: user.selected ? 1.1 : 1 },
              }}
              className={`rounded-full border-2 transition-all duration-300 ${
                user.selected
                  ? "border-purple-400 shadow-lg ring-2 ring-purple-200"
                  : "border-transparent opacity-80"
              }`}
            >
              <img
                src={user.img}
                alt={user.name}
                className="w-12 sm:w-20 h-12 sm:h-20 object-cover rounded-full"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
