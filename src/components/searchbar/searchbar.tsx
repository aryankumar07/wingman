import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  return <div className="flex items-center p-1 md:w-44 h-8">
    <CiSearch/>
    <input type="text" className="w-full font-semibold" placeholder="  Search"/>
  </div>;
};

export default SearchBar;
