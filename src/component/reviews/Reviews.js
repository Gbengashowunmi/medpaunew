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
          <img src="/images/ESTHER.jpg" alt="user" />
        </div>
        <div className="reveiwer-info">
          <h4 className="name">GODWINS ESTHER</h4>
          <p className="job">BUSINESS DEV. MANAGER</p>
        </div>
      </div>
    </div>
  );
}
