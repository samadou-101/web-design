import Review from "./Review";

const Testimonial = () => {
  return (
    <div className="bg-glass mt-52 flex w-full justify-between">
      <div className="bg-background w-[50%] rounded-3xl py-44 pl-[5vw]">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold">What they say about us</h1>
          <p className="text-light w-[45%]">
            We always provide the best service and always maintain the quality
            of coffee
          </p>
        </div>
      </div>
      <div className="flex w-[45%] items-center justify-between px-8">
        <Review
          name="Naura"
          text="I really love the cappucino, the coffee was very smooth"
        />
        <Review name="John" text="this coffee shop is very convenient" />
        <Review name="Azura" text="the coffee menu here is very much" />
      </div>
    </div>
  );
};

export default Testimonial;
