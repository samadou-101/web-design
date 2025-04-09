import chairs from "@assets/materials/chairs.png";
import half_sofa from "@assets/materials/half-sofa.png";
import table_chairs from "@assets/materials/table-chairs.png";

const Images = () => {
  return (
    <div className="relative -mr-40 flex items-end gap-8 max-xl:-mr-44 max-md:gap-0 max-md:pl-5">
      <div className="flex flex-col gap-6 max-md:min-h-full max-md:gap-2">
        <div className="rounded-4xl shadow-xl">
          <img src={chairs} alt="" />
        </div>
        <div className="rounded-4xl shadow-xl">
          <img src={half_sofa} alt="" />
        </div>
      </div>

      <div className="relative m-8 max-md:min-h-full max-md:min-w-[45%] md:m-2">
        {/* Background square */}
        <div className="absolute -top-[20%] right-6 z-4 hidden h-[300px] w-[395px] rounded-lg bg-[#F7F7F7] md:block xl:h-[400px]"></div>

        {/* Base Image */}
        <img
          src={table_chairs}
          alt="Background"
          className="relative -right-8 z-2 h-auto w-full rounded-lg"
        />

        {/* Blur Overlay */}
        <div className="absolute inset-0 z-3 h-[108%] w-[104%] rounded-lg bg-white/40 backdrop-blur-lg max-md:h-[118%]"></div>

        {/* Top Image */}
        <img
          src={table_chairs}
          alt="Overlayed Image"
          className="absolute inset-0 -top-4 z-6 hidden h-full w-full rounded-lg"
        />
      </div>
    </div>
  );
};

export default Images;
