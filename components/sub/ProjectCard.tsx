import Image from "next/image";
import React from "react";
import { FaGithub } from "react-icons/fa";

const prefix = process.env.NODE_ENV === "production" ? "/MD_Portfolio" : "";

interface Props {
    src: string;
    title: string;
    description: string;
    category?: string;
    technologies?: string[];
    githubLink?: string;
}

const ProjectCard = ({ src, title, description, category, technologies, githubLink }: Props) => {
    return (
        <div className="relative overflow-hidden rounded-2xl bg-[#0300145e] border border-[#7042f861] backdrop-blur-lg shadow-xl h-[480px] w-full flex flex-col group hover:shadow-purple-500/20 hover:border-purple-500 transition-all duration-300 transform hover:-translate-y-2">

            {/* Image Section - Top 55% */}
            <div className="relative w-full h-[55%] overflow-hidden">
                <Image
                    src={src.startsWith('http') ? src : `${prefix}${src}`}
                    alt={title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />

                {category && (
                    <span className="absolute top-4 right-4 rounded-full bg-[#030014]/80 backdrop-blur-sm text-cyan-400 text-xs font-bold px-3 py-1 shadow-sm uppercase tracking-wide border border-[#7042f861]">
                        {category}
                    </span>
                )}
            </div>

            {/* Content Section - Bottom 45% */}
            <div className="h-[45%] p-6 flex flex-col justify-between relative z-10">
                <div>
                    <h3 className="text-xl font-bold text-white mb-2 line-clamp-1" title={title}>{title}</h3>
                    <p className="text-gray-400 text-sm line-clamp-3 leading-relaxed">
                        {description}
                    </p>
                </div>

                <div className="flex flex-col gap-3">
                    {technologies && technologies.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                            {technologies.map((tech) => (
                                <span
                                    key={tech}
                                    className="px-2 py-1 rounded-md bg-white/10 text-[10px] font-bold text-gray-300 border border-white/10 uppercase tracking-wider"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    )}

                    {githubLink && (
                        <div className="pt-1">
                            <a
                                href={githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-gray-400 hover:text-cyan-400 font-semibold text-sm transition-colors group/link"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <FaGithub className="mr-2 text-lg group-hover/link:text-white transition-colors" />
                                <span className="group-hover/link:text-white transition-colors">View Code</span>
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;