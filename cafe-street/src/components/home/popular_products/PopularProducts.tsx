import React from "react";
import ProductCard from "./ProductCard";

const PopularProducts = () => {
  return (
    <div className="bg-[linear-gradient(to_bottom,theme(colors.background)_50%,theme(colors.glass)_50%)] flex h-auto w-full flex-col gap-y-24 px-[5vw]">
      <h2 className="text-secondary text-3xl font-bold">
        Popular <span className="decoration-primary pb-1 underline">Now</span>
      </h2>

      <div className="bg-products relative flex h-52 w-full rounded-[50px]">
        <ProductCard imgUrl="testurl" />
      </div>
    </div>
  );
};

export default PopularProducts;
