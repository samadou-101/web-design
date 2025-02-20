import HowToCard from "./HowToCard";
import firstService from "../../../assets/how_to/coffee_1.png";
import secondService from "../../../assets/how_to/food-truck 1.png";
import thirdService from "../../../assets/how_to/coffee-cup 2.png";

const HowTo = () => {
  return (
    <div className="bg-glass mt-28 w-full px-[5vw]">
      <div className="flex w-full flex-col gap-28">
        <p className="text-secondary text-3xl font-bold tracking-wider">
          How to use delivery{" "}
          <span className="decoration-primary underline">services</span>
        </p>
        <div className="grid w-full grid-cols-3 self-center">
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
