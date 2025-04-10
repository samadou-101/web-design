import MenuProductCard from "./MenuProductCard";
import sandwich from "../../../assets/menu/sandwich.png";
import hotMilk from "../../../assets/menu/hot-milk.png";
import coffeeIceCream from "../../../assets/menu/coffee-ice-cream.png";
import cappucino from "../../../assets/menu/cappucino.png";
import moccacinno from "../../../assets/menu/moccacinno.png";
import waffleIceCream from "../../../assets/menu/waffle-ice-cream.png";

const Menu = () => {
  return (
    <div className="mt-16 flex flex-col gap-12 px-4 sm:mt-24 sm:gap-16 md:mt-32 md:gap-20 md:px-[5vw]">
      <h1 className="text-secondary text-3xl font-bold tracking-wide sm:text-4xl md:text-5xl">
        Special menu{" "}
        <span className="decoration-primary border-primary border-b-4">
          for you
        </span>
      </h1>

      <div className="grid w-full grid-cols-1 gap-6 self-center max-2xl:w-[90%] sm:w-[95%] sm:grid-cols-2 sm:gap-8 md:w-full md:grid-cols-3 md:gap-12">
        <MenuProductCard
          imgUrl={sandwich}
          productName={"Sandwich"}
          description="this is a test description more moremore rmore "
          reviewsNumber={12}
        />
        <MenuProductCard
          imgUrl={hotMilk}
          productName={"Hot Milk"}
          description="this is a test description more moremore rmore "
          reviewsNumber={12}
        />
        <MenuProductCard
          imgUrl={coffeeIceCream}
          productName={"Coffee Ice Cream"}
          description="this is a test description more moremore rmore "
          reviewsNumber={12}
          bigPic={true}
        />
        <MenuProductCard
          imgUrl={cappucino}
          productName={"Cappuccino"}
          description="this is a test description more moremore rmore "
          reviewsNumber={12}
        />
        <MenuProductCard
          imgUrl={moccacinno}
          productName={"Moccacinno"}
          description="this is a test description more moremore rmore "
          reviewsNumber={12}
          bigPic={true}
        />
        <MenuProductCard
          imgUrl={waffleIceCream}
          productName={"Waffle Ice Cream"}
          description="this is a test description more moremore rmore "
          reviewsNumber={12}
        />
      </div>
    </div>
  );
};

export default Menu;
