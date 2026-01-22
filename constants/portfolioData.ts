/**
 * Portfolio Configuration File
 * 
 * Edit this file to easily change all portfolio details:
 * - Hero section
 * - About section
 * - Social links
 * - Skills, Projects, Certificates
 */

// ==================== HERO SECTION ====================
export const heroData = {
    roles: ["Fullstack Developer", "Tech Innovator", "Data Analytics"],
    mainPrefix: "Process is more",
    highlightText: "important",
    mainSuffix: "then the",
    typingWords: ["Success", "Result"],
    profileImage: "/md.jpg",
    ctaButton: "Learn More!",
    ctaLink: "#about",
};

// ==================== ABOUT SECTION ====================
export const aboutData = {
    name: "Mariya Desingh V",
    profileImage: "/md.jpg",
    description:
        "I am a results-driven Software Developer and Data Science enthusiast with hands-on experience in Python, Java, Flask, PHP, SQL, web development, machine learning, and data visualization. I specialize in building scalable, real-world web and software applications that turn complex data into actionable insights. With a strong foundation in full-stack development and analytical problem-solving, I am committed to writing clean, efficient, and maintainable code. I am highly motivated by continuous learning and eager to contribute innovative solutions in a professional, impact-driven environment.",
    tagline: "Shaping Tomorrow with Code and Creativity",
};

// ==================== PERSONAL DETAILS ====================
export const personalDetails = {
    currentAddress: "Bengaluru, Karnataka",
    nativeAddress: "Kallakurichi, Tamil Nadu",
    languages: "English, Tamil",
    mobileNumber: "+91 9629163914",
    email: "desinghmariya@gmail.com",
};

// ==================== SOCIAL LINKS ====================
export const socialLinks = [
    {
        name: "Linkedin",
        src: "/linkedin.svg",
        link: "https://www.linkedin.com/in/mariya-desingh-v-486778353",
    },
    {
        name: "Github",
        src: "/github.svg",
        link: "https://github.com/Desingh-git",
    },
];

// ==================== SKILLS SECTION ====================
export const skillsTitle = " My Skills";

export const skillCategories = {
    frontend: "Frontend",
    backend: "Backend",
    devTools: "Tools",
    libraries: "Code Language",
};

export const frontendSkills = [
    { skill_name: "Html 5" },
    { skill_name: "Css" },
    { skill_name: "Bootstrap" },

];

export const backendSkills = [

    { skill_name: "MySQL" },
    { skill_name: "Firebase" },
    { skill_name: "MongoDB" },
];

export const devTools = [
    { skill_name: "GitHub" },
    { skill_name: "Wordpress" },
    { skill_name: "Arduino" },
    { skill_name: "NetBeans" },
    { skill_name: "Ubuntu" },
    { skill_name: "Tableau" },
    { skill_name: "Android Studio" },


];

export const libraries = [
    { skill_name: "Python" },
    { skill_name: "Java" },
    { skill_name: "R" },
    { skill_name: "C" },

];

// ==================== PROJECTS SECTION ====================
export const projectsTitle = "My Projects";

export const projectsData = [
    {
        id: 1,
        name: "Plant Disease prediction using ML ",
        description: "A simple Flask-based web app that predicts plant diseases from uploaded images using a pre-trained Keras model.",
        image: "/pro1.png",
        category: "Web",
        technologies: ["Python", "Flask", "Keras"],
        link: "https://github.com/Desingh-git/Plant-Disease-prediction-using-ML.git",
    },
    {
        id: 2,
        name: "Vehicle Locator in Java",
        description: "Vehicle Locator is a Java application designed to help drivers quickly find the nearest available mechanic when a vehicle breaks down.",
        image: "/pro2.png",
        category: "Web",
        technologies: ["Java", "Mysql"],
        link: "https://github.com/Desingh-git/Vehicle-Locator-in-Java.git",
    },
    {
        id: 3,
        name: "College Hall Booking System Using PHP",
        description: "A lightweight system to browse venues, view available slots and submit booking requests with optional image uploads and permission letters.",
        image: "/pro3.png",
        category: "Web",
        technologies: ["PHP", "Mysql"],
        link: "https://github.com/Desingh-git/College-Hall-Booking-System-Using-PHP.git",
    },
    {
        id: 4,
        name: "Text to Speech Convertor in Python",
        description: "A small Flask-based web app that converts input text to speech using the ElevenLabs Text-to-Speech API and returns an output.mp3 audio file.",
        image: "/pro4.png",
        category: "Web",
        technologies: ["Python"],
        link: "https://github.com/Desingh-git/Text-to-Speech-Convertor-in-Python.git",
    },
];

// ==================== CERTIFICATES SECTION ====================
export const certificatesTitle = "Certifications";

export const certificatesData = [
    {
        name: "Full Stack Development and Data Analytics Intern",
        year: "2025",
        company: "Techforge, Selam",
    },
    {
        name: "AWS Cloud Practitioner Essentials",
        year: "Sep 29, 2025",
        company: "AWS",
    },
    {
        name: "Developer and Technology Job Simulation",
        year: "July 25, 2025",
        company: "accenture",
    },
    {
        name: "Data Visualisation: Empowering Business with Effective Insight",
        year: "July 9, 2025",
        company: "TATA",
    },
    {
        name: "Data Analytics Job Simulation",
        year: "July 8, 2025",
        company: "Deloitte",
    },
    {
        name: "Certified Wifi Pentesting Completing",
        year: "July 15, 2025",
        company: " Cappriciosec University",
    },
];

export const resumeLink = "/Mariya_Desingh_Resume.pdf";

// ==================== CONTACT SECTION ====================
export const contactData = {
    title: "Contact Me",
    subtitle: "Let's",
    highlight: "Connect",
};

// ==================== NAVIGATION ====================
export const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Certificates", href: "#certificates" },
    { name: "Contact", href: "#contact" },
];
