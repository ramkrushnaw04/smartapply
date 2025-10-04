import React from "react";
import {
    MdCampaign,
    MdBrush,
    MdGroupWork,
    MdAccountBalance,
    MdMedicalServices,
    MdSecurity,
    MdBusinessCenter,
    MdSchool,
    MdSupportAgent,
    MdFolder,
} from "react-icons/md";

// Use less saturated gradients and lighter borders for duller color
const careers = [
    {
        title: "Marketing & Communication",
        jobs: 68,
        icon: MdCampaign,
        bgGradient: "bg-gradient-to-br from-blue-100 to-blue-300",
        borderColor: "border-blue-300",
        colStart: 1,
        colSpan: 3,
    },
    {
        title: "Design & Development",
        jobs: 98,
        icon: MdBrush,
        bgGradient: "bg-gradient-to-br from-orange-100 to-orange-300",
        borderColor: "border-purple-200",
        colStart: 4,
        colSpan: 3,
    },
    {
        title: "Human Research & Development",
        jobs: 51,
        icon: MdGroupWork,
        bgGradient: "bg-gradient-to-br from-purple-200 to-purple-300",
        borderColor: "border-purple-300",
        colStart: 7,
        colSpan: 3,
    },
    {
        title: "Finance Management",
        jobs: 45,
        icon: MdAccountBalance,
        bgGradient: "bg-gradient-to-br from-green-100 to-green-300",
        borderColor: "border-green-300",
        colStart: 10,
        colSpan: 3,
    },
    {
        title: "Healthcare & Medical",
        jobs: 43,
        icon: MdMedicalServices,
        bgGradient: "bg-gradient-to-br from-green-100 to-green-300",
        borderColor: "border-blue-300",
        colStart: 2,
        colSpan: 3,
    },
    {
        title: "Armforce Guide & Security",
        jobs: 44,
        icon: MdSecurity,
        bgGradient: "bg-gradient-to-br from-blue-100 to-blue-300",
        borderColor: "border-blue-300",
        colStart: 5,
        colSpan: 3,
    },
    {
        title: "Business & Consulting",
        jobs: 29,
        icon: MdBusinessCenter,
        bgGradient: "bg-gradient-to-br from-purple-100 to-purple-200",
        borderColor: "border-purple-300",
        colStart: 8,
        colSpan: 3,
    },
    {
        title: "Education & Training",
        jobs: 58,
        icon: MdSchool,
        bgGradient: "bg-gradient-to-br from-purple-200 to-purple-300",
        borderColor: "border-purple-300",
        colStart: 1,
        colSpan: 3,
    },
    {
        title: "Customer Support Care",
        jobs: 65,
        icon: MdSupportAgent,
        bgGradient: "bg-gradient-to-br from-purple-300 to-purple-400",
        borderColor: "border-purple-400",
        colStart: 4,
        colSpan: 3,
    },
    {
        title: "Project Management",
        jobs: 53,
        icon: MdFolder,
        bgGradient: "bg-gradient-to-br from-orange-100 to-orange-300",
        borderColor: "border-orange-300",
        colStart: 7,
        colSpan: 3,
    },
    {
        title: "Marketing & Communication",
        jobs: 68,
        icon: MdCampaign,
        bgGradient: "bg-gradient-to-br from-blue-100 to-blue-300",
        borderColor: "border-blue-300",
        colStart: 10,
        colSpan: 3,
    },
];


function InfiniteScroller({ jobs, direction = "r-to-"}) {

    return (
        <div className="wrapper overflow-scroll  flex flex-row">
            <div className={`${direction === 'r-to-l' ? "scrollLeft" : "scrollRight "} group  flex  py-6 justify-center items-center gap-6 px-3`}>
                {jobs.map(
                    ({ title, jobs, icon: Icon, bgGradient, borderColor, colStart, colSpan }, idx) => (
                        <div
                            key={idx}
                            className={`${borderColor} border rounded-xl p-4 flex items-center gap-4 cursor-pointer transition-shadow hover:shadow`}
                            style={{
                                gridColumnStart: colStart,
                                gridColumnEnd: `span ${colSpan}`,
                                minWidth: "250px",
                                maxWidth: "250px",
                                height: "92px"
                            }}
                        >
                            <div className={`${bgGradient} p-3 rounded-full flex items-center justify-center`}>
                                <Icon className="text-gray-200" size={22} />
                            </div>
                            <div className="flex flex-col justify-center h-full">
                                <h3 className="font-semibold text-xs text-gray-700 truncate w-[160px]">{title}</h3>
                                <p className="text-gray-400 text-xs mt-1">{jobs} Jobs Available</p>
                            </div>
                        </div>
                    )
                )}
            </div>

            <div className={`${direction === 'r-to-l' ? "scrollLeft" : "scrollRight "} group  flex  py-6 justify-center items-center gap-6 px-3`}>
                {jobs.map(
                    ({ title, jobs, icon: Icon, bgGradient, borderColor, colStart, colSpan }, idx) => (
                        <div
                            key={idx}
                            className={`${borderColor} border rounded-xl p-4 flex items-center gap-4 cursor-pointer transition-shadow hover:shadow`}
                            style={{
                                gridColumnStart: colStart,
                                gridColumnEnd: `span ${colSpan}`,
                                minWidth: "250px",
                                maxWidth: "250px",
                                height: "92px"
                            }}
                        >
                            <div className={`${bgGradient} p-3 rounded-full flex items-center justify-center`}>
                                <Icon className="text-gray-200" size={22} />
                            </div>
                            <div className="flex flex-col justify-center h-full">
                                <h3 className="font-semibold text-xs text-gray-700 truncate w-[160px]">{title}</h3>
                                <p className="text-gray-400 text-xs mt-1">{jobs} Jobs Available</p>
                            </div>
                        </div>
                    )
                )}
            </div>
        </div>
    )
}


export default function CareerExploreSection() {
    return (
        <section className="relative py-16 px-8 sm:px-16 bg-white max-w-screen-xl mx-auto overflow-hidden">
            <div className="pointer-events-none absolute bottom-0 left-0 w-1/2 h-80 blur-3xl bg-gradient-to-tr from-purple-100 via-pink-100 to-yellow-100 opacity-20 rounded-3xl -z-10"></div>

            <h2 className="text-center font-extrabold text-3xl sm:text-4xl mb-3 max-w-3xl mx-auto leading-tight">
                Explore Careers Across Every Field
            </h2>
            <p className="text-center max-w-xl mx-auto text-gray-600 mb-12 text-sm sm:text-base leading-relaxed">
                Discover a wide range of careers across every industry — from design and tech to healthcare and finance. Find roles that match your skills and passion.
            </p>

            <div className="relative w-full overflow-hidden">

                <InfiniteScroller direction="r-to-l" jobs={careers.slice(0, 3)} />
                <InfiniteScroller direction="l-to-r" jobs={careers.slice(4, 9)} />
                <InfiniteScroller direction="r-to-l" jobs={careers.slice(8, 11)} />


                {/* element to add a transition  */}
                <div className="w-20 h-full absolute top-0 left-0 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
                <div className="w-20 h-full absolute top-0 right-0 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
            </div>


            <button className="mt-20 block mx-auto bg-gradient-to-r from-indigo-300 to-pink-300 text-white py-3 px-12 rounded-full text-lg font-semibold shadow-lg hover:opacity-70 transition">
                Explore All
            </button>
        </section>
    );
}
