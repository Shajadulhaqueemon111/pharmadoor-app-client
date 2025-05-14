import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Style.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import logo1 from "../../../assets/Image.png";
const BannerPage = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={logo1} alt="logo" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={logo1} alt="logo" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default BannerPage;
