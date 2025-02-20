import bg from "../../../assets/newsletter/newsletter-bg.png";
const NewsLetter = () => {
  return (
    <div className="bg-glass mt-52 mb-52 px-[5vw]">
      <div className="relative flex h-[50vh] items-center justify-center rounded-2xl bg-black">
        <img src={bg} alt="" className="absolute z-0 w-full max-w-full" />
        <div className="z-50 flex w-[40%] flex-col items-center gap-12">
          <h1 className="text-glass text-4xl">
            Subscribe to get 50% discount price
          </h1>
          <div className="bg-glass flex w-[80%] justify-between rounded-4xl px-4 py-2">
            <input
              type="text"
              className="w-[60%] px-4 py-2 outline-none"
              placeholder="Email address"
            />
            <button className="bg-secondary text-glass cursor-pointer rounded-3xl px-4 py-2">
              order now{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
