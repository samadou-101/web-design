import Header from "./Header";
import background from "@assets/hero/main-bg.png";
import HeroText from "./HeroText";

const Hero = () => {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      <div className="5xl:-translate-y-[18rem] 3xl:-translate-y-[10rem] 4xl:-translate-y-[15rem] absolute top-0 left-0 -z-10 w-full xl:-translate-y-[5rem] 2xl:-translate-y-[12rem]">
        <img
          src={background}
          alt="Hero background"
          className="max-h-full w-full max-lg:h-screen max-lg:object-cover lg:object-bottom"
        />
      </div>
      <div className="2sm:space-y-4 3sm:space-y-3 relative z-10 flex flex-col space-y-2 p-4 sm:space-y-6 md:space-y-5 lg:space-y-8">
        <Header />
        <HeroText />
      </div>
    </div>
  );
};

export default Hero;
