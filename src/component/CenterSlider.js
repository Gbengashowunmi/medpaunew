import React from "react";
import Slider from "react-slick";
import ProductCard from "./productCard/ProductCard";

export default function CenterSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
        responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
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
        <ProductCard image="/images/2-removebg-preview.png" />
      </div>
      <div className="item">
        <ProductCard image="/images/2-removebg-preview.png" />
      </div>
      <div className="item">
        <ProductCard image="/images/2-removebg-preview.png" />
      </div>
      <div className="item">
        <ProductCard image="/images/2-removebg-preview.png" />
      </div>
      <div className="item">
        <ProductCard image="/images/2-removebg-preview.png" />
      </div>
      <div className="item">
        <ProductCard image="/images/2-removebg-preview.png" />
      </div>
      <div className="item">
        <ProductCard image="/images/2-removebg-preview.png" />
      </div>
      <div className="item">
        <ProductCard image="/images/2-removebg-preview.png" />
      </div>
      <div className="item">
        <ProductCard image="/images/2-removebg-preview.png" />
      </div>
      <div className="item">
        <ProductCard image="/images/2-removebg-preview.png" />
      </div>
      <div className="item">
        <ProductCard image="/images/2-removebg-preview.png" />
      </div>
     
    </Slider>
  );
}
