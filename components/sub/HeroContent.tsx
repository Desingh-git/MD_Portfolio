"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
    slideInFromLeft,
    slideInFromRight,
    slideInFromTop,
} from "@/utils/motion";
import { heroData, socialLinks, aboutData } from "@/constants/portfolioData";
import Image from "next/image";
import { InView } from "react-intersection-observer";
import { FaLinkedin } from "react-icons/fa";

const prefix = process.env.NODE_ENV === "production" ? "/MD_Portfolio" : "";

const HeroContent = () => {
    const [wordIndex, setWordIndex] = useState(0);
    const [displayWord, setDisplayWord] = useState("");
    const [charIndex, setCharIndex] = useState(0);
    const loopWords = heroData.typingWords;

    useEffect(() => {
        const currentWord = loopWords[wordIndex];
        // Typing animation - types one character at a time
        const typeTimer = setTimeout(() => {
            if (charIndex < currentWord.length) {
                setDisplayWord(currentWord.substring(0, charIndex + 1));
                setCharIndex(charIndex + 1);
            } else {
                // Word complete, wait 2 seconds then switch to next word
                const switchTimer = setTimeout(() => {
                    setWordIndex((prev) => (prev + 1) % loopWords.length);
                    setCharIndex(0);
                    setDisplayWord("");
                }, 2000);
                return () => clearTimeout(switchTimer);
            }
        }, 200);

        return () => clearTimeout(typeTimer);
    }, [charIndex, wordIndex, loopWords]);
    return (
        <InView triggerOnce={false}>
            {({ inView, ref }) => (
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="flex md:flex-row flex-col-reverse items-center justify-center gap-10 md:gap-20 md:px-20 px-5 min-h-screen w-full z-20"
                >
                    <div className="h-full w-full md:w-3/6 flex flex-col gap-5 justify-center text-start">
                        <InView triggerOnce={false}>
                            {({ inView, ref }) => (
                                <motion.div
                                    ref={ref}
                                    initial="hidden"
                                    animate={inView ? "visible" : "hidden"}
                                    variants={slideInFromLeft(0.5)}
                                    className="flex flex-col gap-6 mt-6 md:text-5xl text-4xl font-bold text-white max-w-[600px] w-auto h-auto z-20"
                                >
                                    <span>
                                        {heroData.mainPrefix}
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 font-bold">
                                            {" "}
                                            {heroData.highlightText} {" "}
                                        </span>
                                        {heroData.mainSuffix}
                                        <br />
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 font-bold">
                                            {displayWord}
                                            <span className="animate-pulse">|</span>
                                        </span>
                                    </span>
                                </motion.div>
                            )}
                        </InView>

                        <div className="flex flex-row items-center md:gap-5 gap-3 flex-wrap">
                            {heroData.roles.map((role, index) => (
                                <InView key={index} triggerOnce={false}>
                                    {({ inView, ref }) => (
                                        <motion.div
                                            ref={ref}
                                            initial="hidden"
                                            animate={inView ? "visible" : "hidden"}
                                            variants={slideInFromTop}
                                            className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
                                        >
                                            <h1 className="Welcome-text text-[13px]">
                                                {role}
                                            </h1>
                                        </motion.div>
                                    )}
                                </InView>
                            ))}
                        </div>

                        <div className="flex flex-row items-center gap-3 flex-wrap">
                            <InView triggerOnce={false}>
                                {({ inView, ref }) => (
                                    <motion.a
                                        ref={ref}
                                        initial="hidden"
                                        animate={inView ? "visible" : "hidden"}
                                        href={heroData.ctaLink}
                                        variants={slideInFromLeft(1)}
                                        className="py-2 px-6 button-primary text-center text-white cursor-pointer rounded-lg w-auto z-40"
                                    >
                                        {heroData.ctaButton}
                                    </motion.a>
                                )}
                            </InView>
                            {socialLinks
                                .filter((social) => social.name === "Linkedin")
                                .map((social) => (
                                    <InView key={social.name} triggerOnce={false}>
                                        {({ inView, ref }) => (
                                            <motion.a
                                                ref={ref}
                                                initial="hidden"
                                                animate={inView ? "visible" : "hidden"}
                                                variants={slideInFromLeft(0.8)}
                                                href={social.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="z-40 text-white hover:text-blue-500 transition-colors duration-300"
                                            >
                                                <FaLinkedin size={32} />
                                            </motion.a>
                                        )}
                                    </InView>
                                ))}
                        </div>
                    </div>

                    <InView triggerOnce={false}>
                        {({ inView, ref }) => (
                            <motion.div
                                ref={ref}
                                initial="hidden"
                                animate={inView ? "visible" : "hidden"}
                                variants={slideInFromRight(0.8)}
                                className="w-full md:w-3/6 h-full flex justify-center items-center z-40"
                            >
                                <div className="flex flex-col items-center gap-4">
                                    <div className="relative flex justify-center items-center rounded-full overflow-hidden border-[6px] border-[#7042f88b] bg-gradient-to-r from-purple-500 to-cyan-500 aspect-square w-[280px] h-[280px] md:w-[400px] md:h-[400px]">
                                        <Image
                                            src={`${prefix}${heroData.profileImage}`}
                                            alt="profile"
                                            fill
                                            className="object-cover"
                                            quality={100}
                                            priority
                                        />
                                    </div>
                                    <h1 className="text-3xl font-bold text-white mt-4">
                                        {aboutData.name}
                                    </h1>
                                </div>
                            </motion.div>
                        )}
                    </InView>
                </motion.div>
            )}
        </InView>
    );
};

export default HeroContent;