import { useRef } from "react";
import chair from "@assets/best-selling/chair-1.png";
import Card from "./Card";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Products = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current)
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    if (scrollRef.current)
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="relative mt-6">
      <div
        ref={scrollRef}
        // className="scrollbar-hide flex w-[20rem] gap-4 overflow-x-auto scroll-smooth p-4"
        className="scrollbar-hide flex w-[20rem] gap-4 overflow-x-auto scroll-smooth p-4 sm:w-[38rem] md:w-[46rem] lg:w-[64rem] xl:w-[73rem]"
        style={{
          scrollbarWidth: "none", // Firefox
          msOverflowStyle: "none", // IE/Edge
          WebkitOverflowScrolling: "touch",
        }}
      >
        {/* Container with width constraints based on viewport */}
        <div className="flex w-max gap-4">
          {/* First visible group - width constraint by parent div */}
          <div className="flex gap-4 sm:w-auto">
            <div className="w-full snap-start sm:w-auto">
              <Card
                img={chair}
                category="chair"
                title="Sakarias Armchair"
                rating={5}
                price={392}
              />
            </div>
            <div className="w-full snap-start sm:w-auto">
              <Card
                img={chair}
                category="chair"
                title="Sakarias Armchair"
                rating={5}
                price={392}
              />
            </div>
          </div>

          {/* Additional cards */}
          <div className="w-full snap-start sm:w-auto">
            <Card
              img={chair}
              category="chair"
              title="Sakarias Armchair"
              rating={5}
              price={392}
            />
          </div>
          <div className="w-full snap-start sm:w-auto">
            <Card
              img={chair}
              category="chair"
              title="Sakarias Armchair"
              rating={5}
              price={392}
            />
          </div>
          <div className="w-full snap-start sm:w-auto">
            <Card
              img={chair}
              category="chair"
              title="Sakarias Armchair"
              rating={5}
              price={392}
            />
          </div>
          <div className="w-full snap-start sm:w-auto">
            <Card
              img={chair}
              category="chair"
              title="Sakarias Armchair"
              rating={5}
              price={392}
            />
          </div>
          <div className="w-full snap-start sm:w-auto">
            <Card
              img={chair}
              category="chair"
              title="Sakarias Armchair"
              rating={5}
              price={392}
            />
          </div>
          <div className="w-full snap-start sm:w-auto">
            <Card
              img={chair}
              category="chair"
              title="Sakarias Armchair"
              rating={5}
              price={392}
            />
          </div>
        </div>
      </div>

      <button
        onClick={scrollLeft}
        className="absolute top-1/2 left-0 -translate-y-1/2 rounded-full bg-gray-800 p-2 text-white opacity-75 transition-opacity hover:opacity-100"
      >
        <FaArrowLeft />
      </button>

      <button
        onClick={scrollRight}
        className="absolute top-1/2 right-0 -translate-y-1/2 rounded-full bg-gray-800 p-2 text-white opacity-75 transition-opacity hover:opacity-100"
      >
        <FaArrowRight />
      </button>
    </div>
  );
};

export default Products;
