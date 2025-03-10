import { CiSearch } from "react-icons/ci";

const HeroText = () => {
  return (
    <div className="3sm:gap-3 flex w-full flex-col items-center gap-2 sm:gap-[14px] md:gap-4 lg:gap-6">
      <h1 className="w-[70%] text-center text-lg text-[clamp(1.2rem,5vw,4rem)] leading-[1.2] text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
        Make Your Interior More Minimalistic & Modern
      </h1>

      <p className="3sm:w-[60%] 2sm:text-sm w-[80%] text-center text-xs leading-[1.3] font-light text-white opacity-80 sm:w-[45%] md:w-[50%] md:text-lg lg:text-2xl">
        Turn your room with Panto into a lot more minimalist and modern with
        ease and speed.
      </p>
      <div className="hidden items-center rounded-3xl border border-white/30 bg-white/10 px-2 backdrop-blur-md sm:flex md:h-10 md:w-56 lg:h-12 lg:w-64">
        <input
          type="text"
          placeholder="Search Furniture"
          className="w-full flex-1 bg-transparent text-sm font-normal text-white/60 placeholder-white/50 outline-none"
        />
        <div className="bg-coragne flex h-6 w-6 items-center justify-center rounded-full lg:size-8">
          <CiSearch size={18} className="text-white" />
        </div>
      </div>
    </div>
  );
};

export default HeroText;
