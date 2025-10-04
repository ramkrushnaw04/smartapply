import React from "react";
import { motion } from "framer-motion";

const metrics = [
  {
    value: "10K",
    suffix: "+",
    label: ["Job Matches", "Made Through JobNest"],
  },
  {
    value: "3K",
    suffix: "+",
    label: ["Verified Employers Onboard"],
  },
  {
    value: "95",
    suffix: "%",
    label: ["Satisfaction Rate From Both Talents", "And Companies"],
  },
  {
    value: "24/7",
    suffix: "",
    label: ["Dedicated Support To Guide Your", "Hiring Or Job Search Journey"],
  },
];

export default function TrustedEcosystemSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative mx-auto max-w-5xl rounded-2xl py-16 px-6 sm:px-12 my-10 shadow-2xl"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 20% 30%, rgba(190,136,255,0.15), transparent 90%), radial-gradient(ellipse 75% 55% at 80% 30%, rgba(89,52,187,0.15), transparent 90%), #18181b",
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ delay: 0.12, duration: 0.65, ease: "easeOut" }}
        className="text-white text-center font-medium text-3xl sm:text-4xl md:text-5xl leading-tight mb-10 max-w-4xl mx-auto"
      >
        We’ve Built A Trusted Ecosystem That Supports{" "}
        <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-300 bg-clip-text text-transparent">
          Thousands Of Job Seekers And
        </span>{" "}
        <span className="bg-gradient-to-r from-blue-500 to-purple-400 bg-clip-text text-transparent">
          Recruiters
        </span>{" "}
        Around The Globe — Fast, Reliable, And Results-Driven.
      </motion.h2>
      <div className="flex flex-wrap justify-center gap-y-10 md:gap-y-0 md:gap-x-10 mb-12 mt-40">
        {metrics.map((metric, i) => (
          <motion.div
            key={metric.value}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ delay: 0.24 + i * 0.11, duration: 0.55, ease: "easeOut" }}
            className="flex flex-col items-center min-w-[180px]"
          >
            <span className="text-3xl md:text-4xl font-bold text-white">
              {metric.value}
              {metric.suffix && (
                <span className="text-indigo-400 text-2xl align-super font-bold ml-1">
                  {metric.suffix}
                </span>
              )}
            </span>
            <span className="mt-2 text-sm text-gray-200 text-center">
              {metric.label.map((line, j) => (
                <React.Fragment key={j}>
                  {line}
                  {j < metric.label.length - 1 && <br />}
                </React.Fragment>
              ))}
            </span>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ delay: 0.7, duration: 0.5, ease: "easeOut" }}
        className="flex justify-center"
      >
        <button className="bg-gradient-to-r from-blue-500 to-purple-400 px-8 py-3 rounded-full text-white text-base font-semibold shadow-lg hover:opacity-90 transition">
          Join Us Today
        </button>
      </motion.div>
    </motion.section>
  );
}
