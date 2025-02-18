import { CiShoppingBasket } from "react-icons/ci";
import logo from "../../../assets/hero/logo_coffe.svg";
import SearchBar from "./SearchBar";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
const Header = () => {
  return (
    <header className="flex w-full items-center justify-around">
      <div>
        <img className="w-max-full" src={logo} alt="logo" />
      </div>
      <nav className="flex w-1/5 items-center justify-between">
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
      <div className="flex items-center gap-6">
        <SearchBar />
        <div className="after:bg-primary relative h-fit w-fit after:absolute after:top-1 after:right-0 after:ml-1 after:h-2 after:w-2 after:rounded-full after:content-['']">
          <PiShoppingCartSimpleLight className="relative h-8 w-8 after:absolute after:ml-1 after:h-2 after:w-2 after:bg-red-500 after:content-['']" />
        </div>
      </div>
    </header>
  );
};

export default Header;
