"use client";
import Image from "next/image";

const ScooterImage = () => {
  return (
    <div className="absolute bottom-0  pb-4 left-1/2 transform -translate-x-1/2">
      {/* Scooter image in front */}
      <Image
        src="/bigscooter.png"
        width={440}
        height={600}
        alt="main scooter"
        className="hero-scooter z-30"
        sizes="(max-width: 640px) 80vw, (max-width: 1024px) 60vw, 40vw"
      />

      {/* Shadows behind the scooter */}
      <Image
        src="/left-shadow.png"
        alt="left shadow"
        width={100}
        height={50}
        className="absolute bottom-2 left-0 z-10 max-sm:-left-4 max-sm:bottom-2 max-sm:w-[80px]"
      />
      <Image
        src="/middle-shadow.png"
        alt="middle shadow"
        width={50}
        height={30}
        className="absolute hidden sm:block bottom-0 left-[55%] z-10 "
      />
      <Image
        src="/right-shadow.png"
        alt="right shadow"
        width={100}
        height={50}
        className="absolute bottom-0 right-1 z-10 max-sm:-right-3 max-sm:bottom-1 max-sm:w-[70px]"
      />
    </div>
  );
};

export default ScooterImage;
