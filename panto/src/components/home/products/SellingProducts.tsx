import Chair from "./content/Card";
import Header from "./Header";
import chair from "@assets/best-selling/chair-1.png";
const SellingProducts = () => {
  return (
    <div className="bg-selling flex flex-col items-center justify-center py-12">
      <Header />
      <Chair
        img={chair}
        category="chair"
        title="Sakarias Armchair"
        rating={5}
        price={392}
      />
    </div>
  );
};

export default SellingProducts;
