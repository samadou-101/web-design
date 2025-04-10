import ProductCard from "./ProductCard";
import firstProduct from "../../../assets/hero/coffee-1.png";
import secondProduct from "../../../assets/hero/coffee-2.png";
import thirdProduct from "../../../assets/hero/coffee-3.png";
import background_2 from "../../../assets/hero/bg-2.png";

const PopularProducts = () => {
  return (
    <div className="bg-[linear-gradient(to_bottom,theme(colors.background)_70%,theme(colors.glass)_30%)] relative flex h-auto w-full flex-col gap-y-[25vh] px-[5vw] max-md:gap-y-28 max-sm:gap-y-10">
      <div className="absolute -top-[4.5vw] left-[2vw] z-10 h-auto w-1/3 min-w-[300px] max-md:w-1/3 max-sm:min-w-[250px]">
        <img
          className="max-w-full opacity-90"
          src={background_2}
          alt="Background decoration"
        />
      </div>
      <h2 className="text-secondary z-50 text-3xl font-bold">
        Popular <span className="decoration-primary pb-1 underline">Now</span>
      </h2>

      <div className="bg-products relative z-50 flex h-[25vh] w-full justify-around rounded-[50px] max-sm:min-h-fit max-sm:flex-row max-sm:gap-4 max-sm:overflow-x-auto max-sm:overflow-y-hidden max-sm:px-4 max-sm:py-6 sm:flex-row sm:justify-around sm:gap-0">
        <ProductCard
          imgUrl={firstProduct}
          productName={"Vanilla Latte"}
          hot={true}
          reviewsNumber={10}
        />
        <ProductCard
          imgUrl={secondProduct}
          productName={"Vanilla Latte"}
          hot={true}
          reviewsNumber={10}
        />
        <ProductCard
          imgUrl={thirdProduct}
          productName={"Vanilla Latte"}
          hot={true}
          reviewsNumber={10}
        />
      </div>
    </div>
  );
};

export default PopularProducts;
