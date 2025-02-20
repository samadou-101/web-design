import React from "react";
import ProductCard from "./ProductCard";
import firstProduct from "../../../assets/hero/coffee-1.png";
import background_2 from "../../../assets/hero/bg-2.png";

const PopularProducts = () => {
  return (
    <div className="bg-[linear-gradient(to_bottom,theme(colors.background)_60%,theme(colors.glass)_40%)] relative flex h-auto w-full flex-col gap-y-[25vh] px-[5vw]">
      <div className="absolute -top-[4vw] left-[1.5vw] z-10 h-auto w-1/3 min-w-[300px] max-md:w-1/3 max-sm:min-w-[250px]">
        <img
          className="max-w-full max-md:opacity-75"
          src={background_2}
          alt=""
        />
      </div>
      <h2 className="text-secondary z-50 text-3xl font-bold">
        Popular <span className="decoration-primary pb-1 underline">Now</span>
      </h2>

      <div className="bg-products relative z-50 flex h-[25vh] w-full justify-around rounded-[50px]">
        <ProductCard
          imgUrl={firstProduct}
          productName={"Vanilla Late"}
          hot={true}
          reviewsNumber={10}
        />
        <ProductCard
          imgUrl={firstProduct}
          productName={"Vanilla Late"}
          hot={true}
          reviewsNumber={10}
        />
        <ProductCard
          imgUrl={firstProduct}
          productName={"Vanilla Late"}
          hot={true}
          reviewsNumber={10}
        />
      </div>
    </div>
  );
};

export default PopularProducts;
