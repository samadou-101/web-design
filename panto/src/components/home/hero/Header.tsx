import { HiOutlineShoppingBag } from "react-icons/hi2";
import { RiMenuFill } from "react-icons/ri";

const Header = () => {
  return (
    <div className="z-50 flex items-center justify-between px-5 pt-2">
      <h1 className="font-gilory text-xl text-white">Panto</h1>
      <nav className="hidden"></nav>
      <div className="flex gap-3">
        <HiOutlineShoppingBag className="h-6 w-6 text-white" />
        <RiMenuFill className="h-6 w-6 text-white" />
      </div>
    </div>
  );
};

export default Header;
