
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import LazyLoad from "react-lazyload"; // Import the react-lazyload library

import "slick-carousel/slick/slick-theme.css";
import CarUI from "../../../images/slider/UI Page 2-01-min.jpg";
import CarUI02 from "../../../images/slider/UI Page 200-01-min.jpg";
import CarUI03 from "../../../images/slider/UI Page 3-200-01-min.jpg";
import "./homecarousel.css";

const HomeCarousel = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2400,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="mySlider" style={{ overflowX: "hidden" }}>
      <Slider {...settings}>
        <div className="blurred-img">
          <LazyLoad height={200} offset={100} once>
            {/* Wrap the img with LazyLoad component */}
            <img src={CarUI} alt="Slide 1" loading="lazy" className="full-img"/>
          </LazyLoad>
        </div>

        <div className="blurred-img">
          <LazyLoad height={200} offset={100} once>
            {/* Wrap the img with LazyLoad component */}
            <img src={CarUI02} alt="Slide 2" loading="lazy" className="full-img" />
          </LazyLoad>
        </div>

        <div className="blurred-img">
          <LazyLoad height={200} offset={100} once>
            {/* Wrap the img with LazyLoad component */}
            <img src={CarUI03} alt="Slide 3" loading="lazy" className="full-img" />
          </LazyLoad>
        </div>
      </Slider>
    </div>
  );
};

export default HomeCarousel;
