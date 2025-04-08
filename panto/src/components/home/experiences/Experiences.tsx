import Content from "./Content";
import EpxBg from "./EpxBg";

const Experiences = () => {
  return (
    <div className="mr-34 mb-20 -ml-8 flex w-full flex-col gap-8 pt-10 max-xl:pr-20 md:mb-60 md:gap-12 md:pt-[10rem] lg:flex-row lg:justify-between lg:gap-2 lg:px-0 2xl:pr-28">
      <div className="w-full lg:w-auto">
        <EpxBg />
      </div>
      <Content />
    </div>
  );
};

export default Experiences;
