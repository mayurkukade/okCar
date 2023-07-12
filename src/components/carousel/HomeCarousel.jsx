
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

import './homecarousel.css'
const HomeCarousel = () => {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
            <img src="C:\CP\okCar\images\slider\car slider 1.png" />
        </SwiperSlide>
        <SwiperSlide>
        <img src="../../images/cars/01.jpg" />  
        </SwiperSlide>
        <SwiperSlide>
        <img src="../../images/cars/01.jpg" />
        </SwiperSlide>
        <SwiperSlide>
        <img src="../../images/cars/01.jpg" />
        </SwiperSlide>
        <SwiperSlide> <img src="../../images/cars/01.jpg" /></SwiperSlide>
        <SwiperSlide> <img src="../../images/cars/01.jpg" /></SwiperSlide>
        <SwiperSlide> <img src="../../images/cars/01.jpg" /></SwiperSlide>
        <SwiperSlide> <img src="../../images/cars/01.jpg" /></SwiperSlide>
        <SwiperSlide> <img src="../../images/cars/01.jpg" /></SwiperSlide>
      </Swiper>
    </>
      
    
  )
}

export default HomeCarousel

