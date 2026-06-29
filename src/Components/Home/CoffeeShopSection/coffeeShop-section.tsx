import backgroundAbout from "../../../assets/aboutBackground.svg";
import Ethiopia from "../../../assets/Ethiopia.svg";
import Kenya from "../../../assets/Kenya.svg";
import Columbia from "../../../assets/Columbia.svg";
import GreenLand from "../../../assets/GreenLand.svg";

export interface ProductsType {
  img: string;
  title: string;
  price: number;
}

export const ProductsData: ProductsType[] = [
  {
    img: Ethiopia,
    title: "Ethiopian coffee",
    price: 3000,
  },
  {
    img: Kenya,
    title: "Kenya coffee",
    price: 3900,
  },
  {
    img: Columbia,
    title: "columbia cofee",
    price: 4200,
  },
  {
    img: GreenLand,
    title: "greenland cofee",
    price: 4500,
  },
];

const CoffeeShopSection = () => {
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
        <div className="relative wrapper mx-auto!">
          <div className="md:pt-[79px] pt-[39px] pb-[90px] w-full">
            <div className="text-center! flex items-center flex-col justify-center uppercase mx-auto w-full">
              <h3 className='text-[25px] md:text-[50px] text-[#311008] font-["Marko_One"]'>
                online cofee shop
              </h3>
              <p className="text-[10px] md:text-[18px] font-['Inter'] text-black">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected
              </p>
            </div>
            <div className="pt-[79px] flex flex-col md:flex-row gap-5 justify-between mx-auto w-full!">
              {ProductsData.map((item: ProductsType, index: number) => (
                <div
                  key={index}
                  className="w-full cursor-pointer md:max-w-[300px] flex flex-col items-center justify-center cursor-pointer group p-4"
                >
                  <div className="overflow-hidden">
                    <img
                      src={item.img}
                      alt="technology image"
                      className="group-hover:scale-110 transition-all duration-600"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-2 md:gap-4 pt-3 md:pt-6 items-center justify-center">
                    <h4 className="uppercase text-[20px] md:text-[23px] text-[#311008] font-['Marko_One']">
                      {item.title}
                    </h4>
                    <p className="text-[18px] text-[#AA7B6F]! font-['Marko_One']">
                      LKR {item.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoffeeShopSection;
