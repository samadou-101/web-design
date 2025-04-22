"use client";

import { Montserrat, Nunito } from "next/font/google";
import Image from "next/image";
import { CiLocationOn, CiWifiOn } from "react-icons/ci";
import { RiShieldKeyholeLine } from "react-icons/ri";
import {
  BsArrowRight,
  BsGithub,
  BsInstagram,
  BsTwitterX,
} from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { CgShoppingCart } from "react-icons/cg";
import { BiSearch } from "react-icons/bi";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import ScooterImage from "@/components/ScooterImage";
import { motion } from "framer-motion";
import Link from "next/link";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});
const nunito = Nunito({ subsets: ["latin"], weight: ["700"] });

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const navVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  return (
    <div
      className={`${montserrat.className} min-h-screen bg-neutral-100 overflow-x-hidden relative`}
    >
      {/* <style jsx>{`
        html,
        body {
          overflow-x: hidden;
        }
        @media (max-width: 640px) {
          .hero-scooter {
            left: 10%;
            width: 80%;
            transform: translateX(-50%);
          }
          .hero-mask {
            bottom: -10%;
            height: auto;
          }
          .circle-large {
            width: 30vw !important;
            height: 30vw !important;
          }
          .circle-small {
            width: 15vw !important;
            height: 15vw !important;
          }
          .scooter-showcase-card {
            width: 100% !important;
          }
          .rental-card {
            width: 100% !important;
          }
        }
        @media (max-width: 1024px) {
          .hero-scooter {
            left: 20%;
            width: 60%;
          }
          .hero-mask {
            bottom: -5%;
          }
        }
      `}</style> */}

      {/* Header */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-[999] bg-transparent backdrop-blur-lg shadow-md"
        initial="hidden"
        animate="visible"
        variants={navVariants}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex flex-col items-center gap-1">
            <div className="flex items-center gap-1">
              <span className="text-xl sm:text-2xl font-bold text-[#405b6f]">
                M
              </span>
              <div className="w-4 sm:w-6 h-4 sm:h-6 bg-[#de7734] rounded-full" />
              <span className="text-xl sm:text-2xl font-bold text-[#405b6f]">
                DERN
              </span>
            </div>
            <span className="text-xl sm:text-2xl font-bold text-[#405b6f] self-start">
              RIDES
            </span>
          </div>
          <nav
            className={`${
              isMenuOpen ? "flex" : "hidden"
            } md:flex flex-col md:flex-row absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent p-4 md:p-0 gap-4 text-[#333333] text-base`}
          >
            <button
              onClick={() => scrollToSection("home")}
              className="hover:text-[#de7734] transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="hover:text-[#de7734] transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("products")}
              className="hover:text-[#de7734] transition-colors"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection("rental")}
              className="hover:text-[#de7734] transition-colors"
            >
              Rental Service
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="hover:text-[#de7734] transition-colors"
            >
              Contact
            </button>
          </nav>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <CgShoppingCart />
              <span className="text-[#333333] text-sm sm:text-base hidden sm:inline">
                Cart
              </span>
            </div>
            <div className="flex items-center gap-2">
              <BiSearch />
              <span className="text-[#333333] text-sm sm:text-base hidden sm:inline">
                Search
              </span>
            </div>
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </motion.header>

      <div className="relative">
        <Image
          src="/hero-background.png"
          alt="Background"
          fill
          className="absolute inset-0 object-cover object-top w-full h-full z-0 sm:object-contain lg:object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
          priority
        />
        {/* Hero Section */}
        <motion.section
          id="home"
          className="relative pt-20 sm:pt-24 h-screen"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <Image
            src="/hero-mask.png"
            alt="main scooter"
            width={0}
            height={0}
            className="absolute bottom-0 left-0 lg:-bottom-[200px] xl:-bottom-[300px] 2xl:-bottom-[400px] 3xl:-bottom-[480px] w-full h-auto object-contain hero-mask"
            sizes="100vw"
            priority
          />
          <ScooterImage />
          <div className="container mx-auto px-4 pt-16 sm:pt-20 grid md:grid-cols-2 gap-4 sm:gap-8 items-center relative z-10">
            <div className="space-y-4 sm:space-y-6 w-full sm:w-[80%]">
              <p className="text-[#333333] text-sm sm:text-base">On Sale Now</p>
              <h1 className="text-[#405b6f] text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold uppercase">
                Electric Scooter
              </h1>
              <div className="flex flex-wrap gap-2 sm:gap-4">
                <div className="flex items-center gap-2">
                  <CiWifiOn className="text-sm sm:text-base" />
                  <span className="text-[#333333] text-xs sm:text-sm capitalize">
                    Wireless Bike
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <RiShieldKeyholeLine className="text-sm sm:text-base" />
                  <span className="text-[#333333] text-xs sm:text-sm capitalize">
                    Smart Lock
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CiLocationOn className="text-sm sm:text-base" />
                  <span className="text-[#333333] text-xs sm:text-sm capitalize">
                    Location GPS
                  </span>
                </div>
              </div>
            </div>
            <div className="ml-auto w-full sm:w-[50%]">
              <div className="text-left">
                <p className="text-[#de7734] text-xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
                  $1699.00
                </p>
                <p className="text-[#333333] text-xs sm:text-sm text-left w-full sm:w-[75%] mt-2">
                  Lorem ipsum <span className="font-semibold">15% off</span>,
                  consectetur adipiscing elit.{" "}
                  <span className="font-semibold">Shipping</span> ullamcorper
                  convallis fermentum.
                </p>
                <motion.button
                  className="bg-[#de7734] text-white mt-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full uppercase text-xs sm:text-sm font-medium border hover:bg-[#c5682d] transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Add to Cart
                </motion.button>
              </div>
            </div>
          </div>
        </motion.section>

        {/* About Section */}
        <section
          id="about"
          className="py-8 sm:py-12 relative bg-neutral-100 z-10"
        >
          <div className="container mx-auto px-4 grid xl:grid-cols-2 pt-22 gap-4 sm:gap-8 items-center">
            <div className="w-fit relative">
              <div className="w-24 sm:w-40 h-24 sm:h-40 bg-[#de7734] rounded-full absolute -z-10 -top-8 sm:-top-12 -left-10 sm:-left-20 circle-large" />
              <div className="w-16 sm:w-24 h-16 sm:h-24 rounded-full outline-2 outline-offset-1 outline-[#de7734] absolute -bottom-10 -right-10 z-10 circle-small" />
              <motion.div
                className="w-[80vw] sm:w-[600px] h-[60vw] sm:h-[500px] overflow-hidden bg-[#d9d9d9] relative z-20 rounded-tl-[20%] sm:rounded-tl-[30%] shadow-[-10px_10px_20px_rgba(0,0,0,0.25)]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.7 }}
                transition={{ duration: 0.5 }}
              >
                <Image src="/scooter-1.png" fill alt="scooter 1" />
              </motion.div>
            </div>
            <div className="space-y-4 sm:space-y-6">
              <p className="text-[#333333] text-sm sm:text-base">About Us</p>
              <h2 className="text-[#405b6f] text-2xl sm:text-3xl md:text-4xl font-semibold capitalize leading-tight">
                We created the most advanced Scooter technology
              </h2>
              <p className="text-[#333333] text-sm sm:text-base max-w-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum ullamcorper convallis fermentum.
              </p>
              <motion.div
                className="flex gap-4 relative w-fit items-center"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-[#405b6f] text-sm sm:text-base font-semibold capitalize">
                  View More
                </p>
                <div className="w-8 sm:w-12 h-8 sm:h-12 rounded-full absolute border -right-6 sm:-right-8 border-[#cecece]" />
                <div className="w-3 sm:w-4 h-3 sm:h-4 bg-[#de7734] rounded-full -right-6 sm:-right-8 absolute" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-8 sm:py-12 bg-neutral-100 border-b-[1px] border-neutral-100 relative max-sm:z-50 max-sm:mb-36">
          <div className="container max-sm:pt-14 mx-auto px-4 flex flex-col-reverse xl:grid xl:grid-cols-2 gap-16 sm:gap-8 items-center">
            <div className="space-y-4 sm:space-y-6">
              <p className="text-[#333333] text-sm sm:text-base">
                Our Core Value
              </p>
              <h2 className="text-[#405b6f] text-2xl sm:text-3xl md:text-4xl font-semibold capitalize leading-tight">
                Less Noise Pollution, Moving Around Swiftly
              </h2>
              <p className="text-[#333333] text-sm sm:text-base max-w-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum ullamcorper convallis fermentum.
              </p>
              <div className="space-y-2">
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <div className="w-2 sm:w-3 h-2 sm:h-3 bg-[#de7734] rounded-full" />
                    <p className="text-[#333333] text-sm sm:text-base">
                      Lorem ipsum dolor sit amet.
                    </p>
                  </motion.div>
                ))}
              </div>
              <motion.div
                className="flex gap-4 relative w-fit items-center"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-[#405b6f] text-sm sm:text-base font-semibold capitalize">
                  View More
                </p>
                <div className="w-8 sm:w-12 h-8 sm:h-12 rounded-full absolute border -right-6 sm:-right-8 border-[#cecece]" />
                <div className="w-3 sm:w-4 h-3 sm:h-4 bg-[#de7734] rounded-full -right-6 sm:-right-8 absolute" />
              </motion.div>
            </div>
            <div className="relative w-fit ml-auto">
              <div className="w-24 sm:w-40 h-24 sm:h-40 bg-[#de7734] rounded-full absolute z-10 -top-8 sm:-top-12 -right-10 circle-large" />
              <div className="w-16 sm:w-24 h-16 sm:h-24 rounded-full outline-2 outline-offset-1 outline-[#de7734] absolute -bottom-10 -left-10 z-10 circle-small" />
              <motion.div
                className="w-[80vw] sm:w-[600px] h-[60vw] sm:h-[500px] overflow-hidden z-30 bg-[#d9d9d9] relative rounded-tr-[20%] sm:rounded-tr-[30%] shadow-[-10px_10px_20px_rgba(0,0,0,0.25)]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.5 }}
              >
                <Image src="/scooter-3.jpg" fill alt="scooter 1" />
              </motion.div>
            </div>
          </div>
        </section>
      </div>

      {/* Round Big Circle */}
      <motion.section
        className="relative -top-8 sm:-top-24 w-screen h-[30vh] sm:h-[70vh] flex items-center justify-center max-sm:h-[10vh]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="w-[60vh] sm:w-[60vh] max-sm:w-[35vh] h-[50vh] sm:h-[60vh] max-sm:h-[35vh] rounded-full bg-white flex items-center justify-center relative">
          <div className="flex flex-col items-center gap-1">
            <div className="flex items-center gap-1">
              <span className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#405b6f]">
                M
              </span>
              <div className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 bg-[#de7734] rounded-full" />
              <span className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#405b6f]">
                DERN
              </span>
            </div>
            <span className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#405b6f] self-start">
              RIDES
            </span>
          </div>
        </div>
      </motion.section>

      {/* Products Section */}
      <motion.section
        id="products"
        className="relative top-12 sm:-top-52"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-4 grid xl:grid-cols-2 gap-4 sm:gap-8 items-center max-sm:mb-32">
          <div className="relative w-fit">
            <div className="w-40 sm:w-64 h-40 sm:h-64 bg-[#de7734] rounded-full absolute z-10 -top-8 sm:-top-12 -left-16 sm:-left-32 circle-large" />
            <div className="w-16 sm:w-24 h-16 sm:h-24 rounded-full outline-2 outline-offset-[-1.5px] outline-[#de7734] absolute -bottom-8 -right-10  circle-small" />
            <motion.div
              className="w-[80vw] sm:w-[600px] h-[60vw] sm:h-[500px] overflow-hidden bg-[#d9d9d9] relative z-20 rounded-tl-[20%] sm:rounded-tl-[30%] shadow-[-10px_10px_20px_rgba(0,0,0,0.25)]"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
            >
              <Image src="/scooter-2.png" fill alt="scooter 1" />
            </motion.div>
          </div>
          <div className="space-y-4 sm:space-y-6">
            <p className="text-[#333333] text-sm sm:text-base">Our Products</p>
            <h2 className="text-[#405b6f] text-2xl sm:text-3xl md:text-4xl font-semibold capitalize leading-tight">
              Start the Scooter Revolution
            </h2>
            <p className="text-[#333333] text-sm sm:text-base max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum ullamcorper convallis fermentum.
            </p>
            <motion.div
              className="flex gap-4 relative w-fit items-center"
              whileHover={{ x: 10 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-[#405b6f] text-sm sm:text-base font-semibold capitalize">
                View More
              </p>
              <div className="w-8 sm:w-12 h-8 sm:h-12 rounded-full absolute border -right-6 sm:-right-8 border-[#cecece]" />
              <div className="w-3 sm:w-4 h-3 sm:h-4 bg-[#de7734] rounded-full -right-6 sm:-right-8 absolute" />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Scooter Showcase */}
      <motion.section
        className="pb-8 min-h-screen flex items-end h-auto relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <Image
          src="/foret-content.png"
          alt="forest background"
          fill
          className="object-cover"
        />
        <Image
          src="/content-mountain.png"
          alt="mountain background"
          fill
          className="object-cover object-center"
        />
        <div className="container mx-auto px-4 grid lg:grid-cols-3 gap-4 sm:gap-8">
          {[
            {
              id: "01",
              name: "Black Scooter",
              price: "$200",
              img: "/scooter1_content.png",
            },
            {
              id: "02",
              name: "Faucibus Scooter",
              price: "$189",
              img: "/scooter2-content.png",
            },
            {
              id: "03",
              name: "White Scooter",
              price: "$189",
              img: "/scooter3-content.png",
            },
          ].map((scooter, index) => (
            <motion.div
              key={scooter.id}
              className="relative z-10 w-full sm:w-[80%] scooter-showcase-card mx-auto transform transition-all duration-300 hover:scale-105"
              variants={cardVariants}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              whileHover="hover"
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl w-full h-full flex flex-col items-center justify-center p-4 sm:p-6 relative overflow-hidden border-t border-l border-white/20">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#de7734] to-[#f5a06e]"></div>
                <p className="hidden md:block absolute top-4 left-4 text-[#de7734] text-4xl font-bold">
                  {scooter.id}
                </p>
                <p className="hidden md:block absolute top-6 left-16 text-gray-700 text-xl font-medium tracking-wide">
                  {scooter.name}
                </p>
                <p className="hidden md:block absolute top-4 right-4 text-[#de7734] text-2xl font-bold">
                  {scooter.price}
                </p>
                <div className="block md:hidden text-center mb-4 space-y-1">
                  <div className="flex items-center justify-between w-full px-2">
                    <p className="text-[#de7734] text-2xl font-bold">
                      {scooter.id}
                    </p>
                    <p className="text-[#de7734] text-xl font-bold">
                      {scooter.price}
                    </p>
                  </div>
                  <p className="text-gray-700 text-lg font-medium tracking-wide">
                    {scooter.name}
                  </p>
                </div>
                <div className="w-[90%] h-[60%] sm:h-[70%] flex items-center justify-center py-6">
                  <Image
                    src={scooter.img}
                    width={180}
                    height={180}
                    alt={scooter.name}
                    className="w-auto max-w-full h-auto mb-2 sm:mb-4 drop-shadow-lg"
                  />
                </div>
                <motion.button
                  className="mt-2 bg-[#de7734] hover:bg-[#c26629] text-white font-medium py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Details
                </motion.button>
                {index === 0 && (
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 -z-10 bg-[#de7734]/80 rounded-full blur-sm"></div>
                )}
                {index === 1 && (
                  <div className="absolute -top-6 -right-6 w-20 h-20 -z-10 bg-[#de7734]/20 rounded-full"></div>
                )}
                {index === 2 && (
                  <div className="absolute top-1/2 -right-8 w-16 h-16 -z-10 bg-[#de7734]/50 rounded-full blur-sm"></div>
                )}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-30 mix-blend-overlay"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Testimonial Section */}
      <motion.section
        className="py-8 sm:py-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-4 text-center">
          <div className="relative">
            <p className="text-[#333333] text-sm sm:text-lg md:text-xl max-w-3xl mx-auto leading-loose">
              <span className="font-bold">”</span> Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Quisque augue eros, pellentesque nec
              tempor eu, sollicitudin at dolor. Cras commodo venenatis diam, nec
              venenatis massa auctor at. <span className="font-bold">”</span>
            </p>
          </div>
          <p className="text-[#de7734] text-xl sm:text-2xl md:text-3xl font-medium capitalize mt-4">
            Quisque mattis
          </p>
        </div>
      </motion.section>

      {/* Rental Service Section */}
      <motion.section
        id="rental"
        className="py-12 mt-12 sm:mt-16 flex min-h-screen gap-4 flex-col items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-sm sm:text-base inline-block px-4 py-1 bg-[#de7734]/10 text-[#de7734] font-medium rounded-full mb-3">
              Rental Service
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#405B6F]">
              Jump On And Enjoy The Ride
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-[#de7734] to-[#f5a06e] mx-auto mt-4"></div>
          </div>
          <div className="grid mt-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 z-10">
            {[
              { name: "Suspendisse", price: "$20/Hour", img: "/ride-1.png" },
              { name: "Morbi leo", price: "$10/Hour", img: "/ride-2.png" },
              { name: "Maximus", price: "$20/Hour", img: "/ride-3.png" },
              { name: "Fusce vel", price: "$20/Hour", img: "/ride-4.png" },
            ].map((scooter, index) => (
              <motion.div
                key={index}
                className="relative group w-full z-20 rental-card mx-auto transform transition-all duration-300 hover:translate-y-[-8px]"
                variants={cardVariants}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                whileHover="hover"
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.8 }}
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl flex flex-col items-center p-5 pb-12 relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#de7734] to-[#f5a06e]"></div>
                  <div className="relative p-4 w-full aspect-square flex items-center justify-center">
                    <div className="absolute inset-0 bg-[#f8f8f8] rounded-xl"></div>
                    <Image
                      src={scooter.img}
                      alt={scooter.name}
                      width={180}
                      height={180}
                      className="w-full h-auto max-h-48 object-contain z-10 transform transition-all duration-500 group-hover:scale-110"
                    />
                    <div className="absolute -bottom-2 -left-2 w-14 h-14 bg-[#de7734] rounded-full opacity-80"></div>
                    {index % 2 === 0 && (
                      <div className="absolute top-4 right-4 w-8 h-8 border-2 border-[#de7734]/30 rounded-full"></div>
                    )}
                    {index % 2 === 1 && (
                      <div className="absolute -top-2 -right-2 w-10 h-10 bg-[#405B6F]/10 rounded-full"></div>
                    )}
                  </div>
                  <div className="w-full mt-4 text-center">
                    <p className="text-xl md:text-2xl text-[#405B6F] font-semibold tracking-wide">
                      {scooter.name}
                    </p>
                    <p className="text-[#de7734] font-bold text-base md:text-lg mt-1">
                      {scooter.price}
                    </p>
                    <motion.button
                      className="mt-4 bg-[#405B6F] hover:bg-[#344a5c] text-white text-sm py-2 px-5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Rent Now
                    </motion.button>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-[#de7734]/20 to-transparent"></div>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div
            className="flex justify-center mt-16 mb-8"
            whileHover={{ x: 10 }}
            transition={{ duration: 0.3 }}
          >
            <button className="group px-1 relative flex items-center text-lg gap-3 py-3 text-[#405b6f] font-semibold rounded-full hover:bg-[#405b6f] hover:text-white transition-all duration-300">
              View More
              <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full absolute border -right-5 sm:-right-8 border-[#cecece]" />
              <div className="w-3 sm:w-4 h-3 sm:h-4 bg-[#de7734] rounded-full -right-5 sm:-right-8 absolute" />
            </button>
          </motion.div>
        </div>
      </motion.section>

      {/* Subscribe Section */}
      <motion.section
        className="py-8 sm:py-12 bg-[#de7734]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-4 sm:gap-8">
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold capitalize leading-tight">
            Sign up for special offers and promotions
          </h2>
          <div className="space-y-4">
            <p className="text-white text-lg sm:text-xl uppercase">Subscribe</p>
            <motion.div
              className="flex items-center gap-2"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full text-white bg-transparent border-b border-white outline-none py-2 text-sm sm:text-base"
              />
              <BsArrowRight color="white" className="text-lg sm:text-xl" />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        id="contact"
        className={`bg-[#405b6f] text-white py-8 sm:py-12 ${nunito.className}`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
          <div className="flex w-fit flex-col items-center gap-1">
            <div className="flex items-center gap-1">
              <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                M
              </span>
              <div className="w-4 sm:w-6 h-4 sm:h-6 bg-[#de7734] rounded-full" />
              <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                DERN
              </span>
            </div>
            <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-white self-start">
              RIDES
            </span>
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-bold capitalize mb-4">
              Menu
            </h3>
            <div className="space-y-2 text-xs text-white/90 sm:text-base">
              <button
                onClick={() => scrollToSection("home")}
                className="block hover:text-[#de7734] transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block hover:text-[#de7734] transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("products")}
                className="block hover:text-[#de7734] transition-colors"
              >
                Products
              </button>
              <button
                onClick={() => scrollToSection("rental")}
                className="block hover:text-[#de7734] transition-colors"
              >
                Rental Service
              </button>
            </div>
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-bold capitalize mb-4">
              Contact
            </h3>
            <p className="text-xs sm:text-bas text-white/90">
              ModernRides@contact.com
              <br />
              +012-345-6789
              <br />
              9889 Lorem Ipsum street, Pellentesque, CA, USA
            </p>
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-bold capitalize mb-4">
              Social
            </h3>
            <div className="flex gap-4">
              <motion.div
                className="w-8 sm:w-12 h-8 sm:h-12 bg-white rounded-full flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <BsInstagram color="#405b6f" className="text-lg sm:text-xl" />
              </motion.div>
              <motion.div
                className="w-8 sm:w-12 h-8 sm:h-12 bg-white rounded-full flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <BsTwitterX color="#405b6f" className="text-lg sm:text-xl" />
              </motion.div>
              <motion.div
                className="w-8 sm:w-12 h-8 sm:h-12 bg-white rounded-full flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <FaFacebookF color="#405b6f" className="text-lg sm:text-xl" />
              </motion.div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-8 border-t border-white pt-4 flex flex-col sm:flex-row justify-between text-sm sm:text-base gap-4">
          <p className="flex">
            {/* {new Date().getFullYear()} Developed By */}
            <Link
              href="https://github.com/samadou-101/web-design/tree/main/modern-rides"
              className="underline flex ml-1 items-center gap-2"
            >
              Abdessamad Saihi
              <BsGithub />
            </Link>
          </p>
        </div>
      </motion.footer>
    </div>
  );
}
