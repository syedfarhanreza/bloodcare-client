import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Banner1 from '../../../assets/Banner/banner1.png';
import Banner2 from '../../../assets/Banner/banner2.png';
import Banner3 from '../../../assets/Banner/banner3.jpg';
import Banner4 from '../../../assets/Banner/banner4.jpg';

const BannerSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000, // Adjust the speed as needed
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Set the autoplay speed to 3000 milliseconds (3 seconds)
  };

  return (
    <Slider {...settings}>
      {[Banner1, Banner2, Banner3, Banner4].map((banner, index) => (
        <div key={index}>
          <img src={banner} className="w-full h-1/2 mb-3" alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </Slider>
  );
};

export default BannerSlider;
