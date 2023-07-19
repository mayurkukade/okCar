import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";
import CarUI from "../../../images/slider/carui.png";
import CarUI02 from "../../../images/slider/carui02.png";
import CarUI03 from "../../../images/slider/carui03.png";

import "./homecarousel.css";
const HomeCarousel = () => {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
        style={{ width: "100%", height: "650px", margin: "0 auto" }}
        autoplay={{
          delay: 2400, // Adjust the delay value (in milliseconds) as per your requirement
          disableOnInteraction: false, // Allow user interaction to pause autoplay
        }}
      >
        <SwiperSlide>
          <img src={CarUI} style={{ width: "100%", height: "100%" }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={CarUI02} style={{ width: "100%", height: "100%" }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={CarUI03} style={{ width: "100%", height: "100%" }} />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HomeCarousel;
