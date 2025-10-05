import React from "react";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section 
        className="content w-full flex justify-center items-center py-20 px-2"
        data-bg = 'dark'
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full max-w-5xl rounded-2xl bg-gradient-to-br from-black via-gray-900 to-indigo-900 relative flex flex-col items-center mx-auto p-12"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 20% 30%, rgba(190,136,255,0.15), transparent 90%), radial-gradient(ellipse 75% 55% at 80% 30%, rgba(89,52,187,0.15), transparent 90%), #18181b",
        }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
          className="text-center font-extrabold text-3xl md:text-5xl mb-4"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-orange-300">Let's Talk!</span>
          <span className="text-white"> We’re Here To Help</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          className="text-center text-gray-200 max-w-2xl mx-auto mb-10"
        >
          Have a question, feedback, or just want to say hi? Our team is ready to support you — whether you're a job seeker, recruiter, or just curious about what we do.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
          className="px-8 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-400 text-white text-lg font-semibold shadow-md transition hover:opacity-90"
        >
          Contact Us
        </motion.button>
      </motion.div>
    </section>
  );
}
