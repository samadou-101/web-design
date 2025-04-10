import { FaShoppingCart } from "react-icons/fa";
import coffeeImg from "../../../assets/hero/hero-coffee.png";
import coffeeBg from "../../../assets/hero/hero-rounded-bg.png";

const HeroContent = () => {
  return (
    <div className="flex w-full flex-col items-center gap-8 px-4 md:flex-row md:gap-6 md:px-6 lg:gap-[13vw] lg:px-8">
      <div className="flex w-full flex-col gap-6 md:w-2/3 md:gap-10 lg:w-1/2">
        <h1 className="text-secondary z-50 text-3xl leading-tight font-bold tracking-tight sm:text-4xl md:text-[clamp(2rem,3.5vw,3rem)] lg:text-[3.3vw]">
          Enjoy Your <span className="text-primary">coffee</span> before your
          activity
        </h1>
        <p className="text-light w-full text-base leading-relaxed sm:w-3/4 md:w-2/3 md:text-lg lg:w-1/2">
          Boost your productivity and build your mood with a glass of coffee in
          the morning
        </p>
        <div className="flex w-full">
          <button className="bg-secondary flex w-full items-center justify-center gap-2 rounded-2xl p-2.5 text-white sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4">
            <span>order now</span>
            <FaShoppingCart className="text-primary" />
          </button>
        </div>
      </div>

      {/* image content - hidden below md, visible from md up */}
      <div
        className="relative z-50 hidden items-center justify-center bg-contain bg-center bg-no-repeat pb-6 md:flex md:w-1/3 lg:w-1/3"
        style={{ backgroundImage: `url(${coffeeBg})` }}
      >
        <img
          src={coffeeImg}
          alt="Coffee cup"
          className="relative z-50 w-[80%] max-w-[85%] md:max-w-[90%]"
        />
      </div>
    </div>
  );
};

export default HeroContent;
