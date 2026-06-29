import coffebg from "../../../assets/coffeeBackgroundIMG.svg";
import SliderLogo from "../../../assets/slider-logo.svg";

export interface StatItem {
  id: number;
  count: string;
  title: string;
  description: string;
}

export const statsData: StatItem[] = [
  {
    id: 1,
    count: "250",
    title: "varieties of cofee",
    description: "Contrary to popular belief, Lorem Ipsum",
  },
  {
    id: 2,
    count: "150",
    title: "hours of testing",
    description: "Contrary to popular belief, Lorem Ipsum",
  },
  {
    id: 3,
    count: "350",
    title: "varieties of cofee",
    description: "Contrary to popular belief, Lorem Ipsum",
  },
  {
    id: 4,
    count: "400",
    title: "cofeee lovers",
    description: "Contrary to popular belief, Lorem Ipsum",
  },
];

const Coffeesection = () => {
  return (
    <div>
      <div className="relative mt-[71px]">
        <img
          src={coffebg}
          alt="coffeebg"
          className="w-full h-screen object-cover"
        />

        <div className="absolute inset-0 flex items-start justify-center mt-[58px]">
          <img
            src={SliderLogo}
            alt="SliderLogo"
            className="md:max-w-[178px] max-w-[42px] w-full object-cover"
          />
        </div>
      </div>
      <div className="my-[79px] md:my-[145px] wrapper mx-auto md:flex items-center justify-between flex-row">
        {statsData.map((item: StatItem, index) => (
          <div
            key={index}
            className="md:max-w-[300px] w-full flex items-center flex-col justify-center text-center my-10 md:my-0"
          >
            <span className='text-[35px] text-[#945F51] font-["Marko_One"]'>
              {item.count}
            </span>
            <p className='uppercase text-[20px] font-["Marko_One"]'>
              {item.title}
            </p>
            <p className='font-["Inter"] text-sm'>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Coffeesection;
