import MenuProductCard from "./MenuProductCard";
import sandwich from "../../../assets/menu/sandwich.png";
import hotMilk from "../../../assets/menu/hot-milk.png";
import coffeeIceCream from "../../../assets/menu/coffee-ice-cream.png";
import cappucino from "../../../assets/menu/cappucino.png";
import moccacinno from "../../../assets/menu/moccacinno.png";
import waffleIceCream from "../../../assets/menu/waffle-ice-cream.png";

const Menu = () => {
  return (
    <div className="mt-32 flex flex-col gap-20 px-[5vw]">
      <h1 className="text-secondary text-3xl font-bold tracking-wide">
        Special menu{" "}
        <span className="decoration-primary border-primary border-b-4">
          for you
        </span>
      </h1>

      <div className="grid w-[85%] grid-cols-3 grid-rows-2 gap-12 self-center max-2xl:w-[90%]">
        <MenuProductCard
          imgUrl={sandwich}
          productName={"Sandwich"}
          description="this is a test description more moremore rmore "
          reviewsNumber={12}
        />
        <MenuProductCard
          imgUrl={hotMilk}
          productName={"Sandwich"}
          description="this is a test description more moremore rmore "
          reviewsNumber={12}
        />
        <MenuProductCard
          imgUrl={coffeeIceCream}
          productName={"Sandwich"}
          description="this is a test description more moremore rmore "
          reviewsNumber={12}
          bigPic={true}
        />
        <MenuProductCard
          imgUrl={cappucino}
          productName={"Sandwich"}
          description="this is a test description more moremore rmore "
          reviewsNumber={12}
        />
        <MenuProductCard
          imgUrl={moccacinno}
          productName={"Sandwich"}
          description="this is a test description more moremore rmore "
          reviewsNumber={12}
          bigPic={true}
        />
        <MenuProductCard
          imgUrl={waffleIceCream}
          productName={"Sandwich"}
          description="this is a test description more moremore rmore "
          reviewsNumber={12}
        />
      </div>
    </div>
  );
};

export default Menu;
