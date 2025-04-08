import expBg from "@assets/experiences/sofa.png";

const EpxBg = () => {
  return (
    <div className="relative m-8 w-fit md:m-2">
      {/* Background squares */}
      <div className="absolute -top-[20%] -left-6 z-0 hidden h-[400px] w-[495px] rounded-lg bg-[#F7F7F7] md:block"></div>
      <div className="absolute top-[50px] -right-[54px] z-4 hidden h-[301px] w-[495px] rounded-lg bg-[#F7F7F7] md:block"></div>

      {/* Base Image */}
      <img
        src={expBg}
        alt="Background"
        className="relative z-2 h-auto w-full rounded-lg"
      />

      {/* Blur Overlay */}
      <div className="absolute inset-0 z-3 h-[105%] w-[105%] rounded-lg bg-white/50 backdrop-blur-lg"></div>

      {/* Top Image */}
      <img
        src={expBg}
        alt="Overlayed Image"
        className="absolute -top-5 left-0 z-5 hidden h-auto w-full rounded-lg md:block"
      />
    </div>
  );
};

export default EpxBg;
