import PopularProducts from "../components/home/popular_products/PopularProducts";
import HowTo from "../components/home/how_to/HowTo";
import About from "../components/home/about/About";
import Menu from "../components/home/menu/Menu";
import Hero from "../components/home/hero/Hero";
import Testimonial from "../components/home/testimonial/Testimonial";
import NewsLetter from "../components/home/newsletter/NewsLetter";

const Home = () => {
  return (
    <div className="w-screen">
      <div className="bg-background mb-36 flex h-auto flex-col gap-[17vh] max-2xl:gap-[10vh] max-lg:gap-[13vh]">
        <Hero />
        <PopularProducts />
      </div>
      <HowTo />
      <About />
      <Menu />
      <Testimonial />
      <NewsLetter />
    </div>
  );
};

export default Home;
