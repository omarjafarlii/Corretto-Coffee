import { FaCaretRight } from "react-icons/fa6";
import type { AboutItem } from "./AboutSection";

interface itemProps {
  item: AboutItem;
}

const AboutCard = ({ item }: itemProps) => {
  return (
    <div className="cursor-pointer group hover:border border-[#0000003A] rounded-2xl p-4">
      <div className="w-full md:max-w-[300px] flex flex-col items-center justify-center">
        <div className="overflow-hidden">
          <img
            src={item.img}
            alt="technology image"
            className="group-hover:scale-110 transition-all duration-600"
          />
        </div>
        <div className="flex flex-col md:items-start gap-2 md:gap-4 pt-3 md:pt-6 items-center justify-center">
          <h4 className="uppercase text-[20px] md:text-[23px] text-[#311008] font-['Marko_One']">
            {item.title}
          </h4>
          <p className="text-[10px] md:text-base">{item.description}</p>
          <button className="flex items-center gap-x-2 cursor-pointer">
            <span className="font-['Marko_One']">Read More</span>
            <FaCaretRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
