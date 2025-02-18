import { FaShoppingCart } from "react-icons/fa";

const HeroContent = () => {
  return (
    <div className="">
      <div className="flex w-1/2 flex-col gap-10 max-md:w-[60%]">
        <h1 className="text-secondary w-[90%] text-[3.5vw] leading-normal font-bold max-md:w-full max-md:text-[5vw]">
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
    </div>
  );
};

export default HeroContent;
