import { FC } from "react";
import { PiShoppingCartSimpleLight } from "react-icons/pi";

interface IProductCard {
  imgUrl: string;
  productName: string;
  reviewsNumber: number;
  description: string;
  bigPic?: boolean;
}

const MenuProductCard: FC<IProductCard> = ({
  imgUrl,
  productName,
  reviewsNumber,
  description,
  bigPic,
}) => {
  return (
    <div className="bg-glass relative z-50 flex h-[340px] w-[90%] items-center justify-center rounded-2xl border-2 border-neutral-50 shadow-xl">
      <div className="flex h-[90%] w-[70%] flex-col justify-between gap-3">
        <div
          className={`flex h-[50%] w-full items-center ${bigPic ? "" : "pb-0"} justify-center overflow-hidden rounded-2xl bg-red-50`}
        >
          <img
            src={imgUrl}
            alt=""
            className={`max-w-full ${bigPic ? "relative bottom-[50%]" : ""}`}
          />
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
          <div className="text-light w-[75%]">{description}</div>
          <div className="bg-primary flex h-fit w-fit items-center justify-center rounded-full p-1">
            <PiShoppingCartSimpleLight className="text-glass h-6 w-6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuProductCard;
