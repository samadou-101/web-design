import ProductsFilter from "./ProductsFilter";

const Header = () => {
  return (
    <div className="flex flex-col items-center gap-8">
      <h1 className="text-text text-4xl font-bold md:text-5xl">
        Best Selling Products
      </h1>
      <ProductsFilter />
    </div>
  );
};

export default Header;
