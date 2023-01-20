import React from "react";
import "./ourServices.scss";

export default function OurServices({head, decsription}) {
  return (
    <div className="service-container">
        <div className="overlay"></div>
      <div className="icon"></div>
      <h4>{head}</h4>
      <p>
        {decsription}
      </p>
      <button className="read-more-btn">READ MORE</button> 
    </div>
  );
}
