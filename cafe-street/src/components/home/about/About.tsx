import aboutImg from "../../../assets/about/about-coffee.png";
const About = () => {
  return (
    <div className="bg-background max- mt-52 flex h-[50vh] w-full items-center justify-center gap-40 px-[5vw] max-lg:gap-22 max-md:h-[35vh] max-md:gap-10 max-sm:h-fit max-sm:justify-start max-sm:gap-4 max-sm:py-4">
      <div className="border-background relative -top-1/7 h-auto overflow-hidden rounded-2xl border-4 shadow-xl max-md:w-[200px] max-sm:-top-0 max-sm:w-[130px]">
        <img src={aboutImg} alt="" />
      </div>
      <div className="flex h-[75%] w-1/3 flex-col gap-5 max-2xl:w-1/2 max-xl:w-1/2 max-sm:grow">
        <h1 className="text-secondary text-4xl font-bold max-sm:text-3xl">
          About <span className="decoration-primary underline">us</span>
        </h1>
        <p className="text-secondary w-[60%] text-2xl font-bold max-lg:w-[80%] max-lg:text-lg max-md:hidden">
          We provide quality coffee, and ready to deliver.
        </p>
        <p className="text-light w-[80%] text-base max-lg:w-full max-lg:text-sm max-md:hidden">
          We are a company that makes and distributes delicious drinks. Our main
          product is made with a secret recipe and available in stores
          worldwide.
        </p>

        <p className="text-light hidden w-[80%] text-base max-lg:w-full max-lg:text-sm max-md:block">
          We are a company that makes and distributes delicious drinks.
        </p>
        <button className="bg-secondary text-btntext w-1/3 rounded-3xl p-2 max-lg:w-1/2 max-md:w-full max-sm:text-sm">
          Get your coffee
        </button>
      </div>
    </div>
  );
};

export default About;
