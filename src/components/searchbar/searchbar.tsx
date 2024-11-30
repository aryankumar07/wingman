import { CiSearch } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { setSearchTerm } from "../../store/product-slice";




const SearchBar = () => {

  const dispatch = useDispatch();

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchTerm(event.target.value));
  };



  return <div className="flex items-center p-1 md:w-44 h-8">
    <CiSearch/>
    <input 
      type="text"
      onChange={handleSearch}
      className="w-full font-semibold"
      placeholder="  Search"/>
  </div>;
};

export default SearchBar;
