import Service from "@components/home/why-us/Service";

const WhyUs = () => {
  const luxuryContent1 =
    "The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities";
  const luxuryContent2 =
    "You can get a workspace of the highst quality at an affordable price and still enjoy the facilities that are oly here.";
  const luxuryContent3 =
    "We provide many unique work space choices so that you can choose the workspace to your liking.";

  return (
    <div className="mb-[7.5rem] xl:mt-[7.5rem] xl:flex xl:items-center xl:justify-between">
      <h1 className="xl:w[40%] mx-auto py-4 text-center text-4xl font-bold md:text-5xl xl:text-start">
        Why Choosing Us
      </h1>
      <div className="max-3sm:grid-cols-1 grid grid-cols-3 gap-4 pt-4 pl-6 max-md:grid-cols-2 xl:w-[60%]">
        <Service title="Luxury facilities" content={luxuryContent1} />
        <Service title="Affordable Price" content={luxuryContent2} />
        <Service title="Many Choices" content={luxuryContent3} />
      </div>
    </div>
  );
};

export default WhyUs;
