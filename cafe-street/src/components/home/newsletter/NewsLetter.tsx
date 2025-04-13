import bg from "../../../assets/newsletter/newsletter-bg.png";

const NewsLetter = () => {
  return (
    <div className="bg-glass mx-auto my-16 px-4 sm:my-24 md:my-32 lg:my-40 xl:my-52">
      <div className="relative flex min-h-[300px] flex-col items-center justify-center overflow-hidden rounded-xl bg-black p-6 sm:min-h-[350px] sm:rounded-2xl md:min-h-[400px] md:p-8 lg:min-h-[450px] lg:p-10">
        {/* Background Image */}
        <img
          src={bg}
          alt="Newsletter background"
          className="absolute inset-0 h-full w-full object-cover opacity-80"
        />

        {/* Content Container */}
        <div className="z-10 flex w-full flex-col items-center gap-6 px-4 text-center sm:gap-8 md:w-4/5 md:gap-10 lg:w-3/5 xl:w-1/2">
          <h1 className="text-glass text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl">
            Subscribe to get 50% discount price
          </h1>

          {/* Subscription Form */}
          <div className="bg-glass flex w-full flex-col gap-4 rounded-xl p-4 sm:rounded-2xl md:flex-row md:gap-2">
            <input
              type="text"
              className="w-full rounded-lg px-4 py-3 text-base outline-none md:flex-1"
              placeholder="Email address"
            />
            <button className="bg-secondary text-glass hover:bg-opacity-90 w-full cursor-pointer rounded-lg px-4 py-3 font-medium transition-all md:w-auto md:rounded-xl md:whitespace-nowrap">
              Order Now
            </button>
          </div>

          <p className="text-glass text-xs opacity-80 sm:text-sm">
            By subscribing, you agree to receive marketing communications from
            us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
