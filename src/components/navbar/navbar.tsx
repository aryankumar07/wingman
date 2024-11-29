import LogoIcon from "../logo/logo";
import { assets } from "../../assets/assets";
import { NavLink } from "react-router-dom";
import SearchBar from "../searchbar/searchbar";

const NavBar = () => {
  return (
    <div className="flex items-center gap-2 justify-between font-medium">
      <NavLink to={'/'}>
        <LogoIcon asset={assets.logo} />
      </NavLink>
      <div className="flex items-center justify-center gap-3">
        <ul className="hidden md:flex gap-5 text-sm text-gray-700">
          <li>
            <NavLink
              to="/"
              className="hover:border-b-2 hover:border-black transition duration-300"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cart"
              className="hover:border-b-2 hover:border-black transition duration-300"
            >
              Cart
            </NavLink>
          </li>
        </ul>
        <SearchBar />
      </div>
      <div>user logo</div>
    </div>
  );
};

export default NavBar;
