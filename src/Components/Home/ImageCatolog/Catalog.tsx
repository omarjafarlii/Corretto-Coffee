import img1 from "../../../assets/img-end-1 2.svg";
import img2 from "../../../assets/img-end-1 3.svg";
import img3 from "../../../assets/img-end-1 4.svg";
import img4 from "../../../assets/img-end-1 5.svg";
import img5 from "../../../assets/img-end-1 6.svg";
import img6 from "../../../assets/img-end-1 7.svg";
import img7 from "../../../assets/img-end-1 8.svg";
import img8 from "../../../assets/img-end-1 1.svg";

import logo1 from "../../../assets/logo-sec-1 1.svg";
import logo2 from "../../../assets/logo-sec-2 1.svg";
import logo3 from "../../../assets/logo-sec-3 1.svg";
import logo4 from "../../../assets/logo-sec-4 1.svg";
import logo5 from "../../../assets/logo-sec-5 1.svg";

const img = [img1, img2, img3, img4, img5, img6, img7, img8];
const companyLogos = [logo1, logo2, logo3, logo4, logo5];

const Catalog = () => {
  return (
    <div className="wrapper mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-10 my-[79px]">
        {img.map((item, index) => (
          <div className="group cursor-pointer">
            <img
              src={item}
              key={index}
              alt="Img"
              className={`${index >= 2 ? "hidden md:block" : "block"} hover:scale-110 transition-all duration-600`}
            />
          </div>
        ))}
      </div>
      <div className="md:mt-[86px] md:mb-[54px] grid grid-cols-1 md:grid-cols-5 gap-5 items-center mx-auto w-full">
        {companyLogos.map((logo, index) => (
          <img src={logo} key={index} alt="Img" className="mx-auto" />
        ))}
      </div>
    </div>
  );
};

export default Catalog;
