import { FC } from "react";

interface ICard {
  imgUrl: string;
  title: string;
  actionText: string;
}
const HowToCard: FC<ICard> = ({ imgUrl, title, actionText }) => {
  return (
    <div className="flex w-full flex-col items-center gap-2">
      <div className="">
        <img src={imgUrl} alt="" />
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-secondary text-center text-2xl font-bold tracking-wider">
          {title}
        </p>
        <p className="text-center text-lg tracking-wider">{actionText}</p>
      </div>
    </div>
  );
};

export default HowToCard;
