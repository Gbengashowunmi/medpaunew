import React from "react";
import HeadFoot from "../component/HeadFoot";
import ProductCard from "../component/productCard/ProductCard";
import "./landing.scss";
export default function LandingPage() {
  return (
    <HeadFoot>
      <main>
        <div className="hero-image">
          <img src="/images/hero_home_01.jpg" alt="hero-img" />
        </div>
        <div className="hero-text">
          <h1> Our expertise at your Service</h1>
        </div>

        <div className="hero-cards">
          <div className="hero-card">
            <h3>What we sell</h3>
            <button>Check it out</button>
          </div>
          <div className="hero-card">
            <h3>Need an Appointment?</h3>
            <button>Book Now</button>
          </div>
          <div className="hero-card">
            <h3>Have a complain?</h3>
            <button>Contact our Engineers</button>
          </div>
        </div>
      </main>
      <section className="schedule-section">
        <div className="work-hour schedule">
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
        <div className="work-hour our-process">
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
        <div className="work-hour our-process">
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

      <aside className="featured-post">
        <div className="head">
          <h6>FEATURE</h6>
          <h2>Featured Products </h2>
          <button> SEE MORE</button>
        </div>
        <div className="products-container">
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
    </HeadFoot>
  );
}
