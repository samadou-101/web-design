import { FC } from "react";
import { Star } from "lucide-react";

interface IReview {
  name: string;
  text: string;
  rating?: number;
  date?: string;
  featured?: boolean;
  className?: string;
}

const Review: FC<IReview> = ({
  name,
  text,
  rating = 5,
  date,
  featured = false,
  className,
}) => {
  return (
    <div
      className={`bg-review border-reviewBorder flex w-full flex-col gap-4 rounded-xl border-[3px] ${
        featured ? "border-amber-500 shadow-md" : ""
      } px-5 py-6 transition-all duration-300 hover:-translate-y-1 hover:transform hover:shadow-lg ${className}`}
    >
      {/* Rating Stars */}
      <div className="flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${i < rating ? "text-amber-500" : "text-gray-300"}`}
            fill="currentColor"
          />
        ))}
        {date && <span className="ml-auto text-xs text-gray-400">{date}</span>}
      </div>

      {/* Review Content */}
      <p className="text-secondary text-base leading-relaxed sm:text-lg">
        "{text}"
      </p>

      {/* Reviewer Name */}
      <div className="mt-2 flex items-center">
        <div className="bg-secondary mr-3 flex h-8 w-8 items-center justify-center rounded-full font-bold text-white">
          {name.charAt(0)}
        </div>
        <p className="text-secondary text-lg font-semibold">
          {name}
          {featured && (
            <span className="ml-2 text-xs font-normal text-amber-600">
              Verified Customer
            </span>
          )}
        </p>
      </div>
    </div>
  );
};

export default Review;
