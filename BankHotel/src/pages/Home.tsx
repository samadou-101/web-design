import Header from "../components/home/header/Header";
import Hero from "../components/home/hero/Hero";
import About from "../components/home/about/About";
import Services from "../components/home/services/Services";
import Best_Apartment from "../components/home/apartment/Best_Apartment";
import Gallery from "../components/home/gallery/Gallery";
import Get_In_Touch from "../components/home/contact/Get_In_Touch";

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Best_Apartment />
      <Gallery />
      <Get_In_Touch />
    </>
  );
}

export default Home;
