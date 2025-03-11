import { CiSearch } from "react-icons/ci";

const HeroText = () => {
  return (
    <div className="flex w-full flex-col items-center gap-[min(4vw,2rem)]">
      {/* Headline */}
      <h1 className="4xl:w-[40%] w-[85%] text-center text-3xl leading-[1.2] font-semibold text-white sm:w-[85%] sm:[font-size:clamp(1.5rem,6vh,4rem)] md:w-[75%] lg:w-[60%] xl:w-[52%] 2xl:w-[45%]">
        Make Your Interior More Minimalistic & Modern
      </h1>

      {/* Subtitle */}
      <p className="w-[90%] text-center text-base leading-[1.4] font-light text-white/80 sm:w-[60%] sm:[font-size:clamp(1rem,2.2vh,1.5rem)] md:w-[50%]">
        Turn your room with Panto into a lot more minimalist and modern with
        ease and speed.
      </p>

      {/* Search Bar */}
      <div className="hidden items-center rounded-3xl border border-white/30 bg-white/10 px-3 py-1 backdrop-blur-md sm:flex md:h-10 md:w-60 lg:h-12 lg:w-72">
        <input
          type="text"
          placeholder="Search Furniture"
          className="w-full flex-1 bg-transparent text-sm font-normal text-white/60 placeholder-white/50 outline-none"
        />
        <div className="bg-coragne flex h-7 w-7 items-center justify-center rounded-full lg:h-8 lg:w-8">
          <CiSearch size={18} className="text-white" />
        </div>
      </div>
    </div>
  );
};

export default HeroText;
