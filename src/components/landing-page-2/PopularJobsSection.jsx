import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import JobCard from "./job-cards/JobCard";

const jobsData = [
    {
        logo: "https://avatars.githubusercontent.com/u/9919?s=200&v=4",
        company: "TechNova",
        location: "San Francisco, USA",
        title: "Front-End Developer",
        types: ["Full Time"],
        permanent: true,
        salary: "$6,500–10,000/Month",
        desc: "Develop Responsive User Interfaces Using React. Collaborate With Designers And Backend Teams To Improve UX Across Platforms.",
        buttonColor: "from-indigo-300 to-purple-300 text-indigo-700", // Tailwind classes
        posted: "3 days ago",
    },
    {
        logo: "https://avatars.githubusercontent.com/u/2964768?s=200&v=4",
        company: "PixelCraft",
        location: "Remote",
        title: "UI/UX Designer",
        types: ["Full Time", "Part Time"],
        permanent: true,
        salary: "$3,000–7,000/Month",
        desc: "Work Closely With Product Teams To Design Intuitive, User-Friendly Interfaces. Portfolio Required. Remote Work Available.",
        buttonColor: "from-indigo-300 to-blue-400 text-blue-700",
        posted: "1 days ago",
    },
    {
        logo: "https://avatars.githubusercontent.com/u/5534067?s=200&v=4",
        company: "SecureMind",
        location: "Singapore",
        title: "Cybersecurity Analyst",
        types: ["Full Time", "Urgent"],
        permanent: true,
        salary: "$5,500–9,000/Month",
        desc: "Monitor Network Activity, Detect Threats, And Respond To Incidents In Real Time. Experience With Firewalls And SIEM Tools Required.",
        buttonColor: "from-indigo-300 to-pink-300 text-indigo-700",
        posted: "2 days ago",
    },
];

const PopularJobsCard = ({ isCentered, children }) => (
    <div className={`m-auto ${isCentered ? " -translate-y-10 " : ""}`}>{children}</div>
);

export default function PopularJobsSection() {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);


    return (
        <section className="max-w-6xl mx-auto py-20 px-6">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.15 }}
                className="text-3xl sm:text-4xl font-extrabold text-center mb-2"
            >
                Popular Jobs
            </motion.h2>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.15 }}
                className="text-center text-gray-500 mb-10 max-w-2xl m-auto"
            >
                Top companies are hiring now — and you could be their next great hire. Browse through popular openings tailored for ambitious talents.
            </motion.p>
            {!isMobile && <div className="flex flex-col md:flex-row items-center justify-center gap-6 py-16">
                {jobsData.map((job, i) => (
                    <motion.div
                        key={job.company + job.title}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.15, duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.15 }}
                        className="flex-1"
                    >
                        <PopularJobsCard isCentered={i === 1}>
                            <JobCard {...job} />
                        </PopularJobsCard>
                    </motion.div>
                ))}
            </div>}


            {isMobile && <div className=" h-[550px] relative overflow-hidden  py-16 pb-4">
                {jobsData.map((job, i) => (
                    <motion.div
                        key={job.company + job.title}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.15, duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.15 }}
                        className="flex-1 absolute"
                        style={{left: i*30, top: i*40}}
                    >
                        {/* <PopularJobsCard isCentered={i === 1}> */}
                            <JobCard {...job} />
                        {/* </PopularJobsCard> */}
                    </motion.div>
                ))}
            </div>

            }


            <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.15 }}
                className="flex justify-center"
            >
                <button className="px-8 py-2 rounded-full bg-gradient-to-r from-indigo-300 to-pink-300 text-white font-semibold text-base shadow border border-indigo-100 hover:opacity-90 transition">
                    Explore All
                </button>
            </motion.div>
        </section>
    );
}
