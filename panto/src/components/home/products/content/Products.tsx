import { useRef } from "react";
import chair from "@assets/best-selling/chair-1.png";
import chair2 from "@assets/best-selling/chair-2.png";
import chair3 from "@assets/best-selling/chair-3.png";
import chair4 from "@assets/best-selling/chair-4.png";
import Card from "./Card";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// Array of product data
const productsData = [
  {
    img: chair,
    category: "chair",
    title: "Sakarias Armchair",
    rating: 5,
    price: 392,
  },
  {
    img: chair2,
    category: "chair",
    title: "Sakarias Armchair",
    rating: 5,
    price: 392,
  },
  {
    img: chair3,
    category: "chair",
    title: "Sakarias Armchair",
    rating: 5,
    price: 392,
  },
  {
    img: chair4,
    category: "chair",
    title: "Sakarias Armchair",
    rating: 5,
    price: 392,
  },
  {
    img: chair,
    category: "chair",
    title: "Sakarias Armchair",
    rating: 5,
    price: 392,
  },
  {
    img: chair2,
    category: "chair",
    title: "Sakarias Armchair",
    rating: 5,
    price: 392,
  },
  {
    img: chair3,
    category: "chair",
    title: "Sakarias Armchair",
    rating: 5,
    price: 392,
  },
  {
    img: chair4,
    category: "chair",
    title: "Sakarias Armchair",
    rating: 5,
    price: 392,
  },
];

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
        className="scrollbar-hide flex w-[20rem] gap-4 overflow-x-auto scroll-smooth p-4 sm:w-[38rem] md:w-[46rem] lg:w-[64rem] xl:w-[73rem]"
        style={{
          scrollbarWidth: "none", // Firefox
          msOverflowStyle: "none", // IE/Edge
          WebkitOverflowScrolling: "touch",
        }}
      >
        {/* Container with width constraints */}
        <div className="flex w-max gap-4">
          {productsData.map((product, index) => (
            <div key={index} className="w-full snap-start sm:w-auto">
              <Card
                img={product.img}
                category={product.category}
                title={product.title}
                rating={product.rating}
                price={product.price}
              />
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={scrollLeft}
        className="absolute top-1/3 left-0 -translate-y-1/2 rounded-full bg-gray-800 p-2 text-white opacity-75 transition-opacity hover:opacity-100"
      >
        <FaArrowLeft />
      </button>

      <button
        onClick={scrollRight}
        className="absolute top-1/3 right-0 -translate-y-1/2 rounded-full bg-gray-800 p-2 text-white opacity-75 transition-opacity hover:opacity-100"
      >
        <FaArrowRight />
      </button>
    </div>
  );
};

export default Products;
