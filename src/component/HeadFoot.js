import React, { useEffect } from "react";
import "../component/headFoot.scss";
import { HiMenuAlt3 } from "react-icons/hi";


import {
  FaChevronRight,
  FaFacebookF,
  FaGooglePlusG,
  FaLinkedinIn,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import { MdEmail, MdLocationPin } from "react-icons/md";
import { NavLink } from "react-router-dom";

export default function HeadFoot({ children }) {
  // Sticky Menu Area
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  /* Method that will fix header after a specific scrollable */
  const isSticky = (e) => {
    const header = document.querySelector(".nav");
    const scrollTop = window.scrollY;
    scrollTop >= 40
      ? header.classList.add("is-sticky") : header.classList.remove("is-sticky");
  };

  return (
    <div className="head-foot-wrapper">
      <header className="nav">
        <div className="comapany-icon">
          <h2>MEDPAU</h2>
        <div ><HiMenuAlt3 className="nav-bar"/></div>

        </div>
        <ul>
        <NavLink to="/"><li>Home</li></NavLink>
          <NavLink to="/about"><li>About</li></NavLink>
          <li>Service</li>
          <li>Shop</li>
          <li>Blg</li>
          <li>MGTP</li>
          {/* <Button variant="contained">Contained</Button> */}
          <button className="appointment-btn">APPOINTMENTS +</button>

        </ul>
      </header>
      {children}
      <footer>
        <div className="about">
          <h3>MEDPAU</h3>
          <p>
            At MedPau, we believe smart innovations in healthcare is key to
            advancement of a society which translates to better economy and
            quality of life. Professionalism.
          </p>
          <ul>
            <li>
              <FaFacebookF />
            </li>
            <li>
              <FaGooglePlusG />
            </li>
            <li>
              <FaLinkedinIn />
            </li>
            <li>
              <FaTwitter />
            </li>
          </ul>
        </div>
        <div className="courses">
          <div className="head">
          <h3>Our Courses</h3>
          <hr />
          </div>
          <ul>
          <NavLink to="/about"> <li>
              <FaChevronRight />
              About Us
            </li>
            </NavLink>
            <li>
              <FaChevronRight />
              Our Services
            </li>
            <li>
              <FaChevronRight />
              Events
            </li>
            <li>
              <FaChevronRight />
              FAQ
            </li>
            <li>
              <FaChevronRight />
              Our process
            </li>
          </ul>
        </div>
        <div className="recent-posts">
        <div className="head">
          <h3>Recent Posts</h3>
          <hr />
          </div>
        </div>
        <div className="contact-us">
        <div className="head">
          <h3>Contact Us</h3>
          <hr />

          </div>
          <ul>
          <li>
            <FaPhone /> <span>+234805 6666700</span>
          </li>
          <li>
            <MdEmail /> <span>Info@medpau.net</span>
          </li>
          <li>
            <MdLocationPin /> <span> 3, Tunde Gafar Close, Off Adeniyi Jones, Ikeja,
            Lagos</span>
          </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
