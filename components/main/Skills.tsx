"use client";

import {
    backendSkills,
    devTools,
    frontendSkills,
    libraries,
    skillCategories,
} from "@/constants/portfolioData";
import React from "react";
import SkillText from "../sub/SkillText";
import { InView } from "react-intersection-observer";
import { slideInFromLeft, slideInFromRight } from "@/utils/motion";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import { FaTh } from "react-icons/fa";

const Skills = () => {
    return (
        <section
            id="skills"
            className="flex flex-col items-center justify-center gap-3 h-fit relative overflow-hidden py-5"
            style={{ transform: "scale(0.9)" }}
        >
            <SkillText />

            <div className="flex flex-col items-center justify-center w-[95%] gap-4">
                <div className="w-full flex flex-col lg:flex-row items-stretch justify-between gap-4">
                    <div className="w-full lg:w-1/2 h-full">
                        <InView triggerOnce={false}>
                            {({ inView, ref }) => (
                                <motion.div
                                    ref={ref}
                                    initial="hidden"
                                    animate={inView ? "visible" : "hidden"}
                                    variants={slideInFromLeft(0.5)}
                                    className="rounded-md text-[white] w-full h-full my-auto py-[8px] px-[10px] border border-[#7042f88b] opacity-[0.9] flex flex-col"
                                >
                                    <div className="flex items-center mb-4">
                                        <FaTh className="text-blue-500 text-xl mr-2" />
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-2xl font-bold">
                                            {skillCategories.frontend}
                                        </span>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4">
                                        {frontendSkills.map((skill, index) => (
                                            <div key={index} className="flex items-center">
                                                <FaCheckCircle className="text-blue-500 text-sm mr-3" />
                                                <span className="text-gray-200 text-base">
                                                    {skill.skill_name}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </InView>
                    </div>
                    <div className="w-full lg:w-1/2 h-full">
                        <InView triggerOnce={false}>
                            {({ inView, ref }) => (
                                <motion.div
                                    ref={ref}
                                    initial="hidden"
                                    animate={inView ? "visible" : "hidden"}
                                    variants={slideInFromRight(0.5)}
                                    className="rounded-md text-[white] w-full h-full py-[8px] px-[10px] border border-[#7042f88b] opacity-[0.9] flex flex-col"
                                >
                                    <div className="flex items-center mb-4">
                                        <FaTh className="text-blue-500 text-xl mr-2" />
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-2xl font-bold">
                                            {skillCategories.backend}
                                        </span>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4">
                                        {backendSkills.map((skill, index) => (
                                            <div key={index} className="flex items-center">
                                                <FaCheckCircle className="text-blue-500 text-sm mr-3" />
                                                <span className="text-gray-200 text-base">
                                                    {skill.skill_name}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </InView>
                    </div>
                </div>
                <div className="w-full flex flex-col lg:flex-row items-stretch justify-between gap-4">
                    <div className={`w-full ${libraries.length > 0 ? "lg:w-1/2" : ""} h-full`}>
                        <InView triggerOnce={false}>
                            {({ inView, ref }) => (
                                <motion.div
                                    ref={ref}
                                    initial="hidden"
                                    animate={inView ? "visible" : "hidden"}
                                    variants={slideInFromLeft(0.5)}
                                    className="rounded-md text-[white] w-full h-full my-auto py-[8px] px-[10px] border border-[#7042f88b] opacity-[0.9] flex flex-col"
                                >
                                    <div className="flex items-center mb-4">
                                        <FaTh className="text-blue-500 text-xl mr-2" />
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-2xl font-bold">
                                            {skillCategories.devTools}
                                        </span>
                                    </div>
                                    <div className={`grid grid-cols-1 sm:grid-cols-2 ${libraries.length > 0 ? "" : "lg:grid-cols-4"} gap-3 my-4`}>
                                        {devTools.map((skill, index) => (
                                            <div key={index} className="flex items-center">
                                                <FaCheckCircle className="text-blue-500 text-sm mr-3" />
                                                <span className="text-gray-200 text-base">
                                                    {skill.skill_name}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </InView>
                    </div>

                    {libraries.length > 0 && (
                        <div className="w-full lg:w-1/2 h-full">
                            <InView triggerOnce={false}>
                                {({ inView, ref }) => (
                                    <motion.div
                                        ref={ref}
                                        initial="hidden"
                                        animate={inView ? "visible" : "hidden"}
                                        variants={slideInFromRight(0.5)}
                                        className="rounded-md text-[white] w-full h-full py-[8px] px-[10px] border border-[#7042f88b] opacity-[0.9] flex flex-col"
                                    >
                                        <div className="flex items-center mb-4">
                                            <FaTh className="text-blue-500 text-xl mr-2" />
                                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-2xl font-bold">
                                                {skillCategories.libraries}
                                            </span>
                                        </div>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4">
                                            {libraries.map((skill, index) => (
                                                <div key={index} className="flex items-center">
                                                    <FaCheckCircle className="text-blue-500 text-sm mr-3" />
                                                    <span className="text-gray-200 text-base">
                                                        {skill.skill_name}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </InView>
                        </div>
                    )}
                </div>
            </div>

            <div className="hidden md:block w-full h-full absolute top-24">
                <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
                    <video
                        className="w-full h-auto"
                        preload="none"
                        playsInline
                        loop
                        muted
                        autoPlay
                        src="/cards-video.webm"
                    />
                </div>
            </div>
        </section>
    );
};

export default Skills;
