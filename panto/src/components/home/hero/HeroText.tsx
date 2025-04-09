import { CiSearch } from "react-icons/ci";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const HeroText = ({ scrolled }: { scrolled: boolean }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const containerAnimationProps = {
    initial: {
      opacity: 0,
      y: 20,
      marginTop: isSmallScreen ? "1.25rem" : undefined,
    },
    animate: {
      opacity: 1,
      y: 0,
      marginTop: isSmallScreen ? (scrolled ? "6rem" : "1.25rem") : undefined,
    },
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      opacity: { duration: 0.8, ease: "easeOut" },
      y: { duration: 0.8, ease: "easeOut" },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      className="flex w-full flex-col items-center gap-6 lg:mt-0"
      initial={containerAnimationProps.initial}
      animate={containerAnimationProps.animate}
      transition={containerAnimationProps.transition}
    >
      {/* Headline */}
      <motion.h1
        variants={childVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.1 }}
        className="w-full max-w-[90%] text-center text-[2rem] leading-tight font-semibold text-white sm:max-w-[80%] sm:text-[clamp(2rem,5vw,4.5rem)] lg:max-w-[60%]"
      >
        Make Your Interior More Minimalistic & Modern
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        variants={childVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.3 }}
        className="w-full max-w-[90%] text-center text-[1rem] leading-relaxed font-light text-white/80 sm:max-w-[60%] sm:text-[clamp(1rem,2vw,1.25rem)]"
      >
        Turn your room with Panto into a lot more minimalist and modern with
        ease and speed.
      </motion.p>

      {/* Search Bar */}
      <motion.div
        variants={childVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.5 }}
        className="hidden items-center rounded-3xl border border-white/30 bg-white/10 px-4 py-2 backdrop-blur-md sm:flex sm:w-64 lg:w-80"
      >
        <input
          type="text"
          placeholder="Search Furniture"
          className="flex-1 bg-transparent text-sm text-white/60 placeholder-white/50 outline-none"
        />
        <div className="bg-coragne flex h-8 w-8 items-center justify-center rounded-full">
          <CiSearch size={18} className="text-white" />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroText;
