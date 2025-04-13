import Review from "./Review";
import { Star } from "lucide-react";

const Testimonial = () => {
  return (
    <div className="bg-glass mx-auto mt-8 flex w-full max-w-6xl flex-col gap-8 rounded-xl px-5 py-10 sm:mt-12 sm:gap-10 sm:py-12 md:mt-16 md:gap-12 md:px-8 md:py-14 lg:mt-20 lg:gap-14 lg:px-10">
      {/* Header Section */}
      <div className="bg-background w-full rounded-3xl px-6 py-10 shadow-lg sm:px-8 sm:py-12 md:py-14 lg:px-10 lg:py-16">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <Star className="h-6 w-6 text-amber-500" fill="currentColor" />
            <Star className="h-6 w-6 text-amber-500" fill="currentColor" />
            <Star className="h-6 w-6 text-amber-500" fill="currentColor" />
            <Star className="h-6 w-6 text-amber-500" fill="currentColor" />
            <Star className="h-6 w-6 text-amber-500" fill="currentColor" />
          </div>
          <h1 className="text-secondary text-2xl font-extrabold sm:text-3xl md:text-4xl lg:text-5xl">
            What Our Customers Say
          </h1>
          <p className="text-light w-full text-base leading-relaxed sm:w-4/5 sm:text-lg md:w-3/4 md:text-xl lg:w-2/3">
            We pride ourselves on delivering exceptional service and maintaining
            the highest quality of coffee that keeps our customers coming back.
          </p>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="grid w-full grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3 md:gap-6 lg:gap-8">
        <Review
          name="Naura"
          text="The cappuccino is absolutely divine, so smooth and perfectly balanced! I've tried many coffee shops, but this one truly stands out."
          rating={5}
          date="March 2025"
        />
        <Review
          name="John"
          text="This coffee shop is my go-to; it's cozy and welcoming every time. The staff remembers my order and always greets me with a smile."
          rating={5}
          date="April 2025"
          featured={true}
        />
        <Review
          name="Azura"
          text="So many coffee options to choose from, I'm always spoiled for choice! Their seasonal specialties are particularly innovative."
          rating={4}
          date="February 2025"
        />
      </div>
    </div>
  );
};

export default Testimonial;
