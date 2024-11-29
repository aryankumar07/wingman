import LogoIcon from "../logo/logo";
import { RxHamburgerMenu } from "react-icons/rx";
import { assets } from "../../assets/assets";
import { NavLink } from "react-router-dom";
import SearchBar from "../searchbar/searchbar";
import { useState } from "react";
import Sidebar from "../sidebar/sidebar";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

const NavBar = () => {

  const [openSidebar, setopenSidebar] = useState<boolean>(false)

  return (
    <div className="flex items-center gap-2 justify-between font-medium">
      <NavLink to={"/"}>
        <LogoIcon asset={assets.logo} />
      </NavLink>
      <div className="flex items-center justify-center gap-3">
        <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
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
        <div className="mr-24 sm:mr-0">
          <SearchBar />
        </div>
      </div>
      <div className="sm:hidden flex flex-col items-center gap-2 my-4 mr-6">
        {openSidebar ? (
          <div className="flex flex-col">
            <Sidebar onClose={() => setopenSidebar((prev) => !prev)} />
          </div>
        ) : (
          <RxHamburgerMenu onClick={() => setopenSidebar((prev) => !prev)} />
        )}
      </div>
      <div className="hidden sm:block mr-6">
        <SignedOut>
          <div className="border border-black rounded-md p-1">
            <SignInButton />
          </div>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};

export default NavBar;
