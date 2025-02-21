import { FC } from "react";
import { PiShoppingCartSimpleLight } from "react-icons/pi";

interface IProductCard {
  imgUrl: string;
  productName: string;
  reviewsNumber: number;
  hot: boolean;
}

const ProductCard: FC<IProductCard> = ({
  imgUrl,
  productName,
  reviewsNumber,
  hot,
}) => {
  return (
    <div className="bg-glass border-background max-2md:min-w-[220px] max-2md:h-[140%] max-2md:-top-[60%] relative -top-[90%] z-50 flex h-[170%] w-1/5 min-w-xs items-center justify-center rounded-2xl border-4 shadow-md max-2xl:min-w-2xs max-lg:-top-[70%] max-lg:h-[150%] max-lg:min-w-3xs max-md:-top-[40%] max-md:h-[120%] max-md:min-w-[180px]">
      <div className="max-2md:space-y-4 flex h-[90%] w-[90%] flex-col justify-between max-lg:h-fit max-lg:justify-start max-lg:space-y-5">
        <div className="flex w-full flex-col items-center justify-around overflow-hidden rounded-2xl">
          <img src={imgUrl} alt="" className="max-w-full rounded-2xl" />
        </div>
        <div className="flex w-full justify-between">
          <span className="text-secondary max-2md:text-lg text-2xl font-bold max-2xl:text-xl max-md:text-base">
            {productName}
          </span>
          <span className="text-secondary max-2md:text-lg text-2xl font-bold max-2xl:text-xl max-md:text-base">
            {reviewsNumber} k
          </span>
        </div>
        <div className="flex w-full items-center justify-between">
          <div className="max-2md:w-[60%] flex w-[45%] justify-between max-md:w-[70%]">
            <span
              className={`text-primary border-primary rounded-[5px] border-2 p-1 px-2 ${hot ? "opacity-100" : "opacity-50"} max-2xl:text-sm max-md:text-sm`}
            >
              Hot
            </span>
            <span
              className={`text-primary border-primary rounded-[5px] border-2 p-1 px-2 ${hot ? "opacity-50" : "opacity-100"} max-2xl:text-sm max-md:text-sm`}
            >
              Cold
            </span>
          </div>
          <div className="bg-primary flex h-fit w-fit items-center justify-center rounded-full p-1">
            <PiShoppingCartSimpleLight className="text-glass h-6 w-6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
