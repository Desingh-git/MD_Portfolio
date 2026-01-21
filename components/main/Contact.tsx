"use client";

import React, { useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import { personalDetails, socialLinks, contactData } from "@/constants/portfolioData";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import { InView } from "react-intersection-observer";

const Contact = () => {
    const [formData, setFormData] = useState({
        email: "",
        mobile: "",
        message: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate form submission
        toast.success("Message sent successfully!");
        setFormData({ email: "", mobile: "", message: "" });
    };

    return (
        <section id="contact" className="py-10 flex flex-col items-center justify-center relative z-20">
            <h2 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
                {contactData.title}
            </h2>

            <InView triggerOnce={false}>
                {({ inView, ref }) => (
                    <motion.div
                        ref={ref}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={slideInFromTop}
                        className="w-[90%] md:w-[60%] flex flex-col gap-10 bg-white/5 backdrop-blur-lg border border-purple-500/30 p-10 rounded-2xl shadow-2xl z-20 items-center relative overflow-hidden"
                    >
                        {/* Background Glow Effect */}
                        <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-gradient-to-r from-transparent via-purple-500/10 to-transparent rotate-45 animate-pulse pointer-events-none" />

                        {/* Contact Info */}
                        <div className="w-full flex flex-col gap-8 justify-center items-center text-center relative z-10">
                            <h3 className="text-3xl font-bold text-white mb-6 tracking-wide">
                                {contactData.subtitle} <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">{contactData.highlight}</span>
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
                                {/* Email Card */}
                                <a href={`mailto:${personalDetails.email}`} className="group flex flex-col items-center gap-4 p-6 rounded-xl bg-[#0300145e] border border-[#7042f861] hover:bg-[#2A0E61]/50 hover:border-purple-500 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-purple-500/20">
                                    <div className="p-4 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 shadow-lg group-hover:scale-110 transition-transform">
                                        <FaEnvelope className="text-2xl text-white" />
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold mb-1">Email Me</p>
                                        <p className="text-base text-white font-medium break-all">{personalDetails.email}</p>
                                    </div>
                                </a>

                                {/* Mobile Card */}
                                <div className="group flex flex-col items-center gap-4 p-6 rounded-xl bg-[#0300145e] border border-[#7042f861] hover:bg-[#2A0E61]/50 hover:border-cyan-500 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-cyan-500/20">
                                    <div className="p-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg group-hover:scale-110 transition-transform">
                                        <FaPhone className="text-2xl text-white" />
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold mb-1">Call Me</p>
                                        <p className="text-base text-white font-medium">{personalDetails.mobileNumber}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="flex gap-6 mt-8">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.name}
                                        href={social.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="p-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-purple-500/50 hover:text-purple-400 transition-all duration-300 text-white text-2xl shadow-lg"
                                    >
                                        {social.name === "Github" && <FaGithub />}
                                        {social.name === "Linkedin" && <FaLinkedin />}
                                        {social.name === "MuLearn" && <span className="text-xs font-bold">M</span>}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </InView>
            <ToastContainer position="bottom-right" theme="dark" />
        </section>
    );
};

export default Contact;
