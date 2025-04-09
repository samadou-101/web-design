import { FC } from "react";
import Rating from "@components/shared/Rating";
interface ICard {
  img: string;
  category: string;
  title: string;
  rating: number;
  price: number;
}

const Card: FC<ICard> = ({ img, category, title, rating, price }) => {
  return (
    <div className="flex h-[33rem] w-[10.5rem] flex-col rounded-[1.25rem] bg-white pb-6 sm:w-[16.5rem]">
      {/* // <div className="flex w-full max-w-[14rem] flex-col rounded-xl bg-white sm:h-[31rem] sm:max-w-[16.5rem] md:h-[31rem] lg:h-[31rem]"> */}
      <div className="bg-selling flex h-[400px] items-center justify-center">
        <img src={img} alt="" className="max-h-full" />
      </div>

      <div className="mt-12 bg-white px-5">
        <span className="text-gray text-base">{category}</span>
        <p className="text-dark text-xl font-semibold">{title}</p>
        <Rating rating={rating} />
      </div>

      <div className="mt-9 flex items-center justify-between px-5">
        <div className="text-dark text-xl font-semibold">
          <span className="text-dark relative -top-1 mr-1 text-base font-semibold">
            $
          </span>
          {price}
        </div>
        <button className="bg-dark h-12 w-12 rounded-full">
          <span className="text-4xl text-white">+</span>
        </button>
      </div>
    </div>
  );
};

export default Card;
