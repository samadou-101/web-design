import logo from "../../../assets/hero/logo_coffe.svg";
import SearchBar from "./SearchBar";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import { IoMdMore } from "react-icons/io";

const Header = () => {
  return (
    <header className="flex w-full items-center justify-around max-lg:justify-between">
      <div className="max-lg:h-auto max-lg:w-[120px]">
        <img className="max-w-full max-lg:max-w-[90%]" src={logo} alt="logo" />
      </div>
      <nav className="flex w-1/4 items-center justify-between max-xl:w-[30%] max-lg:w-[40%] max-lg:text-sm max-md:justify-between max-sm:hidden">
        <a className="nav-element" href="">
          About us
        </a>
        <a className="nav-element" href="">
          Our Product
        </a>
        <a className="nav-element" href="">
          Delivery
        </a>
      </nav>
      <div className="flex items-center gap-6 max-sm:w-[60%] max-sm:gap-3">
        <SearchBar />
        <div className="after:bg-primary relative h-fit w-fit after:absolute after:top-1 after:right-0 after:ml-1 after:h-2 after:w-2 after:rounded-full after:content-['']">
          <PiShoppingCartSimpleLight className="relative h-8 w-8 after:absolute after:ml-1 after:h-2 after:w-2 after:bg-red-500 after:content-['']" />
        </div>
        <div className="sm:hidden">
          <IoMdMore className="h-8 w-8 text-black opacity-80" />
        </div>
      </div>
    </header>
  );
};

export default Header;
