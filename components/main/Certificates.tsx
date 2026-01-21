"use client";

import React from "react";
import { certificatesData, certificatesTitle } from "@/constants/portfolioData";
import { motion } from "framer-motion";
import { slideInFromRight, slideInFromTop } from "@/utils/motion";
import { InView } from "react-intersection-observer";

const Certificates = () => {
    return (
        <section
            id="certificates"
            className="flex flex-col items-center justify-center py-5 relative z-20"
        >
            {/* Title */}
            <div className="flex justify-center mb-12 w-full">
                <InView triggerOnce={false}>
                    {({ inView, ref }) => (
                        <motion.div
                            ref={ref}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={slideInFromTop}
                            className="text-center"
                        >
                            <h2 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                                {certificatesTitle}
                            </h2>
                        </motion.div>
                    )}
                </InView>
            </div>

            {/* Horizontal scroll container */}
            <div className="w-full flex overflow-x-scroll py-4 px-10 gap-8 scrollbar-hidden">
                {certificatesData.map((cert, index) => (
                    <InView key={index} triggerOnce={false}>
                        {({ inView, ref }) => (
                            <motion.div
                                ref={ref}
                                initial="hidden"
                                animate={inView ? "visible" : "hidden"}
                                variants={slideInFromRight(index * 0.2)}
                                className="rounded-2xl border border-[#7042f88b] bg-[#0300145e] p-8 w-[350px] flex-shrink-0 flex flex-col justify-center items-center gap-4 hover:shadow-lg hover:shadow-purple-500/20 transition-shadow duration-300"
                            >
                                <h3 className="text-white text-xl font-bold text-center line-clamp-2 min-h-[56px] flex items-center">
                                    {cert.name}
                                </h3>
                                <div className="flex flex-col items-center gap-1">
                                    <span className="text-cyan-400 font-semibold text-base">{cert.company}</span>
                                    <span className="text-gray-400 text-sm">{cert.year}</span>
                                </div>
                            </motion.div>
                        )}
                    </InView>
                ))}
            </div>
        </section>
    );
};

export default Certificates;
