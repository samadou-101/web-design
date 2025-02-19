import { FaShoppingCart } from "react-icons/fa";
import coffeeImg from "../../../assets/hero/hero-coffee.png";
import coffeeBg from "../../../assets/hero/hero-rounded-bg.png";
const HeroContent = () => {
  return (
    <div className="flex w-full gap-[13vw]">
      <div className="flex w-1/2 flex-col gap-10 max-md:w-[80%]">
        <h1 className="text-secondary z-50 w-[90%] text-[3.5vw] leading-normal font-bold max-lg:w-full max-lg:text-[4.3vw] max-md:text-[5.5vw]">
          Enjoy Your <span className="text-primary">coffee</span> before your
          activity
        </h1>
        <p className="text-light w-1/2 text-lg max-2xl:w-[60%] max-xl:w-[75%] max-md:w-[85%] max-md:text-sm">
          Boost your productivity and build your mood with a glass of coffee in
          the morning
        </p>
        <div className="flex w-full justify-between">
          <button className="bg-secondary flex w-[20%] cursor-pointer items-center justify-around rounded-2xl p-2 max-xl:w-[30%] max-lg:w-[40%] max-md:w-[45%] max-sm:w-[55%]">
            <span className="text-white">order now</span>
            <FaShoppingCart className="text-primary" />
          </button>
        </div>
      </div>

      {/* iamge content */}
      {/* <div className="relative z-50 flex h-fit w-1/3 items-center justify-center rounded-full bg-[url(../../../assets/hero/hero-rounded-bg.png)] pb-8"> */}
      <div
        className="relative z-50 flex w-1/3 items-center justify-center bg-contain bg-center bg-no-repeat pb-8"
        style={{ backgroundImage: `url(${coffeeBg})` }}
      >
        {/* <img
          src={coffeeBg}
          alt=""
          // className="absolute top-1/2 left-1/2 z-0 -translate-x-1/2 -translate-y-1/2 transform max-xl:max-w-[95%]"
          className="absolute top-0 left-0 z-0 -translate-x-1/2 -translate-y-1/2 transform max-xl:max-w-[95%]"
        /> */}
        <img
          src={coffeeImg}
          alt=""
          className="relative z-50 max-w-full max-xl:max-w-[85%]"
        />
      </div>
    </div>
  );
};

export default HeroContent;
