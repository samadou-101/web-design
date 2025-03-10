import Header from "./Header";
import background from "@assets/hero/main-bg.png";
import HeroText from "./HeroText";
const Hero = () => {
  return (
    <div className="2sm:space-y-4 3sm:space-y-3 relative flex h-auto flex-col space-y-2 sm:space-y-6 md:space-y-5 lg:space-y-8">
      <div className="absolute top-0 left-0 -z-10 m-0 w-full p-0 md:-top-5 lg:-top-8 xl:-top-20">
        <img src={background} alt="" className="w-full" />
      </div>
      <Header />
      <HeroText />
    </div>
  );
};

export default Hero;
