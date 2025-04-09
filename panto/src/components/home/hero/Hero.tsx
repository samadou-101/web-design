import Header from "./Header";
import background from "@assets/hero/main-bg.png";
import HeroText from "./HeroText";
import { useEffect, useState } from "react";

const Hero = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative h-fit min-h-screen w-full overflow-hidden">
      {/* Header */}
      <Header />

      {/* Background Image Container */}
      <div
        className="5xl:bg-[center_60%] absolute top-0 left-0 -z-10 h-full w-full bg-cover bg-[center_bottom] bg-no-repeat sm:bg-[center_70%] lg:bg-[center_60%] xl:bg-[center_50%]"
        style={{ backgroundImage: `url(${background})` }}
      ></div>

      {/* Content */}
      <div className="relative z-10 flex min-h-full flex-col space-y-2 p-4 pt-14 sm:space-y-6 sm:pt-16 md:space-y-5 md:pt-20 lg:space-y-8">
        <HeroText scrolled={scrolled} />
      </div>
    </div>
  );
};

export default Hero;
