import React from "react";
import Header from "../header/Header";
import HeroContent from "./HeroContent";

const Hero = () => {
  return (
    <div className="relative flex h-screen w-full flex-col gap-y-24 overflow-hidden px-[5vw] pt-[2vh]">
      <Header />
      <HeroContent />
    </div>
  );
};

export default Hero;
