"use client";
import React, { useState, useEffect } from "react";
import { FaHome, FaUser, FaBook, FaBriefcase, FaEnvelope, FaCertificate } from "react-icons/fa";
import { motion } from "framer-motion";
import { navItems } from "@/constants/portfolioData";

const Navbar = () => {
    const [active, setActive] = useState("Home");
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const iconMap: { [key: string]: any } = {
        "Home": FaHome,
        "About": FaUser,
        "Skills": FaBook,
        "Projects": FaBriefcase,
        "Certificates": FaCertificate,
        "Contact": FaEnvelope,
    };

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;

        const handleScroll = () => {
            const scrollY = window.scrollY;
            const sections = document.querySelectorAll("section[id], div[id='home']");

            // Show navbar when scrolling
            setIsVisible(true);

            // Hide after 4 seconds of inactivity
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                setIsVisible(false);
            }, 4000);

            // Check if we are at the very top
            if (scrollY < 50) {
                setActive("Home");
                setLastScrollY(scrollY);
                return;
            }

            let currentSection = "";
            sections.forEach((section) => {
                const sectionTop = (section as HTMLElement).offsetTop - 150;
                const sectionHeight = (section as HTMLElement).offsetHeight;
                if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                    currentSection = section.getAttribute("id") || "";
                }
            });

            if (currentSection) {
                const navItem = navItems.find((item) => item.href === `#${currentSection}`);
                if (navItem) {
                    setActive(navItem.name);
                }
            }
            setLastScrollY(scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => {
            window.removeEventListener("scroll", handleScroll);
            clearTimeout(timeoutId);
        };
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{
                opacity: isVisible ? 1 : 0,
                x: isVisible ? 0 : 100,
                pointerEvents: isVisible ? "auto" : "none"
            }}
            transition={{ duration: 0.5 }}
            className="hidden md:flex fixed right-5 top-[25%] z-50 flex-col gap-4 items-center"
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
        >
            {navItems.map((item, index) => {
                const Icon = iconMap[item.name] || FaHome;
                return (
                    <a
                        key={index}
                        href={item.href}
                        onClick={() => setActive(item.name)}
                        className="group flex flex-row-reverse items-center gap-2 relative"
                    >
                        {/* Icon Container */}
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center border transition-all duration-300 shadow-lg ${active === item.name
                            ? "bg-gradient-to-r from-purple-500 to-cyan-500 border-transparent shadow-purple-500/50"
                            : "bg-[#0300145e] border-[#7042f861] hover:bg-[#2A0E61] hover:border-purple-500"
                            }`}>
                            <Icon className={`text-xl transition-colors ${active === item.name ? "text-white" : "text-gray-300 group-hover:text-white"}`} />
                        </div>

                        {/* Label */}
                        <div className="hidden group-hover:block absolute right-16 bg-[#0300145e] border border-[#7042f861] text-white px-3 py-1 rounded-md text-sm font-semibold whitespace-nowrap backdrop-blur-md">
                            {item.name}
                        </div>
                    </a>
                )
            })}
        </motion.div>
    );
};

export default Navbar;