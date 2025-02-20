import aboutImg from "../../../assets/about/about-coffee.png";
const About = () => {
  return (
    <div className="bg-background mt-52 flex h-[50vh] w-full items-center justify-center gap-44 px-[5vw]">
      <div className="relative -top-1/7 h-auto">
        <img src={aboutImg} alt="" />
      </div>
      <div className="flex h-[75%] w-1/3 flex-col justify-between">
        <h1 className="text-secondary text-4xl font-bold">
          About <span className="decoration-primary underline">us</span>
        </h1>
        <p className="text-secondary w-[60%] text-2xl font-bold">
          We provide quality coffee, and ready to deliver.
        </p>
        <p className="text-light w-[80%] text-lg">
          We are a company that makes and distributes delicious drinks. Our main
          product is made with a secret recipe and available in stores
          worldwide.
        </p>

        <button className="bg-secondary text-btntext w-1/3 rounded-3xl p-2">
          Get your coffee
        </button>
      </div>
    </div>
  );
};

export default About;
