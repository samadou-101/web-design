import { HiArrowLongRight } from "react-icons/hi2";

const Content = () => {
  return (
    <div className="ml-28 flex w-[85%] flex-col gap-5 lg:w-1/2 xl:w-1/3">
      <span className="text-coragne text-lg font-semibold">Experiences</span>
      <h2 className="text-text text-2xl font-bold md:text-4xl">
        We Provide You The Best Experience
      </h2>
      <p className="text-gray text-base md:text-lg">
        You don’t have to worry about the result because all of these interiors
        are made by people who are professionals in their fields with an elegant
        and luxurious style and with premium quality materials
      </p>
      <div className="flex items-center gap-2">
        <span className="text-coragne text-base">More Info</span>
        <span className="text-coragne text-sm">
          <HiArrowLongRight size={25} />
        </span>
      </div>
    </div>
  );
};

export default Content;
