import expBg from "@assets/experiences/sofa.png";

const EpxBg = () => {
  return (
    <div className="relative m-8 w-fit max-md:min-w-[350px] md:m-2">
      {/* Background squares */}
      <div className="absolute -top-[20%] -left-6 z-0 hidden h-[400px] w-[495px] rounded-lg bg-[#F7F7F7] md:block"></div>
      <div className="absolute top-[50px] -right-[54px] z-4 hidden h-[301px] w-[495px] rounded-lg bg-[#F7F7F7] md:block"></div>

      {/* Base Image */}
      <img
        src={expBg}
        alt="Background"
        className="relative -left-10 z-2 h-auto w-full rounded-lg md:-left-2"
      />

      {/* Blur Overlay */}
      <div className="absolute inset-0 z-3 h-[108%] w-[105%] rounded-lg bg-white/40 backdrop-blur-lg max-md:h-[118%]"></div>

      {/* Top Image */}
      <img
        src={expBg}
        alt="Overlayed Image"
        className="absolute -top-2 -left-5 z-6 hidden h-auto w-full rounded-lg md:-top-5 md:left-1"
      />
    </div>
  );
};

export default EpxBg;
