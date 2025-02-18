import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  return (
    <div className="flex h-full items-center rounded-2xl bg-white p-2 shadow-md">
      <CiSearch className="cursor-pointer" />
      <input
        className="text-placeholder h-full grow pl-3 outline-none max-lg:hidden max-md:hidden max-sm:block max-sm:w-1/2"
        type="text"
      />
    </div>
  );
};

export default SearchBar;
