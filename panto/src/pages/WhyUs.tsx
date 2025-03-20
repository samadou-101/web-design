import Service from "@components/home/why-us/Service";

const WhyUs = () => {
  const luxuryContent =
    "The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities";
  return (
    <div>
      <h1>Why Choosing Us </h1>
      <Service title="Luxury facilities" content={luxuryContent} />
    </div>
  );
};

export default WhyUs;
