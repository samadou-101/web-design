import PopularProducts from "../components/home/popular_products/PopularProducts";
import HowTo from "../components/home/how_to/HowTo";
import About from "../components/home/about/About";
import Menu from "../components/home/menu/Menu";
import Hero from "../components/home/hero/Hero";
import Testimonial from "../components/home/testimonial/Testimonial";

const Home = () => {
  return (
    <div className="w-screen">
      <div className="bg-background flex h-auto flex-col gap-[15vh]">
        <Hero />
        <PopularProducts />
      </div>
      <HowTo />
      <About />
      <Menu />
      <Testimonial />
    </div>
  );
};

export default Home;
