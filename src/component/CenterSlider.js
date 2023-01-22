import React from "react";
import Slider from "react-slick";
import ProductCard from "./productCard/ProductCard";

export default function CenterSlider() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
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
