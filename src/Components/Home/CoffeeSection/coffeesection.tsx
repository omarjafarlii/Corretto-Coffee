import coffebg from "../../../assets/coffeeBackgroundIMG.svg";

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
      <img src={coffebg} alt="coffeebg" className="w-full mt-[71px]" />
      <div className="my-[79px] md:my-[145px] wrapper mx-auto md:flex items-center justify-between flex-row">
        {statsData.map((item: StatItem, index) => (
          <div key={index} className="md:max-w-[300px] w-full flex items-center flex-col justify-center text-center my-10 md:my-0">
            <span className='text-[35px] text-[#945F51] font-["Marko_One"]'>
              {item.count}
            </span>
            <p className='uppercase text-[20px] font-["Marko_One"]'>
              {item.title}
            </p>
            <p className='font-["Inter"] text-sm'>
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Coffeesection;
