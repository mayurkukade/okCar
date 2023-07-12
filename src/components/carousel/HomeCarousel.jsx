
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import carslider from "../../../images/slider/cs1.png"
// import carslider2 from "../../../images/slider/cs2.png"
import carslider3 from "../../../images/slider/cs3.png"
import carslider4 from "../../../images/slider/cs4.png"
import './homecarousel.css'
const HomeCarousel = () => {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper" style={{ width: '100%', height: '400px', margin: '0 auto' }} // Adjust the width and height values as per your requirement
>
        <SwiperSlide>
    
            <img src={carslider}  style={{ width: '100%', height: '150%' }}/>
             </SwiperSlide>
        {/* <SwiperSlide>
        <img src={carslider2} style={{ width: '100%', height: '150%' }}/>  
        </SwiperSlide> */}
        <SwiperSlide>
        <img src={carslider3}  style={{ width: '100%', height: '150%' }} />
        </SwiperSlide>
        <SwiperSlide>
        <img src={carslider4} style={{ width: '100%', height: '150%' }}/>
        </SwiperSlide>
        {/* <SwiperSlide> <img src={carslider} /></SwiperSlide>
        <SwiperSlide> <img src={carslider2} /></SwiperSlide>
        <SwiperSlide> <img src={carslider3}/></SwiperSlide>
        <SwiperSlide> <img src={carslider4} /></SwiperSlide>
        <SwiperSlide> <img src={carslider} /></SwiperSlide> */}
      </Swiper>
    </>
      
    
  )
}

export default HomeCarousel

