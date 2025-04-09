import { HiOutlineShoppingBag } from "react-icons/hi2";
import { RiMenuFill } from "react-icons/ri";

const Header = () => {
  return (
    <div className="bg-header fixed top-0 left-0 z-50 flex w-screen items-center justify-between px-5 py-2 pr-8">
      <h1 className="font-gilory text-base font-bold text-white sm:text-2xl md:text-3xl">
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
