"use client";

import Link from "next/link";
import { Montserrat, Nunito } from "next/font/google";
import Image from "next/image";
import { CiLocationOn, CiWifiOn } from "react-icons/ci";
import { RiShieldKeyholeLine } from "react-icons/ri";
import { BsArrowRight, BsInstagram, BsTwitterX } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { CgShoppingCart } from "react-icons/cg";
import { BiSearch } from "react-icons/bi";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import ScooterImage from "@/components/ScooterImage";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});
const nunito = Nunito({ subsets: ["latin"], weight: ["700"] });

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div
      className={`${montserrat.className} min-h-screen bg-neutral-100 overflow-x-hidden relative`}
    >
      <style jsx>{`
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
      `}</style>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-[999] bg-transparent backdrop-blur-lg shadow-md">
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
            <Link href="/" className="hover:text-[#de7734] transition-colors">
              Home
            </Link>
            <Link
              href="/about"
              className="hover:text-[#de7734] transition-colors"
            >
              About
            </Link>
            <Link
              href="/products"
              className="hover:text-[#de7734] transition-colors"
            >
              Products
            </Link>
            <Link
              href="/rental"
              className="hover:text-[#de7734] transition-colors"
            >
              Rental Service
            </Link>
            <Link
              href="/contact"
              className="hover:text-[#de7734] transition-colors"
            >
              Contact
            </Link>
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
      </header>

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
        <section className="relative pt-20 sm:pt-24 h-screen">
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
          {/* <Image
            src="/bigscooter.png"
            width={440}
            height={600}
            alt="main scooter"
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 hero-scooter"
            sizes="(max-width: 640px) 80vw, (max-width: 1024px) 60vw, 40vw"
          /> */}
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
                <button className="bg-[#de7734] text-white mt-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full uppercase text-xs sm:text-sm font-medium border hover:bg-[#c5682d] transition">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-8 sm:py-12  relative bg-neutral-100 z-10">
          <div className="container mx-auto px-4 grid xl:grid-cols-2 pt-22 gap-4 sm:gap-8 items-center">
            <div className="w-fit relative">
              <div className="w-24 sm:w-40 h-24 sm:h-40 bg-[#de7734] rounded-full absolute -z-10 -top-8 sm:-top-12 -left-10 sm:-left-20 circle-large" />
              <div className="w-16 sm:w-24 h-16 sm:h-24 rounded-full outline-2 outline-offset-1 outline-[#de7734] absolute -bottom-10 -right-10 z-10 circle-small" />
              <div className="w-[80vw] sm:w-[600px] h-[60vw] sm:h-[500px] overflow-hidden bg-[#d9d9d9] relative z-20 rounded-tl-[20%] sm:rounded-tl-[30%] shadow-[-10px_10px_20px_rgba(0,0,0,0.25)]">
                <Image src="/scooter-1.png" fill alt="scooter 1" />
              </div>
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
              <div className="flex gap-4 relative w-fit items-center">
                <p className="text-[#405b6f] text-sm sm:text-base font-semibold capitalize">
                  View More
                </p>
                <div className="w-8 sm:w-12 h-8 sm:h-12 rounded-full absolute border -right-6 sm:-right-8 border-[#cecece]" />
                <div className="w-3 sm:w-4 h-3 sm:h-4 bg-[#de7734] rounded-full -right-6 sm:-right-8 absolute" />
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-8 sm:py-12 bg-neutral-100 relative max-sm:z-50 max-sm:mb-36 max-sm:pb-0 ">
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
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-2 sm:w-3 h-2 sm:h-3 bg-[#de7734] rounded-full" />
                    <p className="text-[#333333] text-sm sm:text-base">
                      Lorem ipsum dolor sit amet.
                    </p>
                  </div>
                ))}
              </div>
              <div className="flex gap-4 relative w-fit items-center">
                <p className="text-[#405b6f] text-sm sm:text-base font-semibold capitalize">
                  View More
                </p>
                <div className="w-8 sm:w-12 h-8 sm:h-12 rounded-full absolute border -right-6 sm:-right-8 border-[#cecece]" />
                <div className="w-3 sm:w-4 h-3 sm:h-4 bg-[#de7734] rounded-full -right-6 sm:-right-8 absolute" />
              </div>
            </div>
            <div className="relative w-fit ml-auto">
              <div className="w-24 sm:w-40 h-24 sm:h-40 bg-[#de7734] rounded-full absolute z-10 -top-8 sm:-top-12 -right-10 circle-large" />
              <div className="w-16 sm:w-24 h-16 sm:h-24 rounded-full outline-2 outline-offset-1 outline-[#de7734] absolute -bottom-10 -left-10 z-10 circle-small" />
              <div className="w-[80vw] sm:w-[600px] h-[60vw] sm:h-[500px] overflow-hidden z-30 bg-[#d9d9d9] relative rounded-tr-[20%] sm:Rounded-tr-[30%] shadow-[-10px_10px_20px_rgba(0,0,0,0.25)]">
                <Image src="/scooter-3.jpg" fill alt="scooter 1" />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Round Big Circle */}
      <section className="relative -top-8 sm:-top-24 w-screen h-[30vh] sm:h-[70vh] flex items-center justify-center max-sm:h-[10vh]">
        <div className="w-[60vh]  sm:w-[60vh] max-sm:w-[35vh] h-[50vh] sm:h-[60vh] max-sm:h-[35vh] rounded-full bg-white flex items-center justify-center relative">
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
      </section>

      {/* Products Section */}
      <section className="relative top-12 sm:-top-52">
        <div className="container mx-auto px-4 grid xl:grid-cols-2 gap-4 sm:gap-8 items-center max-sm:mb-32">
          <div className="relative">
            <div className="w-40 sm:w-64 h-40 sm:h-64 bg-[#de7734] rounded-full absolute z-10 -top-8 sm:-top-12 -left-16 sm:-left-32 circle-large" />
            <div className="w-16 sm:w-24 h-16 sm:h-24 rounded-full outline-2 outline-offset-[-1.5px] outline-[#de7734] absolute -bottom-6 sm:-bottom-10 right-12 sm:right-24 circle-small" />
            <div className="w-[80vw] sm:w-[600px] h-[60vw] sm:h-[500px] overflow-hidden bg-[#d9d9d9] relative z-20 rounded-tl-[20%] sm:rounded-tl-[30%] shadow-[-10px_10px_20px_rgba(0,0,0,0.25)]">
              <Image src="/scooter-2.png" fill alt="scooter 1" />
            </div>
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
            <div className="flex gap-4 relative w-fit items-center">
              <p className="text-[#405b6f] text-sm sm:text-base font-semibold capitalize">
                View More
              </p>
              <div className="w-8 sm:w-12 h-8 sm:h-12 rounded-full absolute border -right-6 sm:-right-8 border-[#cecece]" />
              <div className="w-3 sm:w-4 h-3 sm:h-4 bg-[#de7734] rounded-full -right-6 sm:-right-8 absolute" />
            </div>
          </div>
        </div>
      </section>

      {/* Scooter Showcase */}
      <section className="pb-8 min-h-screen flex items-end h-auto relative">
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
            <div
              key={scooter.id}
              className="relative z-10 w-full sm:w-[80%] scooter-showcase-card mx-auto transform transition-all duration-300 hover:scale-105"
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl w-full h-full flex flex-col items-center justify-center p-4 sm:p-6 relative overflow-hidden border-t border-l border-white/20">
                {/* Orange accent line at top */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#de7734] to-[#f5a06e]"></div>

                {/* Show texts absolutely positioned on md+ */}
                <p className="hidden md:block absolute top-4 left-4 text-[#de7734] text-4xl font-bold">
                  {scooter.id}
                </p>
                <p className="hidden md:block absolute top-6 left-16 text-gray-700 text-xl font-medium tracking-wide">
                  {scooter.name}
                </p>
                <p className="hidden md:block absolute top-4 right-4 text-[#de7734] text-2xl font-bold">
                  {scooter.price}
                </p>

                {/* Show texts inline for small screens */}
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

                {/* Action button */}
                <button className="mt-2 bg-[#de7734] hover:bg-[#c26629] text-white font-medium py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                  View Details
                </button>

                {/* Decorative elements */}
                {index === 0 && (
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 -z-10 bg-[#de7734]/80 rounded-full blur-sm"></div>
                )}
                {index === 1 && (
                  <div className="absolute -top-6 -right-6 w-20 h-20 -z-10 bg-[#de7734]/20 rounded-full"></div>
                )}
                {index === 2 && (
                  <div className="absolute top-1/2 -right-8 w-16 h-16 -z-10 bg-[#de7734]/50 rounded-full blur-sm"></div>
                )}

                {/* Subtle pattern overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-30 mix-blend-overlay"></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-8 sm:py-12">
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
      </section>

      {/* Rental Service Section */}
      <section className="py-12 mt-12 sm:mt-16 flex min-h-screen gap-4 flex-col items-center">
        <div className="container mx-auto px-4">
          {/* Section header */}
          <div className="text-center mb-12">
            <span className="text-sm sm:text-base inline-block px-4 py-1 bg-[#de7734]/10 text-[#de7734] font-medium rounded-full mb-3">
              Rental Service
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#405B6F]">
              Jump On And Enjoy The Ride
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-[#de7734] to-[#f5a06e] mx-auto mt-4"></div>
          </div>

          {/* Rental cards grid */}
          <div className="grid mt-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 z-10">
            {[
              { name: "Suspendisse", price: "$20/Hour", img: "/ride-1.png" },
              { name: "Morbi leo", price: "$10/Hour", img: "/ride-2.png" },
              { name: "Maximus", price: "$20/Hour", img: "/ride-3.png" },
              { name: "Fusce vel", price: "$20/Hour", img: "/ride-4.png" },
            ].map((scooter, index) => (
              <div
                key={index}
                className="relative group w-full z-20 rental-card mx-auto transform transition-all duration-300 hover:translate-y-[-8px]"
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl flex flex-col items-center p-5 pb-12 relative overflow-hidden">
                  {/* Top accent gradient */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#de7734] to-[#f5a06e]"></div>

                  {/* Image container */}
                  <div className="relative p-4 w-full aspect-square flex items-center justify-center">
                    <div className="absolute inset-0 bg-[#f8f8f8] rounded-xl"></div>
                    <Image
                      src={scooter.img}
                      alt={scooter.name}
                      width={180}
                      height={180}
                      className="w-full h-auto max-h-48 object-contain z-10 transform transition-all duration-500 group-hover:scale-110"
                    />

                    {/* Decorative elements */}
                    <div className="absolute -bottom-2 -left-2 w-14 h-14 bg-[#de7734] rounded-full opacity-80"></div>
                    {index % 2 === 0 && (
                      <div className="absolute top-4 right-4 w-8 h-8 border-2 border-[#de7734]/30 rounded-full"></div>
                    )}
                    {index % 2 === 1 && (
                      <div className="absolute -top-2 -right-2 w-10 h-10 bg-[#405B6F]/10 rounded-full"></div>
                    )}
                  </div>

                  {/* Product info */}
                  <div className="w-full mt-4 text-center">
                    <p className="text-xl md:text-2xl text-[#405B6F] font-semibold tracking-wide">
                      {scooter.name}
                    </p>
                    <p className="text-[#de7734] font-bold text-base md:text-lg mt-1">
                      {scooter.price}
                    </p>

                    {/* Hidden rent button that appears on hover */}
                    <button className="mt-4 bg-[#405B6F] hover:bg-[#344a5c] text-white text-sm py-2 px-5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      Rent Now
                    </button>
                  </div>

                  {/* Bottom decorative pattern */}
                  <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-[#de7734]/20 to-transparent"></div>
                </div>
              </div>
            ))}
          </div>

          {/* View more button */}
          <div className="flex justify-center mt-16 mb-8">
            <button className="group px-1 relative flex items-center text-lg gap-3 py-3 text-[#405b6f] font-semibold rounded-full hover:bg-[#405b6f] hover:text-white transition-all duration-300">
              View More
              <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full absolute border -right-5 sm:-right-8 border-[#cecece]" />
              <div className="w-3 sm:w-4 h-3 sm:h-4 bg-[#de7734] rounded-full -right-5 sm:-right-8 absolute" />
            </button>
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="py-8 sm:py-12 bg-[#de7734]">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-4 sm:gap-8">
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold capitalize leading-tight">
            Sign up for special offers and promotions
          </h2>
          <div className="space-y-4">
            <p className="text-white text-lg sm:text-xl uppercase">Subscribe</p>
            <div className="flex items-center gap-2">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full text-white bg-transparent border-b border-white outline-none py-2 text-sm sm:text-base"
              />
              <BsArrowRight color="white" className="text-lg sm:text-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`bg-[#405b6f] text-white py-8 sm:py-12 ${nunito.className}`}
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
            <div className="space-y-2 text-sm sm:text-base">
              <Link
                href="/"
                className="block hover:text-[#de7734] transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block hover:text-[#de7734] transition-colors"
              >
                About
              </Link>
              <Link
                href="/products"
                className="block hover:text-[#de7734] transition-colors"
              >
                Products
              </Link>
              <Link
                href="/rental"
                className="block hover:text-[#de7734] transition-colors"
              >
                Rental Service
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-bold capitalize mb-4">
              Contact
            </h3>
            <p className="text-sm sm:text-base">
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
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-white rounded-full flex items-center justify-center">
                <BsInstagram color="#405b6f" className="text-lg sm:text-xl" />
              </div>
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-white rounded-full flex items-center justify-center">
                <BsTwitterX color="#405b6f" className="text-lg sm:text-xl" />
              </div>
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-white rounded-full flex items-center justify-center">
                <FaFacebookF color="#405b6f" className="text-lg sm:text-xl" />
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-8 border-t border-white pt-4 flex flex-col sm:flex-row justify-between text-sm sm:text-base gap-4">
          <p>Copyright Dotcreativemarket</p>
          <div className="space-x-4">
            <Link
              href="/terms"
              className="hover:text-[#de7734] transition-colors"
            >
              Terms of Use
            </Link>
            <Link
              href="/privacy"
              className="hover:text-[#de7734] transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
