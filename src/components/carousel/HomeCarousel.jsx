import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";
// import { Autoplay } from "swiper";
// import { Navigation } from "swiper";
// import { Autoplay } from "swiper";
import carslider from "../../../images/slider/cs1.png";
// import carslider2 from "../../../images/slider/cs2.png"
// import carslider3 from "../../../images/slider/cs3.png";
// import carslider4 from "../../../images/slider/cs4.png";
import CarUI01 from "../../../images/slider/UI01.png"
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
          <img src={CarUI01} style={{ width: "100%", height: "100%" }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={CarUI02} style={{ width: "100%", height: "100%" }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={CarUI03} style={{ width: "100%", height: "100%" }} />
        </SwiperSlide>
      </Swiper>

      <style jsx>
        {`
          @media (max-width: 768px) {
            .mySwiper {
              height: 400px !important;
            }
          }
        `}
      </style>
    </>
  );
};

export default HomeCarousel;
