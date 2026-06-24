import coffee from "../../../assets/coffee.svg";
import coffee2 from "../../../assets/coffee-2.svg";
import pastry from "../../../assets/pastry.svg";
import beans from "../../../assets/beans.svg";
import OffersCard from "./OffersCard";
const OffersSection = () => {
  const offerCards = [
    {
      img: coffee,
      title: "types of cofee",
      description: "t is a long established fact that a reader will",
    },
    {
      img: pastry,
      title: "coffee and pastry",
      description: "t is a long established fact that a reader will",
    },
    {
      img: beans,
      title: "beans varieties",
      description: "t is a long established fact that a reader will",
    },
    {
      img: coffee2,
      title: "types of cofee",
      description: "t is a long established fact that a reader will",
    },
  ];

  return (
    <div className="md:pt-[79px] pt-[39px] md:pb-[182px] pb-[90px] font-[Marko_One] wrapper mx-auto">
      <div className="text-[#311008] text-center">
        <h2 className="uppercase text-[25px] md:text-[50px]">
          our delicious offers
        </h2>
        <p className="text-[12px] md:text-[18px] font-[Inter] py-5">
          t is a long established fact that a reader will be distracted by the
          readable content of a page <br /> when looking at its layout. The
          point of
        </p>
      </div>
      <div className="grid md:grid-cols-4 grid-cols-1 items-center w-full! my-5">
        {offerCards.map((item, index) => (
          <OffersCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default OffersSection;
