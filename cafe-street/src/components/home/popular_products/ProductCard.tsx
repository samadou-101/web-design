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
    <div className="bg-glass border-background relative -top-[90%] z-50 flex h-[170%] w-1/5 items-center justify-center rounded-2xl border-4 shadow-md">
      <div className="flex h-[90%] w-[90%] flex-col justify-between">
        <div className="flex w-full flex-col items-center justify-around overflow-hidden rounded-2xl">
          <img src={imgUrl} alt="" />
        </div>
        <div className="flex w-full justify-between">
          <span className="text-secondary text-2xl font-bold">
            {productName}
          </span>
          <span className="text-secondary text-2xl font-bold">
            {reviewsNumber} k
          </span>
        </div>
        <div className="flex w-full items-center justify-between">
          <div className="flex w-[45%] justify-between">
            <span
              className={`text-primary border-primary rounded-[5px] border-2 p-1 px-2 ${hot ? "opacity-100" : "opacity-50"}`}
            >
              Hot
            </span>
            <span
              className={`text-primary border-primary rounded-[5px] border-2 p-1 px-2 ${hot ? "opacity-50" : "opacity-100"}`}
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
