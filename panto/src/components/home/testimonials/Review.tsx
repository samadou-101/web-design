import Rating from "@components/shared/Rating";

interface ReviewProps {
  name: string;
  review: string;
  image: string;
  rating: number;
}
const Review = ({ name, review, image, rating }: ReviewProps) => {
  return (
    <div className="relative h-[400px] w-[250px] flex-shrink-0 overflow-hidden rounded-2xl shadow-lg sm:w-[280px] md:w-[300px]">
      {/* Background Image */}
      <div className="h-full w-full">
        <img
          src={image}
          alt="background"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
      {/* Review Card */}
      <div className="absolute right-4 bottom-8 left-4 flex h-44 flex-col items-center justify-between rounded-xl bg-white p-4 backdrop-blur-md">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="mt-1 text-center text-sm text-gray-600">{review}</p>
        <div className="mt-2 flex">
          <Rating rating={rating} />
        </div>
      </div>
    </div>
  );
};

export default Review;
