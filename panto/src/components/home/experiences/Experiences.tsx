import { HiArrowLongRight } from "react-icons/hi2";
import expBg from "@assets/experiences/sofa.png";
const Experiences = () => {
  return (
    <div className="mb-60 -ml-[5rem] flex gap-[30rem] pt-[10rem]">
      {/* Background img */}
      <div
        style={{ position: "relative", width: "fit-content", margin: "2rem" }}
      >
        {/* Background squares */}
        <div
          style={{
            position: "absolute",
            top: "-20%",
            left: "-24px",
            height: "400px",
            width: "495px",
            borderRadius: "0.5rem",
            backgroundColor: "#F7F7F7",
            zIndex: 0,
          }}
        ></div>

        <div
          style={{
            position: "absolute",
            top: "50px",
            right: "-54px",
            height: "301px",
            width: "495px",
            borderRadius: "0.5rem",
            backgroundColor: "#F7F7F7",
            zIndex: 4,
          }}
        ></div>

        {/* Base Image */}
        <img
          src={expBg}
          alt="Background"
          style={{
            position: "relative",
            width: "100%",
            height: "auto",
            borderRadius: "0.5rem",
            zIndex: 2,
          }}
        />

        {/* Blur Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            height: "130%",
            width: "105%",
            borderRadius: "0.5rem",
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            backdropFilter: "blur(8px)",
            zIndex: 3,
          }}
        ></div>

        {/* Top Image */}
        <img
          src={expBg}
          alt="Overlayed Image"
          style={{
            position: "absolute",
            top: "-20px",
            left: 0,
            width: "100%",
            height: "auto",
            borderRadius: "0.5rem",
            zIndex: 5,
          }}
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
