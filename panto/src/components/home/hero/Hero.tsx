import Header from "./Header";
import background from "@assets/hero/main-bg.png";
const Hero = () => {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 -z-10 m-0 w-full bg-red-50 p-0">
        <img src={background} alt="" className="w-full" />
      </div>
      <Header />
    </div>
  );
};

export default Hero;
