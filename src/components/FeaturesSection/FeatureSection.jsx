import React from "react";
import "./FeatureSection.css";
import data from "./bannerData.json";


// import BannerCard from "../BannerCard/BannerCard";

const FeaturesSection = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className="feature-main-container">
        {data.map((card) => (
          <div className="feature-main-container-sub" key={card.id}>
            <div style={{ height: "20px", border: "2px solid red", display:'flex' }}>
              <div style={{ border: "2px solid red" }}>
                <i className={card?.iconClass}></i>
              </div>
              <p className="feature-main-container-sub-p1">{card?.title}</p>
            </div>
            <div>
              <p className="feature-main-container-sub-p2">{card?.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
