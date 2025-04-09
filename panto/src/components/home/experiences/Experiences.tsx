import Content from "./Content";
import EpxBg from "./EpxBg";
import { motion } from "framer-motion";

const Experiences = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="mr-34 mb-20 -ml-8 flex w-full flex-col gap-8 pt-10 max-xl:pr-20 md:mb-60 md:gap-12 md:pt-[10rem] lg:flex-row lg:justify-between lg:gap-2 lg:px-0 2xl:pr-28"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.7 }}
    >
      <div className="w-full lg:w-auto">
        <EpxBg />
      </div>
      <Content />
    </motion.div>
  );
};

export default Experiences;
