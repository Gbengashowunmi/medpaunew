import React from "react";
import "./reviews.scss";
export default function Reviews() {
  return (
    <div className="review-container">
      <p>
        Neurology There are many variations of pas of Lorem Ipsum availab.There
        are many variations of pas of Lorem Ipsum availab.
      </p>
      <hr/>

      <div className="reviewer">
        <div className="reviewer-img">
          <img src="/images/4-2.png" alt="user" />
        </div>
        <div className="reveiwer-info">
          <h4 className="name">Dr. Gbenga Showunmi</h4>
          <p className="job">Web Developer</p>
        </div>
      </div>
    </div>
  );
}
