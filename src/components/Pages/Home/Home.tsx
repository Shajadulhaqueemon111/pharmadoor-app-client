import BannerPage from "../Banner/Banner";
import BannerCard from "../Banner/BannerCard";
import Footer from "../Footer/Footer";
import OtcMedicine from "../OtcMedicine/OtcMedicine";

const HomePage = () => {
  return (
    <div>
      <BannerPage />
      <BannerCard />
      <OtcMedicine />
      <Footer />
    </div>
  );
};

export default HomePage;
