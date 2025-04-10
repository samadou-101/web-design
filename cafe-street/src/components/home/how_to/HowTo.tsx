import HowToCard from "./HowToCard";
import firstService from "../../../assets/how_to/coffee_1.png";
import secondService from "../../../assets/how_to/food-truck 1.png";
import thirdService from "../../../assets/how_to/coffee-cup 2.png";

const HowTo = () => {
  return (
    <div className="bg-glass mt-28 w-full px-4 sm:px-6 md:px-[5vw]">
      <div className="flex w-full flex-col gap-12 sm:gap-16 md:gap-28">
        <h2 className="text-secondary text-3xl font-bold tracking-wider sm:text-3xl md:text-4xl lg:text-5xl">
          How to use delivery{" "}
          <span className="decoration-primary underline">services</span>
        </h2>
        <div className="grid w-full grid-cols-1 gap-8 self-center sm:grid-cols-2 md:grid-cols-3 md:gap-6">
          <HowToCard
            imgUrl={firstService}
            title="choose your coffee"
            actionText={"there are 20+ coffees for you"}
          />
          <HowToCard
            imgUrl={secondService}
            title="we delivery it to you"
            actionText={"Choose delivery service"}
          />
          <HowToCard
            imgUrl={thirdService}
            title="Enjoy your coffee"
            actionText={"Choose delivery service"}
          />
        </div>
      </div>
    </div>
  );
};

export default HowTo;
