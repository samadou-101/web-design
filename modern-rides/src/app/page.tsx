import Link from "next/link";
import { Montserrat, Nunito } from "next/font/google";
import Image from "next/image";
import { CiLocationOn, CiWifiOn } from "react-icons/ci";
import { RiShieldKeyholeLine } from "react-icons/ri";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});
const nunito = Nunito({ subsets: ["latin"], weight: ["700"] });

export default function LandingPage() {
  return (
    <div
      className={`${montserrat.className} min-h-screen bg-neutral-100 overflow-x-hidden relative`}
    >
      {/* <div className="absolute inset-0 bg-[#d9d9d9] opacity-20 mix-blend-screen z-0" /> */}
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-transparent shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex flex-col items-center gap-1">
            <div className="flex items-center gap-1">
              <span className="text-2xl font-bold text-[#405b6f]">M</span>
              <div className="w-6 h-6 bg-[#de7734] rounded-full" />
              <span className="text-2xl font-bold text-[#405b6f]">DERN</span>
            </div>
            <span className="text-2xl font-bold text-[#405b6f] self-start">
              RIDES
            </span>
          </div>
          <nav className="hidden md:flex gap-6 text-[#333333] text-base">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/products">Products</Link>
            <Link href="/rental">Rental Service</Link>
            <Link href="/contact">Contact</Link>
          </nav>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-[#333333]" />
              <span className="text-[#333333] text-base hidden sm:inline">
                Cart
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 relative">
                <div className="w-3.5 h-3.5 absolute left-1 top-1 rounded-full border-2 border-[#333333]" />
                <div className="w-1 h-1 absolute right-1 bottom-1 border-2 border-[#333333]" />
              </div>
              <span className="text-[#333333] text-base hidden sm:inline">
                Search
              </span>
            </div>
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
        <section
          className="relative 
         pt-24 h-screen"
        >
          <Image
            src="/hero-mask.png"
            alt="main scooter"
            width={0}
            height={0}
            className="absolute bottom-0 left-0 w-screen h-auto object-contain  lg:-bottom-[100px] xl:-bottom-[200px] 2xl:-bottom-[400px] object-bottom"
            sizes="100vw"
            priority
          />

          <Image
            src={"/bigscooter.png"}
            width={500}
            height={500}
            alt="main scooter"
            className="absolute bottom-0 left-[40%]"
          />
          <div className="container mx-auto px-4 grid pt-20 md:grid-cols-2 gap-8 items-center relative z-10">
            <div className="space-y-6 w-[80%]">
              <p className="text-[#333333] text-base">On Sale Now</p>
              <h1 className="text-[#405b6f] text-4xl md:text-6xl font-semibold uppercase">
                Electric Scooter
              </h1>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <CiWifiOn />
                  <span className="text-[#333333] text-sm capitalize">
                    Wireless Bike
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <RiShieldKeyholeLine />
                  <span className="text-[#333333] text-sm capitalize">
                    Smart Lock
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CiLocationOn />
                  <span className="text-[#333333] text-sm capitalize">
                    Location GPS
                  </span>
                </div>
              </div>
            </div>
            <div className="ml-auto w-[50%]">
              <div className="text-left">
                <p className="text-[#de7734] text-3xl md:text-5xl font-semibold">
                  $1699.00
                </p>
                <p className="text-[#333333] text-sm text-left w-[75%] max-xl:w-full  mt-2">
                  Lorem ipsum <span className="font-semibold">15% off</span>,
                  consectetur adipiscing elit.{" "}
                  <span className="font-semibold">Shipping</span> ullamcorper
                  convallis fermentum.
                </p>
                <button className="bg-[#de7734] text-white mt-2 px-6 py-3 rounded-full uppercase text-sm font-medium border  hover:bg-[#c5682d] transition">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-12 pt-26 relative bg-neutral-100 z-10">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <div className="w-64 h-64 bg-[#de7734] rounded-full absolute -z-10 -top-12 -left-32  outline-offset-[-1.5px]" />
              <div className="w-24 h-24 rounded-full outline-2 outline-offset-[-1.5px] outline-[#de7734] absolute -bottom-10 right-24" />
              <div className="w-[600px] h-[500px] overflow-hidden bg-[#d9d9d9] relative z-20 rounded-tl-[30%] shadow-[-10px_10px_20px_rgba(0,0,0,0.25)]">
                <Image src={"/scooter-1.png"} fill alt="scooter 1" />
              </div>
            </div>
            <div className="space-y-6">
              <p className="text-[#333333] text-base">About Us</p>
              <h2 className="text-[#405b6f] text-4xl font-semibold capitalize leading-tight">
                We created the most advanced Scooter technology
              </h2>
              <p className="text-[#333333] text-base max-w-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum ullamcorper convallis fermentum.
              </p>
              <div className="flex gap-4 relative w-fit items-center">
                <p className="text-[#405b6f] text-base font-semibold capitalize">
                  View More
                </p>
                <div className="w-12 h-12 rounded-full absolute border -right-8 border-[#cecece]" />
                <div className="w-4 h-4 bg-[#de7734] rounded-full -right-8 absolute" />
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className=" bg-neutral-100 relative ">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <p className="text-[#333333] text-base">Our Core Value</p>
              <h2 className="text-[#405b6f] text-4xl font-semibold capitalize leading-tight">
                Less Noise Pollution, Moving Around Swiftly
              </h2>
              <p className="text-[#333333] text-base max-w-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum ullamcorper convallis fermentum.
              </p>
              <div className="space-y-2">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-[#de7734] rounded-full" />
                    <p className="text-[#333333] text-base">
                      Lorem ipsum dolor sit amet.
                    </p>
                  </div>
                ))}
              </div>
              <div className="flex gap-4 relative w-fit items-center">
                <p className="text-[#405b6f] text-base font-semibold capitalize">
                  View More
                </p>
                <div className="w-12 h-12 rounded-full absolute border -right-8 border-[#cecece]" />
                <div className="w-4 h-4 bg-[#de7734] rounded-full -right-8 absolute" />
              </div>
            </div>
            <div className="relative z-90 ml-auto">
              <div className="w-64 h-64 bg-[#de7734] rounded-full absolute -z-10 -top-12 -right-32  outline-offset-[-1.5px]" />
              <div className="w-[600px] h-[500px] overflow-hidden bg-[#d9d9d9] relative rounded-tr-[30%] shadow-[-10px_10px_20px_rgba(0,0,0,0.25)]">
                <Image src={"/scooter-3.jpg"} fill alt="scooter 1" />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Round Big Circle */}
      <section className="relative -top-24  w-screen h-[70vh] flex items-center justify-center">
        <div className="w-[60vh] relative h-[60vh] rounded-full bg-white flex items-center justify-center">
          <div className="w-24 h-24 rounded-full outline-2 outline-offset-[-1.5px] outline-[#de7734] absolute top-0 right-10" />
          <div className="flex flex-col items-center gap-1">
            <div className="flex items-center gap-1">
              <span className="text-6xl font-bold text-[#405b6f]">M</span>
              <div className="w-12 h-12 bg-[#de7734] rounded-full" />
              <span className="text-6xl font-bold text-[#405b6f]">DERN</span>
            </div>
            <span className="text-6xl font-bold text-[#405b6f] self-start">
              RIDES
            </span>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="relative -top-52">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div className="relative">
            <div className="w-64 h-64 bg-[#de7734] rounded-full absolute z-10 -top-12 -left-32  outline-offset-[-1.5px]" />
            <div className="w-24 h-24 rounded-full outline-2 outline-offset-[-1.5px] outline-[#de7734] absolute -bottom-10 right-24" />
            <div className="w-[600px] h-[500px] overflow-hidden bg-[#d9d9d9] relative z-20 rounded-tl-[30%] shadow-[-10px_10px_20px_rgba(0,0,0,0.25)]">
              <Image src={"/scooter-2.png"} fill alt="scooter 1" />
            </div>
          </div>
          <div className="space-y-6">
            <p className="text-[#333333] text-base">Our Products</p>
            <h2 className="text-[#405b6f] text-4xl font-semibold capitalize leading-tight">
              Start the Scooter Revolution
            </h2>
            <p className="text-[#333333] text-base max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum ullamcorper convallis fermentum.
            </p>
            <div className="flex gap-4 relative w-fit items-center">
              <p className="text-[#405b6f] text-base font-semibold capitalize">
                View More
              </p>
              <div className="w-12 h-12 rounded-full absolute border -right-8 border-[#cecece]" />
              <div className="w-4 h-4 bg-[#de7734] rounded-full -right-8 absolute" />
            </div>
          </div>
        </div>
      </section>

      {/* Scooter Showcase */}
      <section className=" pb-8 min-h-screen flex items-end h-auto border-2 relative">
        {/* Background images */}
        <Image
          src={"/foret-content.png"}
          alt="forest background"
          fill
          className="object-cover"
        />
        <Image
          src={"/content-mountain.png"}
          alt="mountain background"
          fill
          className="object-cover object-center"
        />

        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
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
            <div key={scooter.id} className="relative z-90 w-[80%]">
              <div className="bg-neutral-200 rounded-bl-[40%]  shadow-lg w-full  h-full flex flex-col items-center justify-center p-6 relative">
                {/* ID Label */}
                <p className="absolute -top-[40%] left-6 text-[#de7734] text-4xl font-bold">
                  {scooter.id}
                </p>
                {/* Scooter Name */}
                <p className=" absolute -top-[20%] left-6 text-[#D3D3D3]/80 text-2xl font-semibold">
                  {scooter.name}
                </p>
                {/* Price */}
                <p className=" absolute -top-[20%] right-6 text-[#de7734] text-xl font-bold">
                  {scooter.price}
                </p>
                {/* Scooter Image */}
                <div className="w-[90%] h-[70%] flex items-center justify-center">
                  <Image
                    src={scooter.img}
                    width={200}
                    height={200}
                    alt={scooter.name}
                    className="w-auto max-w-full h-auto mb-4"
                  />
                </div>
                {/* Add to Cart Button (only for first scooter) */}
                {/* Orange Circle at Bottom Left */}
                {(index === 0 || index === 2) && (
                  <div className="absolute -bottom-5 left-0 w-22 h-22 -z-10 bg-[#de7734] rounded-full"></div>
                )}
                {index === 1 && (
                  <div className="absolute -top-6 -left-6 w-18 h-18 -z-10 bg-transparent outline-2 outline-[#de7734] rounded-full"></div>
                )}
                {/* <div className="absolute bottom-[-20px] left-[-20px] w-12 h-12 bg-[#de7734] rounded-full"></div> */}
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Testimonial Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="relative">
            <p className="text-[#333333] text-xl max-w-3xl mx-auto leading-loose">
              <span className="font-bold">”</span> Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Quisque augue eros, pellentesque nec
              tempor eu, sollicitudin at dolor. Cras commodo venenatis diam, nec
              venenatis massa auctor at. <span className="font-bold">”</span>
            </p>
          </div>
          <p className="text-[#de7734] text-3xl font-medium capitalize mt-4">
            Quisque mattis
          </p>
        </div>
      </section>

      {/* Rental Service Section */}
      <section className="py-8 mt-16 flex min-h-screen gap-4 flex-col items-center">
        <span>Rental Service</span>
        <h1 className="text-4xl font-bold text-[#405B6F]">
          Jump On And Enjoy The Ride
        </h1>
        <div className="grid mt-4 md:grid-cols-4 gap-8 z-90">
          {[
            { name: "Suspendisse", price: "$20/Hour", img: "/ride-1.png" },
            { name: "Morbi leo", price: "$10/Hour", img: "/ride-2.png" },
            { name: "Maximus", price: "$20/Hour", img: "/ride-3.png" },
            { name: "Fusce vel", price: "$20/Hour", img: "/ride-4.png" },
          ].map((scooter, index) => (
            <div key={index} className="relative w-[90%] z-20">
              <div className="bg-white rounded-bl-[40%] shadow-lg flex flex-col items-center p-4">
                <div className="relative p-8 w-[300px] h-[300px] flex items-center justify-center">
                  <Image
                    src={scooter.img}
                    alt={scooter.name}
                    width={200}
                    height={200}
                    className=" w-full h-auto"
                  />
                  <div className="absolute -bottom-0 -z-10 -left-4 w-16 h-16 bg-[#de7734] rounded-full "></div>
                </div>
              </div>
              <div className="flex top-[107%] gap-4 text-center left-20 flex-col absolute">
                <p className=" text-2xl text-[#405B6F] font-semibold">
                  {scooter.name}
                </p>
                <p className="top-[118%] text-[#de7734] font-bold">
                  {scooter.price}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-4 relative mt-auto pb-36 w-fit items-center">
          <p className="text-[#405b6f] text-base font-semibold capitalize">
            View More
          </p>
          <div className="w-12 h-12 rounded-full absolute border -right-8 border-[#cecece]" />
          <div className="w-4 h-4 bg-[#de7734] rounded-full -right-8 absolute" />
        </div>
      </section>

      {/* Footer */}
      <footer className={`bg-[#405b6f] text-white py-12 ${nunito.className}`}>
        <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-12 h-12 bg-[#de7734] rounded-full" />
              <div className="w-32 h-16 bg-white" />
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold capitalize mb-4">Menu</h3>
            <div className="space-y-2 text-base">
              <Link href="/">Home</Link>
              <br />
              <Link href="/about">About</Link>
              <br />
              <Link href="/products">Products</Link>
              <br />
              <Link href="/rental">Rental Service</Link>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold capitalize mb-4">Contact</h3>
            <p className="text-base">
              ModernRides@contact.com
              <br />
              +012-345-6789
              <br />
              9889 Lorem Ipsum street, Pellentesque, CA, USA
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold capitalize mb-4">Social</h3>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-[#405b6f]" />
              </div>
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <div className="w-2 h-4 bg-[#405b6f]" />
              </div>
              <div className="w-12 h-12 bg-white rounded-full" />
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-8 border-t border-white pt-4 flex justify-between text-base">
          <p>Copyright Dotcreativemarket</p>
          <div className="space-x-4">
            <Link href="/terms">Terms of Use</Link>
            <Link href="/privacy">Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
