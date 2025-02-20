import { FC } from "react";

interface IReview {
  name: string;
  text: string;
}
const Review: FC<IReview> = ({ name, text }) => {
  return (
    <div className="bg-review border-reviewBorder flex h-[30%] w-56 flex-col gap-2 rounded-lg border-[6px] px-4 py-2">
      <p className="text-secondary text-xl">{name}</p>
      <p className="text-secondary text-sm">{text}</p>
    </div>
  );
};

export default Review;
