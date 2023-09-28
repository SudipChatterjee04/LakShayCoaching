import React from "react";
import TabContent from "../TabContent/TabContent";
import TabList from "../TabList/TabList";
import SectionHeading from "../SectionHeading/SectionHeading";
import './WhyGradSchool.css'

const WhyGradSchool = () => {
  return (
    <div>
      <section className="section-why-us" data-section="section2">
        <div className="container">
          <SectionHeading title="Why choose Grad School?" />
          <div className="col-md-12">
            <div id="tabs">
              <TabList />
              <TabContent />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyGradSchool;
