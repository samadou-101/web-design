import { useState } from "react";
import { FaStar } from "react-icons/fa";

interface RatingProps {
  rating: number;
}

const Rating = ({ rating }: RatingProps) => {
  const [hover, setHover] = useState<number | null>(null);
  const [selected, setSelected] = useState<number>(rating);

  return (
    <div className="flex">
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1;
        return (
          <FaStar
            key={index}
            className={`cursor-pointer text-[1.15rem] ${
              starValue <= (hover || selected) ? "text-star" : "text-gray-300"
            }`}
            onMouseEnter={() => setHover(starValue)}
            onMouseLeave={() => setHover(null)}
            onClick={() => setSelected(starValue)}
          />
        );
      })}
    </div>
  );
};

export default Rating;
