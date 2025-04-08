import Products from "./content/Products";
import Header from "./Header";
import ViewAll from "./ViewAll";
const SellingProducts = () => {
  return (
    <div className="bg-selling flex flex-col items-center justify-center py-12">
      <Header />
      <Products />
      <ViewAll />
    </div>
  );
};

export default SellingProducts;
