import Experiences from "@components/home/experiences/Experiences";
import Footer from "@components/home/footer/Footer";
import Hero from "@components/home/hero/Hero";
import Materials from "@components/home/materials/Materials";
import SellingProducts from "@components/home/products/SellingProducts";
import Testimonials from "@components/home/testimonials/Testimonials";
import WhyUs from "@components/home/why-us/WhyUs";

const Home = () => {
  return (
    <div>
      <Hero />
      <WhyUs />
      <SellingProducts />
      <Experiences />
      <Materials />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
