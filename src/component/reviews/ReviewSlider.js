import React from "react";
import Slider from "react-slick";
import Reviews from "./Reviews";

export default function ReviewSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
        responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <Slider {...settings}>
      <div className="item">
        <Reviews />
      </div>
      <div className="item">
        <Reviews />
      </div>
      <div className="item">
        <Reviews />
      </div>
      <div className="item">
        <Reviews />
      </div>
      <div className="item">
        <Reviews />
      </div>
     
    </Slider>
  );
}
