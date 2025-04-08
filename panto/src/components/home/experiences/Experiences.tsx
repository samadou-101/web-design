import { HiArrowLongRight } from "react-icons/hi2";
import EpxBg from "./EpxBg";

const Experiences = () => {
  return (
    <div className="mb-20 flex flex-col gap-8 px-4 pt-10 md:mb-60 md:gap-12 md:pt-[10rem] lg:flex-row lg:justify-between lg:gap-0 lg:px-0">
      {/* Background img */}
      <div className="w-full lg:w-auto">
        <EpxBg />
      </div>
      {/* Content */}
      <div className="flex w-full flex-col gap-5 lg:w-1/3 xl:w-1/4">
        <span className="text-corange text-lg font-semibold">Experiences</span>
        <h2 className="text-text text-2xl font-bold md:text-4xl">
          We Provide You The Best Experience
        </h2>
        <p className="text-gray text-base md:text-lg">
          You don’t have to worry about the result because all of these
          interiors are made by people who are professionals in their fields
          with an elegant and luxurious style and with premium quality materials
        </p>
        <div className="flex items-center gap-2">
          <span className="text Juli-corange text-base">More Info</span>
          <span className="text-corange text-sm">
            <HiArrowLongRight size={25} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
