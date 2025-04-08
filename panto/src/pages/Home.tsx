import Hero from "@components/home/hero/Hero";
import SellingProducts from "@components/home/products/SellingProducts";
import WhyUs from "@components/home/why-us/WhyUs";

const Home = () => {
  return (
    <div>
      <Hero />
      <WhyUs />
      <SellingProducts />
    </div>
  );
};

export default Home;
