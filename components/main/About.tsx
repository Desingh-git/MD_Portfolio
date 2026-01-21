"use client";
import React, { useState } from "react";
import { aboutData, personalDetails, resumeLink } from "@/constants/portfolioData";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import { InView } from "react-intersection-observer";
import { FaMapMarkerAlt, FaGlobe, FaPhone, FaEnvelope } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";

const About = () => {
    const [loading, setLoading] = useState(false);
    // Split description into paragraphs
    const descriptionParagraphs = aboutData.description.split(". ").filter(p => p.trim().length > 0);

    const personalDetailsItems = [
        {
            icon: FaMapMarkerAlt,
            label: "CURRENT ADDRESS",
            value: personalDetails.currentAddress,
        },
        {
            icon: FaMapMarkerAlt,
            label: "NATIVE ADDRESS",
            value: personalDetails.nativeAddress,
        },
        {
            icon: FaGlobe,
            label: "LANGUAGES",
            value: personalDetails.languages,
        },
        {
            icon: FaPhone,
            label: "MOBILE",
            value: personalDetails.mobileNumber,
        },
        {
            icon: FaEnvelope,
            label: "EMAIL",
            value: personalDetails.email,
        },
    ];

    return (
        <section
            id="about"
            className="relative min-h-screen w-full py-10 px-4 md:px-8"
        >
            {/* Video Background */}
            <div className="w-full hidden md:flex items-start justify-center absolute top-0 left-0 z-0">
                <video
                    loop
                    muted
                    autoPlay
                    playsInline
                    preload="false"
                    className="h-full w-full object-cover opacity-30"
                    src="/encryption.webm"
                />
            </div>

            {/* Centered Title */}
            <div className="flex justify-center mb-12 pt-20 relative z-10">
                <InView triggerOnce={false}>
                    {({ inView, ref }) => (
                        <motion.div
                            ref={ref}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={slideInFromTop}
                            className="text-center"
                        >
                            <h2 className="text-4xl md:text-5xl font-bold">
                                <span className="text-white">About </span>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                                    Me
                                </span>
                            </h2>
                        </motion.div>
                    )}
                </InView>
            </div>

            {/* Main Content Container */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-6 lg:gap-8 relative z-10">
                {/* Left Section - Who I am */}
                <div className="flex flex-col">
                    <InView triggerOnce={false}>
                        {({ inView, ref }) => (
                            <motion.div
                                ref={ref}
                                initial="hidden"
                                animate={inView ? "visible" : "hidden"}
                                variants={slideInFromLeft(0.5)}
                                className="w-full max-w-xl mx-auto"
                            >
                                <h3 className="text-2xl font-bold text-gray-200 mb-6">
                                    Who I am
                                </h3>
                                <div className="Welcome-box rounded-2xl shadow-lg p-4 h-full border border-[#7042f88b] opacity-[0.9]">
                                    <div className="space-y-2 text-gray-300">
                                        {descriptionParagraphs.map((paragraph, index) => (
                                            <p key={index} className="text-base leading-relaxed">
                                                {paragraph.trim()}.
                                            </p>
                                        ))}
                                    </div>
                                </div>
                                {resumeLink && (
                                    <div className="mt-8 relative z-[100]">
                                        <div className="inline-flex items-center rounded-lg overflow-hidden shadow-lg border border-[#7042f88b] bg-[#030014]/50 backdrop-blur-md">
                                            <a
                                                href={resumeLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="px-6 py-2 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-bold text-sm hover:scale-105 transition-all block relative z-[101] cursor-pointer"
                                                title="View Resume"
                                            >
                                                View Resume
                                            </a>
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        )}
                    </InView>
                </div>

                {/* Right Section - Personal Details */}
                <div className="flex flex-col mt-24 lg:mt-0">
                    <InView triggerOnce={false}>
                        {({ inView, ref }) => (
                            <motion.div
                                ref={ref}
                                initial="hidden"
                                animate={inView ? "visible" : "hidden"}
                                variants={slideInFromRight(0.5)}
                                className="w-full"
                            >
                                <h3 className="text-2xl font-bold text-gray-200 mb-6">
                                    Personal Details
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {personalDetailsItems.map((item, index) => {
                                        const IconComponent = item.icon;
                                        return (
                                            <motion.div
                                                key={index}
                                                initial="hidden"
                                                animate={inView ? "visible" : "hidden"}
                                                variants={slideInFromRight(0.5 + index * 0.1)}
                                                className="Welcome-box rounded-xl shadow-md p-4 flex flex-col border border-[#7042f88b] opacity-[0.9]"
                                            >
                                                <div className="flex items-center mb-2">
                                                    <IconComponent className="text-blue-400 text-xl mr-2" />
                                                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                                                        {item.label}
                                                    </span>
                                                </div>
                                                <p className="text-sm font-medium text-gray-200 mt-1">
                                                    {item.value}
                                                </p>
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </motion.div>
                        )}
                    </InView>
                </div>
            </div>
        </section>
    );
};

export default About;