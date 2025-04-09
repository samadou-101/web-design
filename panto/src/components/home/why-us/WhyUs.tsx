import Service from "@components/home/why-us/Service";
import { motion } from "framer-motion";

const WhyUs = () => {
  const luxuryContent1 =
    "The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities";
  const luxuryContent2 =
    "You can get a workspace of the highst quality at an affordable price and still enjoy the facilities that are oly here.";
  const luxuryContent3 =
    "We provide many unique work space choices so that you can choose the workspace to your liking.";

  // Animation variants for the heading
  const headingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Animation variants for the services grid
  const gridVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.2, // Stagger the children (Service components)
      },
    },
  };

  // Animation variants for each Service item
  const serviceVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <div className="mb-[7.5rem] xl:mt-[7.5rem] xl:flex xl:items-center xl:justify-between">
      {/* Animated Heading */}
      <motion.h1
        className="xl:w[40%] mx-auto py-4 text-center text-4xl font-bold md:text-5xl xl:text-start"
        variants={headingVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }} // Trigger when 30% of the element is in view
      >
        Why Choosing Us
      </motion.h1>

      {/* Animated Services Grid */}
      <motion.div
        className="max-3sm:grid-cols-1 grid grid-cols-3 gap-4 pt-4 pl-6 max-md:grid-cols-2 xl:w-[60%]"
        variants={gridVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // Trigger when 20% of the grid is in view
      >
        <motion.div variants={serviceVariants}>
          <Service title="Luxury facilities" content={luxuryContent1} />
        </motion.div>
        <motion.div variants={serviceVariants}>
          <Service title="Affordable Price" content={luxuryContent2} />
        </motion.div>
        <motion.div variants={serviceVariants}>
          <Service title="Many Choices" content={luxuryContent3} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default WhyUs;
