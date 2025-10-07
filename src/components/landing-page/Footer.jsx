import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
    return (
        <motion.footer
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="content w-full px-4 py-8 md:py-12 mt-8"
            style={{
                background:
                    "radial-gradient(ellipse 80% 60% at 20% 30%, rgba(190,136,255,0.07), transparent 95%), radial-gradient(ellipse 75% 55% at 80% 30%, rgba(89,52,187,0.09), transparent 99%), #18181b",
            }}
            data-bg='dark'
        >
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-6 md:gap-8">
                {/* Brand & Social */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
                    className="flex-1 flex flex-col justify-between"
                >
                    <div>
                        <motion.h6
                            initial={{ opacity: 0, y: 14 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.15 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="font-extrabold text-xl sm:text-2xl mb-3 leading-tight bg-gradient-to-r from-purple-400 via-pink-400 to-orange-300 bg-clip-text text-transparent"
                        >
                            SmartApply
                        </motion.h6>
                        <h3 className="text-xl md:text-2xl font-extrabold mb-2 leading-tight text-white">
                            Stay Connected <br />With SmartApply
                        </h3>
                        <p className="text-gray-200 text-sm mb-3 max-w-md">
                            Follow us on social media to never miss a job opportunity, career insights, and expert hiring tips.
                        </p>
                    </div>
                    <div className="flex space-x-4 text-gray-300 text-lg">
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
                    className="flex flex-1 flex-col md:flex-row gap-8 md:gap-12"
                >
                    <div>
                        <div className="text-gray-400 mb-2 font-semibold text-base">Navigation</div>
                        <ul className="space-y-1.5 text-sm">
                            <li><a href="#" className="text-white hover:text-indigo-400 transition">Home</a></li>
                            <li><a href="#" className="text-white hover:text-indigo-400 transition">Job</a></li>
                            <li><a href="#" className="text-white hover:text-indigo-400 transition">Companies</a></li>
                            <li><a href="#" className="text-white hover:text-indigo-400 transition">Career Resources</a></li>
                            <li><a href="#" className="text-white hover:text-indigo-400 transition">For Employers</a></li>
                        </ul>
                    </div>
                    <div>
                        <div className="text-gray-400 mb-2 font-semibold text-base">Our address</div>
                        <ul className="text-white text-sm space-y-1.5">
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
                className="text-center text-gray-400 mt-8 text-sm"
            >
                Copyrights 2025 SmartApply. All rights reserved.
            </motion.div>
        </motion.footer>
    );
}
