import HeroBanner from "@/components/home/HeroBanner";
import SearchSection from "@/components/home/SearchSection";
import ServiceCategories from "@/components/home/ServiceCategories";
import FeaturedServices from "@/components/home/FeaturedServices";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import FeaturedRealEstateVehicles from "@/components/home/FeaturedRealEstateVehicles";
import PublicServices from "@/components/home/PublicServices";
import LeisureEntertainment from "@/components/home/LeisureEntertainment";
import AIHub from "@/components/home/AIHub";
import EmergencyContacts from "@/components/home/EmergencyContacts";

const Home = () => {
  return (
    <main>
      <HeroBanner />
      <SearchSection />
      <ServiceCategories />
      <FeaturedServices />
      <FeaturedProducts />
      <FeaturedRealEstateVehicles />
      <PublicServices />
      <LeisureEntertainment />
      <AIHub />
      <EmergencyContacts />
    </main>
  );
};

export default Home;
