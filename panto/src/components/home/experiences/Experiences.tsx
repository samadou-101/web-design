import { HiArrowLongRight } from "react-icons/hi2";
import expBg from "@assets/experiences/sofa.png";
const Experiences = () => {
  return (
    <div className="mb-60 flex justify-around">
      {/* Background img */}
      <div className="relative w-fit">
        {/* Base Image */}
        <img
          src={expBg}
          alt="Background"
          className="h-auto w-full rounded-lg"
        />
        {/* Overlay */}
        <div className="absolute inset-0 h-[130%] w-[120%] rounded-lg bg-white/50 backdrop-blur-sm"></div>
        {/* Top Image */}
        <img
          src={expBg}
          alt="Overlayed Image"
          className="absolute inset-0 -top-5 h-auto w-full rounded-lg"
        />
      </div>

      {/* Content */}
      <div className="flex w-1/4 flex-col gap-5">
        <span className="text-coragne text-lg font-semibold">Experiences</span>
        <h2 className="text-text text-4xl font-bold">
          We Provide You The Best Experience
        </h2>
        <p className="text-gray text-lg">
          You don’t have to worry about the result because all of these
          interiors are made by people who are professionals in their fields
          with an elegant and lucurious style and with premium quality materials
        </p>
        <div className="flex items-center gap-2">
          <span className="text-coragne text-base">More Info</span>
          <span className="text-coragne text-sm">
            <HiArrowLongRight size={25} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
