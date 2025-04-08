import { HiOutlineShoppingBag } from "react-icons/hi2";
import { RiMenuFill } from "react-icons/ri";

const Header = () => {
  return (
    <div className="sticky z-50 flex items-center justify-between px-5 pt-2">
      <h1 className="font-gilory text-base text-white sm:text-2xl md:text-3xl">
        Panto
      </h1>
      <nav className="hidden"></nav>
      <div className="flex gap-3">
        <HiOutlineShoppingBag className="3sm:h-6 3sm:w-6 h-4 w-4 text-white" />
        <RiMenuFill className="3sm:h-6 3sm:w-6 h-4 w-4 text-white" />
      </div>
    </div>
  );
};

export default Header;
