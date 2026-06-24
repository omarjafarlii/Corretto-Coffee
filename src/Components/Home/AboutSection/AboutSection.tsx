import backgroundAbout from "../../../assets/aboutBackground.svg";
import technologyImg from "../../../assets/newTechnology.svg";
import staffImg from "../../../assets/staff.svg";
import freshImg from "../../../assets/freshcoffee.svg";
import { FaCaretRight } from "react-icons/fa6";
import AboutCard from "./AboutCard";

export interface AboutItem {
  img: string;
  title: string;
  description: string;
}

export const AboutData: AboutItem[] = [
  {
    img: technologyImg,
    title: "new technology",
    description:
      "There Are Many Variations Of Passages Of Lorem Ipsum Available, But The Majority Have",
  },
  {
    img: staffImg,
    title: "friendly staff",
    description:
      "THERE ARE MANY VARIATIONS OF PASSAGES OF LOREM IPSUM AVAILABLE, BUT THE MAJORITY HAVE",
  },
  {
    img: freshImg,
    title: "fresh cofee",
    description:
      "THERE ARE MANY VARIATIONS OF PASSAGES OF LOREM IPSUM AVAILABLE, BUT THE MAJORITY HAVE",
  },
];

const AboutSection = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${backgroundAbout})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="relative h-full"
      >
        {/* <img
          src={backgroundAbout}
          alt="BackgroundImage"
          className="w-full h-full absolute inset-0"
        /> */}
        <div className="relative wrapper mx-auto!">
          <div className="md:pt-[79px] pt-[39px] pb-[90px] w-full">
            <div className="text-center! flex items-center flex-col justify-center uppercase mx-auto w-full">
              <h3 className='text-[25px] md:text-[50px] text-[#311008] font-["Marko_One"]'>
                the cofee herald
              </h3>
              <p className="text-[10px] md:text-[18px] font-['Inter'] text-black">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has
              </p>
            </div>
            <div className="pt-[79px] flex flex-col md:flex-row gap-5 justify-between mx-auto w-full!">
              {AboutData.map((item: AboutItem, index: number) => (
                <AboutCard item={item} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
