import Header from "./Header";
import background from "@assets/hero/main-bg.png";
import HeroText from "./HeroText";

const Hero = () => {
  return (
    <div className="relative h-fit min-h-screen w-full overflow-hidden">
      {/* Header */}
      <Header />

      {/* Background Image Container */}
      <div
        className="5xl:bg-[position:0%_68%] absolute top-0 -left-[1.8px] -z-10 h-full w-full bg-cover bg-bottom bg-no-repeat max-lg:bg-center"
        style={{ backgroundImage: `url(${background})` }}
      ></div>

      {/* Content */}
      <div className="relative z-10 flex min-h-full flex-col space-y-2 p-4 pt-14 sm:space-y-6 sm:pt-16 md:space-y-5 md:pt-20 lg:space-y-8">
        <HeroText />
      </div>
    </div>
  );
};

export default Hero;
