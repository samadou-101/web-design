import Header from "../components/home/header/Header";
import PopularProducts from "../components/home/popular_products/PopularProducts";
import HowTo from "../components/home/how_to/HowTo";
import About from "../components/home/about/About";
import Menu from "../components/home/menu/Menu";
import Hero from "../components/home/hero/Hero";
import { PiShoppingCartSimpleLight } from "react-icons/pi";

const Home = () => {
  return (
    <div className="bg-hero">
      <Header />
      <Hero />
      <PopularProducts />
      <HowTo />
      <About />
      <Menu />
    </div>
  );
};

export default Home;
