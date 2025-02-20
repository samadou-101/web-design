import React from "react";
import Header from "../header/Header";
import HeroContent from "./HeroContent";
import background_1 from "../../../assets/hero/bg_img_hero.png";

const Hero = () => {
  return (
    <div className="bg-background relative flex h-auto w-full flex-col gap-y-24 overflow-hidden px-[5vw] pt-[2vh] max-xl:gap-16 max-lg:gap-10 max-md:gap-9">
      <div className="absolute -top-[2.5vw] -right-[5vw] h-auto w-1/3 min-w-[300px] overflow-hidden max-md:w-1/3 max-sm:min-w-[250px]">
        <img className="max-w-full opacity-90" src={background_1} alt="" />
      </div>
      <Header />
      <HeroContent />
    </div>
  );
};

export default Hero;
