import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
    return (
        <div className="relative h-screen w-full flex items-center justify-center" id="home">
            {/* Video removed */}
            <HeroContent />
        </div>
    );
};

export default Hero;
