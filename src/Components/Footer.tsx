import { FaFacebookSquare } from "react-icons/fa";
import footer from "../assets/footerBackground.svg";
import Logo from "../assets/Logo.svg";
import { FaInstagram, FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="mt-[54px]">
      <div
        style={{
          backgroundImage: `url(${footer})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="relative pb-[54px]"
      >
        <div className="wrapper mx-auto relative pt-[49px]!">
          <div className="flex items-start justify-end flex-col md:flex-row md:gap-20">
            <div className="w-full md:max-w-[570px]">
              <img
                src={Logo}
                alt="Logo"
                className="max-w-[180px] md:w-full mx-auto mb-5"
              />
              <p className="text-white text-[10px] md:text-base text-center  mx-auto uppercase font-['Inter']">
                t is a long established fact that a reader will be distracted by
                the readable content of a page when looking at its layout.
              </p>
              <div className="my-[79px] text-center mx-auto font-['Inter']">
                <h4 className="text-[25px] font-bold text-white uppercase">
                  working hours
                </h4>
                <div className="flex items-center gap-2 md:gap-8 justify-center">
                  <p className="text-[22px] uppercase font-semibold text-white text-center">
                    sunday - monday
                  </p>
                  <p className="text-[22px] uppercase font-semibold text-white text-center">
                    {" "}
                    8am - 10pm
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-start justify-between md:w-[30%] w-full">
              <ul className="font-['Marko_One'] uppercase text-white pt-[49px]">
                <li className="pb-7">address</li>
                <li className="cursor-pointer">11/1,enasalmada,</li>
                <li className="cursor-pointer">ovilikanda</li>
                <li className="cursor-pointer">matale</li>
              </ul>
              <ul className="font-['Marko_One'] uppercase text-white pt-[49px]">
                <li className="pb-7">phone number</li>
                <li className="cursor-pointer">+94 714319533</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#180E0B] w-full">
        <div className="text-white wrapper mx-auto py-[40px]! flex items-center md:flex-row flex-col gap-10 justify-between w-full">
          <span className="text-[12px] md:text-base font-['Inter]">
            &copy; 2025 All right reserved
          </span>
          <ul className="flex items-center md:flex-row flex-col gap-8 uppercase text-[12px] md:text-base">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Contact Us</li>
          </ul>
          <ul className="flex items-center gap-4">
            <li>
              <FaFacebookSquare size={20} className="cursor-pointer" />
            </li>
            <li>
              <FaInstagram size={20} className="cursor-pointer" />
            </li>
            <li>
              <FaTwitter size={20} className="cursor-pointer" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
