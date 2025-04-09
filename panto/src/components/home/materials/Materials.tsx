import Content from "./Content";
import Images from "./Images";
import { motion } from "framer-motion";

const Materials = () => {
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
      className="mt-48 mb-32 flex flex-col-reverse items-center gap-18 max-md:mt-32 md:mb-48 lg:flex-row lg:justify-between"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <Content />
      <Images />
    </motion.div>
  );
};

export default Materials;
