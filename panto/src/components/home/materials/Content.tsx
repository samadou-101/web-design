import { HiArrowLongRight } from "react-icons/hi2";

const Content = () => {
  return (
    <div className="my-auto ml-20 flex h-full w-[85%] flex-col justify-center gap-5 self-start max-md:ml-8 lg:ml-14 lg:w-1/2 xl:ml-20 xl:w-1/3 2xl:ml-24">
      <span className="text-coragne text-lg font-semibold tracking-wide">
        Materials
      </span>
      <h2 className="text-text text-2xl font-bold md:text-4xl">
        Very Serious Materials For Making Furniture
      </h2>
      <p className="text-gray text-base md:text-lg">
        Because panto was very serious about designing furniture for our
        environment, using a very expensive and famous capital but at a
        relatively low price
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
