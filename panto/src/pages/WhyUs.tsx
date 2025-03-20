import Service from "@components/home/why-us/Service";

const WhyUs = () => {
  const luxuryContent =
    "The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities";
  return (
    <div className="xl:mt-28 xl:flex xl:items-center xl:justify-between">
      <h1 className="xl:w[40%] mx-auto py-4 text-center text-5xl font-bold xl:text-start">
        Why Choosing Us
      </h1>
      <div className="max-3sm:grid-cols-1 grid grid-cols-3 gap-4 px-4 pt-4 max-md:grid-cols-2 xl:w-[60%]">
        <Service title="Luxury facilities" content={luxuryContent} />
        <Service title="Luxury facilities" content={luxuryContent} />
        <Service title="Luxury facilities" content={luxuryContent} />
      </div>
    </div>
  );
};

export default WhyUs;
