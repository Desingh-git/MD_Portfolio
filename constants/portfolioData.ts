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
    roles: ["Fullstack Developer", "Tech Innovator", "Data Scientist"],
    mainPrefix: "Process is more",
    highlightText: "important",
    mainSuffix: "then the",
    typingWords: ["Success", "Result", "Growth", "Innovation"],
    profileImage: "/md.jpg",
    ctaButton: "Learn More!",
    ctaLink: "#about",
};

// ==================== ABOUT SECTION ====================
export const aboutData = {
    name: "Mariya Desingh V",
    profileImage: "/md.jpg",
    description:
        "I am a passionate Computer Science postgraduate student specializing in Data Science, with a strong interest in web development, software engineering, and machine learning. I enjoy building innovative and practical applications that solve real-world problems. I have hands-on experience working with technologies such as Python, Java, SQL, MongoDB, Flask, PHP, HTML, CSS, and JavaScript. My projects range from web applications and database-driven systems to machine learning and data visualization solutions. I am always eager to learn new technologies, improve my problem-solving skills, and explore emerging trends in AI and data-driven applications. I enjoy turning ideas into functional, user-friendly solutions and continuously strive to grow as a developer and data scientist.",
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
    libraries: "Libraries",
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

    { skill_name: "Figma" },
    { skill_name: "Arduino" },
    { skill_name: "NetBeans" },


];

export const libraries = [
    { skill_name: "Framer Motion" },
    { skill_name: "React Icons" },
    { skill_name: "JWT" },

];

// ==================== PROJECTS SECTION ====================
export const projectsTitle = "My Projects";

export const projectsData = [
    {
        id: 1,
        name: "E-Commerce Dashboard",
        description: "A comprehensive admin dashboard for managing online stores.",
        image: "/my.png",
        category: "Web",
        technologies: ["React", "Next.js", "TypeScript"],
        link: "https://github.com/Desingh-git/Plant-Disease-prediction-using-ML",
    },
    {
        id: 2,
        name: "Fitness Tracker App",
        description: "A mobile-first app to track workouts, nutrition, and personal goals.",
        image: "/my.png",
        category: "Mobile",
        technologies: ["React Native", "Firebase"],
        link: "https://github.com",
    },
    {
        id: 3,
        name: "Brand Identity System",
        description: "Complete brand guidelines and visual identity package for a fintech startup.",
        image: "/my.png",
        category: "Design",
        technologies: ["Figma", "Illustrator"],
        link: "https://github.com",
    },
    {
        id: 4,
        name: "Brand Identity System",
        description: "Complete brand guidelines and visual identity package for a fintech startup.",
        image: "/my.png",
        category: "Design",
        technologies: ["Figma", "Illustrator"],
        link: "https://github.com",
    },
];

// ==================== CERTIFICATES SECTION ====================
export const certificatesTitle = "Certifications";

export const certificatesData = [
    {
        name: "Full Stack Development Intern",
        year: "2023",
        company: "MuLearn",
    },
    {
        name: "React Native Developer",
        year: "2022",
        company: "Tech Solutions Inc.",
    },
    {
        name: "React Native Developer",
        year: "2022",
        company: "Tech Solutions Inc.",
    },
    {
        name: "React Native Developer",
        year: "2022",
        company: "Tech Solutions Inc.",
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
