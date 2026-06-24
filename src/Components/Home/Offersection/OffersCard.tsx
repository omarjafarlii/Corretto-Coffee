interface coffeeItem {
  img: string;
  title: string;
  description: string;
}

interface coffeeItemProps {
  item: coffeeItem;
}

const OffersCard = ({ item }: coffeeItemProps) => {
  return (
    <div className="text-[#311008] flex flex-col items-center justify-center mx-auto mt-9">
      <img src={item.img} alt="Coffee" className="object-cover pb-[9px]" />
      <h4 className="text-[20px] md:text-[25px] uppercase font-[Marko_One]">
        {item.title}
      </h4>
      <div className="w-[200px]">
        <p className="text-[12px] uppercase text-center font-[Inter]">
          {item.description}
        </p>
      </div>
    </div>
  );
};

export default OffersCard;
