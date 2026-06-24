import AboutSection from "../Components/Home/AboutSection/AboutSection";
import Coffeesection from "../Components/Home/CoffeeSection/coffeesection";
import CoffeeShopSection from "../Components/Home/CoffeeShopSection/coffeeShop-section";
import HeroSection from "../Components/Home/HeroSection";
import Catalog from "../Components/Home/ImageCatolog/Catalog";
import OffersSection from "../Components/Home/Offersection/OffersSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <OffersSection />
      <AboutSection />
      <Coffeesection />
      <CoffeeShopSection />
      <Catalog />
    </div>
  );
};

export default Home;
