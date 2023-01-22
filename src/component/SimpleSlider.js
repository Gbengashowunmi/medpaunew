import React from "react";
import Slider from "react-slick";
import "./slick.css"; 
import "./slick-theme.css";
import ProductCard from "./productCard/ProductCard";
// import ProductCard from "./productCard/ProductCard";
export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2500,
    cssEase: "linear"
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
    </Slider>
  );
}