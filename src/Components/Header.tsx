import Logo from "../assets/Logo.svg";
import LogoMobile from "../assets/Logo-Mobile.svg";
import { FaBarsStaggered, FaCartShopping } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <div className="md:relative wrapper mx-auto w-full font-[Inter]">
      <div className="md:absolute top-0 left-0 text-white right-0 w-full z-50">
        <div className="flex items-center justify-between py-[24px] w-full">
          <div className="md:hidden text-black z-10">
            <FaBarsStaggered />
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 md:hidden">
            <img src={LogoMobile} alt="Logo" className="max-w-[180px] w-full" />
          </div>
          <div>
            <img
              src={Logo}
              alt="Logo"
              className="w-full cursor-pointer md:block hidden md:max-w-[150px]"
            />
          </div>
          <ul className="uppercase items-center gap-8 md:flex hidden">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">about us</li>
            <li className="cursor-pointer">services</li>
            <li className="cursor-pointer">blog</li>
            <li className="cursor-pointer">shop</li>
            <li className="cursor-pointer">contact us</li>
            <li className="cursor-pointer">
              <FaCartShopping />
            </li>
            <li className="cursor-pointer">
              <FaSearch />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
