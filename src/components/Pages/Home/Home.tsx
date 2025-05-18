import BannerPage from "../Banner/Banner";
import BannerCard from "../Banner/BannerCard";
import DiscountPopup from "../DiscountPopup/DiscountPoPUp";

import OtcMedicine from "../OtcMedicine/OtcMedicine";

const HomePage = () => {
  return (
    <div>
      <DiscountPopup />
      <BannerPage />
      <BannerCard />
      <OtcMedicine />
    </div>
  );
};

export default HomePage;
