import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import SliderPhoto from "../../assets/home-slider-1.svg";
import SliderLogo from "../../assets/slider-logo.svg";

import { Pagination } from "swiper/modules";

export default function Slider() {
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper md:h-screen!">
        <SwiperSlide className="w-full! relative h-dvh">
          <img src={SliderPhoto} alt="SliderPhoto" className="w-full! h-full object-cover" />

          <div className="absolute wrapper inset-0 flex items-center justify-center mx-auto md:mx-0 md:items-end md:justify-end w-full h-full">
            <div className="text-center md:max-w-[700px]! w-full md:text-left text-white flex items-center justify-center flex-col">
              <img src={SliderLogo} alt="SliderLogo" className="mx-auto md:max-w-[178px] max-w-[42px] w-full object-cover" />
              <div className="mx-auto! w-full">
                <h2 className="text-[35px] md:text-[80px] font-[Marko_One]">COFFEE HEAVEN</h2>
              </div>
              <div className="py-0 md:py-[20px] text-center text-[10px] md:text-base">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nulla quam reiciendis eaque exercitationem similique impedit repudiandae esse quae? Harum.</p>
              </div>
              <div className="md:py-[45px] py-[20px] flex items-center justify-center">
                <button className="md:py-[19px] md:px-[37px] md:text-base text-[10px] py-2 px-[18px] bg-transparent border border-[#FFF7F7] hover:border-black hover:text-black hover:bg-white text-white duration-300 cursor-pointer">Shop Now</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full! relative">
          <img src={SliderPhoto} alt="SliderPhoto" className="w-full! h-full object-cover" />

          <div className="absolute wrapper inset-0 flex items-center justify-center mx-auto md:mx-0 md:items-end md:justify-end w-full h-full">
            <div className="text-center md:max-w-[700px]! w-full md:text-left text-white flex items-center justify-center flex-col">
              <img src={SliderLogo} alt="SliderLogo" className="mx-auto md:max-w-[178px] max-w-[42px] w-full object-cover" />
              <div className="mx-auto! w-full">
                <h2 className="text-[35px] md:text-[80px] font-[Marko_One]">COFFEE HEAVEN</h2>
              </div>
              <div className="py-0 md:py-[20px] text-center text-[10px] md:text-base">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nulla quam reiciendis eaque exercitationem similique impedit repudiandae esse quae? Harum.</p>
              </div>
              <div className="md:py-[45px] py-[20px] flex items-center justify-center">
                <button className="md:py-[19px] md:px-[37px] md:text-base text-[10px] py-2 px-[18px] bg-transparent border border-[#FFF7F7] hover:border-black hover:text-black hover:bg-white text-white duration-300 cursor-pointer">Shop Now</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}