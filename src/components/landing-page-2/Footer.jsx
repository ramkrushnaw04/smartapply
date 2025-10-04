import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="w-full px-4 py-16 md:py-20 mt-12"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 20% 30%, rgba(190,136,255,0.07), transparent 95%), radial-gradient(ellipse 75% 55% at 80% 30%, rgba(89,52,187,0.09), transparent 99%), #18181b",
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-8">
        {/* Brand & Social */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
          className="flex-1 flex flex-col justify-between"
        >
          <div>
            <div className="text-white font-extrabold text-2xl mb-8">SmartApply</div>
            <h3 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-white">
              Stay Connected <br />With JobNest
            </h3>
            <p className="text-gray-200 text-lg mb-8 max-w-md">
              Follow us on social media to never miss a job opportunity, career insights, and expert hiring tips.
            </p>
          </div>
          <div className="flex space-x-6 text-gray-300 text-2xl">
            <a href="#"><i className="fab fa-facebook" /></a>
            <a href="#"><i className="fab fa-instagram" /></a>
            <a href="#"><i className="fab fa-youtube" /></a>
            <a href="#"><i className="fab fa-tiktok" /></a>
          </div>
        </motion.div>

        {/* Navigation & Contact */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          className="flex flex-1 flex-col md:flex-row gap-16"
        >
          <div>
            <div className="text-gray-400 mb-3 font-semibold">Navigation</div>
            <ul className="space-y-3 text-lg">
              <li><a href="#" className="text-white hover:text-indigo-400 transition">Home</a></li>
              <li><a href="#" className="text-white hover:text-indigo-400 transition">Job</a></li>
              <li><a href="#" className="text-white hover:text-indigo-400 transition">Companies</a></li>
              <li><a href="#" className="text-white hover:text-indigo-400 transition">Career Resources</a></li>
              <li><a href="#" className="text-white hover:text-indigo-400 transition">For Employers</a></li>
            </ul>
          </div>
          <div>
            <div className="text-gray-400 mb-3 font-semibold">Our address</div>
            <ul className="text-white text-lg space-y-3">
              <li>+84 965 657 893</li>
              <li>contact@capiproduct.com</li>
              <li>35 To Vinh Dien str, Thanh Xuan, Hanoi, Vietnam</li>
            </ul>
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
        className="text-center text-gray-400 mt-12 text-base"
      >
        Copyrights 2025 SmartApply. All rights reserved.
      </motion.div>
    </motion.footer>
  );
}
