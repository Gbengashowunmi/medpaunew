import React from "react";
import { Link } from "react-router-dom";
import HeadFoot from "../component/HeadFoot";
import ProductCard from "../component/productCard/ProductCard";
import Reviews from "../component/reviews/Reviews";
import "./landing.scss";
export default function LandingPage() {
  return (
    <HeadFoot>
      <main>
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="d-block w-100"
                src="/images/hero_home_01.jpg"
                alt="First slide"
              />
              <div className="details">
                <p>
                  Medical equipment engineers design, develop, and maintain
                  medical equipment to ensure safety and effectiveness.
                </p>
                <h1
                  data-aos="zoom-in-right"
                  data-aos-offset="50"
                  data-aos-delay="10"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  data-aos-mirror="true"
                  data-aos-once="false"
                >
                  {" "}
                  Our expertise at your Service
                </h1>
                <button
                  data-aos="zoom-in-up"
                  data-aos-offset="50"
                  data-aos-delay="10"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  data-aos-mirror="true"
                  data-aos-once="false"
                >Read More</button>
              </div>
              <div className="overlay"></div>
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src="/images/her-bg-slider.jpg"
                alt="Second slide"
              />
              <div className="details">
                <p>
                  Discounted medical equipment can save cost, but ensure it's
                  still reliable and meets safety standards before purchase.
                </p>
                <h1> Discounted Price of Medical Equipments</h1>
                <button>Read More</button>
              </div>
              <div className="overlay"></div>
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src="/images/medical-image-bg.jpg"
                alt="Third slide"
              />
              <div className="details">
                <p>
                  Essential for accurate diagnosis and treatment, medical
                  equipment should be high-quality, reliable and regularly
                  maintained.
                </p>
                <h1> Reliable Quality Of Equipments</h1>
                <button>Read More</button>
              </div>
              <div className="overlay"></div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>

        {/* <div className="hero-image">
          <img src="/images/hero_home_01.jpg" alt="hero-img" />
        </div> */}
        {/* <div className="hero-text">
          <h1> Our expertise at your Service</h1>
        </div> */}
      </main>
      <div className="hero-card-wrapper">
        <img src="/images/background_image_02.jpg" alt="card" />
        <div className="hero-cards">
          <div
            className="hero-card"
            data-aos="zoom-in-right"
            data-aos-offset="50"
            data-aos-delay="10"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <h3>What we sell</h3>
            <Link to="/shop"> <button>Check it out</button></Link>
          </div>
          <div
            className="hero-card"
            data-aos="zoom-in-right"
            data-aos-offset="50"
            data-aos-delay="10"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <h3>Need an Appointment?</h3>
            <button>Book Now</button>
          </div>
          <div
            className="hero-card"
            data-aos="zoom-in-right"
            data-aos-offset="50"
            data-aos-delay="10"
            data-aos-duration="1400"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <h3>Have a complain?</h3>
            <button>Contact our Engineers</button>
          </div>
        </div>
      </div>
      <section className="schedule-section">
        <div
          className="work-hour schedule"
          data-aos="zoom-in"
          data-aos-offset="20"
          data-aos-delay="10"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          <h3>Working Hours</h3>
          <hr />
          <h6>
            Mon - Wed <span>8AM - 7PM</span>
          </h6>
          <hr />
          <h6>
            Thursday
            <span>8AM - 7PM</span>
          </h6>
          <hr />
          <h6>
            Friday <span>8AM - 7PM</span>
          </h6>
          <hr />
          <h6>
            Sat - Sunday
            <span>CLOSED</span>
          </h6>
          <hr />
          <h6>Time's not Flexible?</h6>
          <p>
            We provide high quality, integrated healthcare services, based on a
            patient - centered
          </p>
          <button>BOOK AN APPOINTMENT</button>
        </div>
        <div
          className="work-hour our-process"
          data-aos="zoom-in"
          data-aos-offset="20"
          data-aos-delay="10"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          <div className="img">
            <img src="/images/card_image_01.jpg" alt="aside" />
          </div>
          <div className="text">
            <h1>What we Offer</h1>
            <p>
              Our qualified Service Engineers offer predictable maintenance and
              after sales support services
            </p>
            <button className="read-more">READ MORE</button>
          </div>
        </div>
        <div
          className="work-hour our-process"
          data-aos="zoom-in"
          data-aos-offset="20"
          data-aos-delay="10"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          <div className="img">
            <img src="/images/card_image_02.jpg" alt="aside" />
          </div>
          <div className="text">
            <h1>Our Process</h1>
            <p>
              Our qualified Service Engineers offer predictable maintenance and
              after sales support services
            </p>
            <button className="read-more">READ MORE</button>
          </div>
        </div>
      </section>

      <sectio className="our-vision"></sectio>

      <section className="reviews">
        <h6 className="light-blue-bg-text head">OUR CLIENTS</h6>
        <h3>Our Satisfied Clients' Reviews</h3>
        <div className="reviews-wrapper">
          <div>
            <Reviews />
          </div>
          <div>
            <Reviews />
          </div>
          <div>
            <Reviews />
          </div>
          <div>
            <Reviews />
          </div>
          <div>
            <Reviews />
          </div>
          <div>
            <Reviews />
          </div>
        </div>
      </section>
      <aside className="featured-post">
        <div className="head">
          <h6>FEATURE</h6>
          <h2>Featured Products </h2>
          <Link to="/shop">
            {" "}
            <button> SEE MORE</button>
          </Link>
        </div>
        <div
          className="products-container"
          data-aos="fade-up"
          data-aos-offset="20"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="true"
        >
          <div>
            <ProductCard image="/images/drager--300x300.png" />
          </div>
          <div>
            <ProductCard image="/images/csm_BAS011_4008S_07f521bc0b-300x300.jpg" />
          </div>
          <div>
            <ProductCard image="/images/dialysiscouch-300x300.jpg" />
          </div>
          <div>
            <ProductCard image="/images/drager--300x300.png" />
          </div>
        </div>
      </aside>

      <aside className="new-arrivals">
        <div className="head">
          <h6>FEATURE</h6>
          <h2>New Arrivals</h2>
        </div>
        <div
          className="products-container"
          data-aos="fade-up"
          data-aos-offset="20"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="true"
        >
          <div>
            <ProductCard image="/images/2-removebg-preview.png" />
          </div>
          <div>
            <ProductCard image="/images/9__1_-removebg-preview.png" />
          </div>
          <div>
            <ProductCard image="/images/2-removebg-preview.png" />
          </div>
          <div>
            <ProductCard image="/images/9__1_-removebg-preview.png" />
          </div>
        </div>
      </aside>
    </HeadFoot>
  );
}
