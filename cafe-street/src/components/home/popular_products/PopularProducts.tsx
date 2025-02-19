import React from "react";
import ProductCard from "./ProductCard";
import firstProduct from "../../../assets/hero/coffee-1.png";

const PopularProducts = () => {
  return (
    <div className="bg-[linear-gradient(to_bottom,theme(colors.background)_60%,theme(colors.glass)_40%)] flex h-auto w-full flex-col gap-y-[25vh] px-[5vw]">
      <h2 className="text-secondary text-3xl font-bold">
        Popular <span className="decoration-primary pb-1 underline">Now</span>
      </h2>

      <div className="bg-products relative flex h-[25vh] w-full justify-around rounded-[50px]">
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
