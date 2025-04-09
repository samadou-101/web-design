import Products from "./content/Products";
import Header from "./Header";
import ViewAll from "./ViewAll";
import { motion } from "framer-motion";

const SellingProducts = () => {
  // Animation variants for the container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Stagger the children (Header, Products, ViewAll)
      },
    },
  };

  // Animation variants for each child (Header, Products, ViewAll)
  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="bg-selling flex flex-col items-center justify-center py-12"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} // Trigger when 20% of the section is in view
    >
      <motion.div variants={childVariants}>
        <Header />
      </motion.div>
      <motion.div variants={childVariants}>
        <Products />
      </motion.div>
      <motion.div variants={childVariants}>
        <ViewAll />
      </motion.div>
    </motion.div>
  );
};

export default SellingProducts;
