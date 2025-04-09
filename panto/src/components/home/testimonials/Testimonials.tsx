import Header from "./Header";
import Reviews from "./Reviews";
import { motion } from "framer-motion";

const Testimonials = () => {
  // Animation variants for the container
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
      className="mb-40 flex flex-col items-center justify-center gap-14"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
    >
      <Header />
      <Reviews />
    </motion.div>
  );
};

export default Testimonials;
