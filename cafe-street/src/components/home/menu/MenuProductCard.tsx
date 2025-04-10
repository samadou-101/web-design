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
    <div className="bg-glass relative z-50 mx-auto flex h-auto w-full max-w-sm items-center justify-center rounded-2xl border-2 border-neutral-50 p-3 py-4 shadow-xl sm:p-4 sm:py-5 md:max-w-md md:py-6 lg:max-w-lg lg:py-6 xl:max-w-xl xl:py-8">
      <div className="flex w-full flex-col justify-between gap-2 sm:gap-3 md:gap-4">
        {/* Container for image with fixed aspect ratio */}
        <div className="relative w-full overflow-hidden rounded-2xl bg-red-50 pt-[75%]">
          <img
            src={imgUrl}
            alt={productName}
            className={`absolute top-0 left-0 h-full w-full object-cover ${
              bigPic ? "object-[1%_95%]" : ""
            }`}
          />
        </div>

        <div className="flex w-full items-center justify-between">
          <span className="text-secondary text-lg font-bold md:text-lg lg:text-lg xl:text-2xl">
            {productName}
          </span>
          <span className="text-secondary text-lg font-bold md:text-lg lg:text-lg xl:text-2xl">
            {reviewsNumber} k
          </span>
        </div>

        <div className="flex w-full items-center justify-between">
          <div className="text-light w-[75%] text-sm md:text-sm lg:text-base xl:text-lg">
            {description}
          </div>
          <div className="bg-primary flex h-7 w-7 items-center justify-center rounded-full sm:h-8 sm:w-8 md:h-9 md:w-9 lg:h-10 lg:w-10">
            <PiShoppingCartSimpleLight className="text-glass h-4 w-4 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuProductCard;
