import React from "react";
import { FaChevronRight, FaPhone } from "react-icons/fa";
import { MdOutlineHome } from "react-icons/md";
import HeadFoot from "../component/HeadFoot";
import OurServices from "../component/ourServices/OurServices";
import Reviews from "../component/reviews/Reviews";
import "./about.scss";

export default function About() {
  return (
    <HeadFoot>
      <div className="about-head">
        <div className="image">
          <div className="overlay"></div>
          <img src="/images/breadcrumb-image-1.jpg" alt="about-us" />
          <div className="texts">
            <h2>About Us</h2>
            <p>
              <MdOutlineHome />
              <span>HOME</span> <FaChevronRight />
              <span className="active">ABOUT US</span>
            </p>
          </div>
        </div>
      </div>
      <aside className="what-about-us">
        <div className="img">
          <img src="/images/MD-PIX-2.jpeg" alt="about-us" />
        </div>
        <div className="details">
          <h4 className="light-blue-bg-text">WHAT ABOUT US</h4>
          <h2>Medpau International Limited</h2>
          <p>
            MedPau is a fast-growing company, ahead of the curve in the
            distribution of medical equipment, consumables, disposables,
            furniture and apparel. We believe smart innovations in healthcare is
            key for the advancement of a healthy society, which translates to
            better economy and quality of life. This drives us to constantly
            evolve in the way we provide healthcare solutions and services in
            Nigeria and Africa at large. Our goal is to bridge the access to
            quality, affordable healthcare solutions and services. This is why
            we distribute cost-effective state-of-the-art medical equipment and
            instrumentation, offer Turnkey project management and
            Maintenance/technical services. This way, we fulfill our promise of
            improving the quality of life. At MedPau, we grow with our clients,
            working with them every step of the way. We deliver excellent
            customer experience through our unmatched after-sales support and
            24/7 online support. Our partnership with global brands and
            world-leading medical equipment manufacturers to meet our
            obligations is indeed one way in which our lasting impact in this
            forever revolutionary course has been measured{" "}
            <button>Read More</button>
          </p>

          <ul 
                      data-aos="zoom-in-right"
                      data-aos-offset="50"
                      data-aos-delay="10"
                      data-aos-duration="1000"
                      data-aos-easing="ease-in-out"
                      data-aos-mirror="true"
                      data-aos-once="false"
          >
            <li>Happy with Staff</li>
            <li>Quality of Care Services</li>
            <li>Intervention Success</li>
            <li>Client Satisfaction</li>
            <li>Patient Experience</li>
          </ul>
          <p className="blue-text">Do you have any question?</p>
          <h4>
            <FaPhone /> <span>+234805 6666700 </span>
          </h4>
        </div>
      </aside>
      <section className="services">
        <h3 className="light-blue-bg-text head">OUR SERVICES</h3>
        <h2>Explore Our Main Service</h2>
        <div className="services-wrapper">
          <OurServices
            head="Project Management
"
            decsription="From consultancy to renovations and procurement, we are your number one partners."

          />
          <OurServices
            head="Medical Equipment"
            decsription="We distribute state-of-the-art medical equipment in Nigeria and West Africa."
          />
          <OurServices
            head="Maintenance & Support"
            decsription="Our qualified Service Engineers offer predictable maintenance and after sales support services"
          />
        </div>
      </section>

      <section className="choose-us">
        
      </section>
      <section className="reviews">
        <h3 className="light-blue-bg-text head">OUR CLIENTS</h3>
        <h2>
          Our Client Happy Say About Us
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
        </h2>
      </section>
      <section className="our-process"></section>
    </HeadFoot>
  );
}
