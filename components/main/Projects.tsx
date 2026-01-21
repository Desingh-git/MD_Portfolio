"use client";

import React from "react";
import ProjectCard from "../sub/ProjectCard";
import { projectsData, projectsTitle } from "@/constants/portfolioData";
import { motion } from "framer-motion";
import { slideInFromRight, slideInFromTop } from "@/utils/motion";
import { InView } from "react-intersection-observer";

const Projects = () => {
    return (
        <section
            id="projects"
            className="flex flex-col items-center justify-center py-5 relative z-20"
        >
            {/* Title */}
            <div className="flex justify-center mb-10 w-full">
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
                                {projectsTitle}
                            </h2>
                        </motion.div>
                    )}
                </InView>
            </div>

            {/* Horizontal scroll container */}
            <div className="w-full flex overflow-x-scroll py-10 px-10 gap-10 scrollbar-hidden">
                {projectsData.map((project, index) => (
                    <InView key={project.id} triggerOnce={false}>
                        {({ inView, ref }) => (
                            <motion.div
                                ref={ref}
                                initial="hidden"
                                animate={inView ? "visible" : "hidden"}
                                variants={slideInFromRight(0.2 * index)}
                                className="w-[300px] md:w-[400px] flex-shrink-0"
                            >
                                <ProjectCard
                                    src={project.image}
                                    title={project.name}
                                    description={project.description}
                                    category={project.category}
                                    technologies={project.technologies}
                                    githubLink={project.link}
                                />
                            </motion.div>
                        )}
                    </InView>
                ))}
            </div>
        </section>
    );
};

export default Projects;