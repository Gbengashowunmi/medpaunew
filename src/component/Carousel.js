import React from "react";
import Slider from "react-slick";

export default function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4500,
    cssEase: "linear",
  };
  return (
    <Slider {...settings}>
      <div className="carousel-item">
        <img
          className="d-block w-100"
          src="/images/hero_home_01.jpg"
          alt="First slide"
        />
        <div className="details">
          <p>
            Discounted medical equipment can save cost, but ensure it's still
            reliable and meets safety standards before purchase.
          </p>
          <h1> Discounted Price of Medical Equipments</h1>
          <button>Read More</button>
        </div>
      </div>
      <div className="carousel-item">
        <img
          className="d-block w-100"
          src="/images/her-bg-slider.jpg"
          alt="Second slide"
        />
        <div className="details">
          <p>
            Essential for accurate diagnosis and treatment, medical equipment
            should be high-quality, reliable and regularly maintained.
          </p>
          <h1> Reliable Quality Of Equipments</h1>
          <button>Read More</button>
        </div>
      </div>
      <div className="carousel-item">
        <img
          className="d-block w-100"
          src="/images/hero_home_01.jpg"
          alt="Second slide"
        />
        <div className="details">
          <p>
          Medical equipment engineers design, develop, and maintain
                  medical equipment to ensure safety and effectiveness.
          </p>
          <h1>    Our expertise at your Service</h1>
          <button>Read More</button>
        </div>
      </div>

    </Slider>
  );
}
