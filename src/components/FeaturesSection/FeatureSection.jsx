import React from "react";

import BannerCard from "../BannerCard/BannerCard";

const FeaturesSection = () => {
  return (
    <section className="features">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-12">
            <BannerCard
              title="Experienced Instructors"
              content="Lakshyam Coaching provides top-tier education and tailored mentorship, ensuring students benefit from expert faculty guidance for a holistic learning experience."
            />
          </div>
          <div className="col-lg-4 col-12">
            <BannerCard
              title="Empowering Students"
              content="Our vision is to empower students with the knowledge, skills, and confidence required to tackle the challenges of competitive exams."
            />
          </div>
          <div className="col-lg-4 col-12">
            <BannerCard
              title="Continuous Innovation"
              content="We are committed to embracing innovation and staying at the forefront of educational advancements."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
