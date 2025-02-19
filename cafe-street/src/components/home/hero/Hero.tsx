import React from "react";
import Header from "../header/Header";
import HeroContent from "./HeroContent";

const Hero = () => {
  return (
    <div className="bg-background relative flex h-auto w-full flex-col gap-y-24 overflow-hidden px-[5vw] pt-[2vh] max-xl:gap-16 max-lg:gap-10 max-md:gap-9">
      <Header />
      <HeroContent />
    </div>
  );
};

export default Hero;
