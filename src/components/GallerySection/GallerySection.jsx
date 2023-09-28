import React from "react";
 // You can create a SectionHeading component
import GalleryItem from "../GalleryItem/GalleryItem";// Create a GalleryItem component
import SectionHeading from "../SectionHeading/SectionHeading";
 

const GallerySection = () => {
  return (
    <section className="section courses" data-section="section4">
      <div className="container-xxl py-5 category">
        <div className="container">
          <SectionHeading title="Students Gallery" />

          <div className="row g-3">
            <div className="col-lg-7 col-md-6">
              <div className="row g-3">
                <GalleryItem
                  imgSrc="assets/images/gallery1.jpg"
                  delay="0.1s"
                />
                <GalleryItem
                  imgSrc="assets/images/gallery2.jpg"
                  delay="0.3s"
                  marginTop="10px"
                />
                <GalleryItem
                  imgSrc="assets/images/gallery3.jpg"
                  delay="0.5s"
                  marginTop="10px"
                />
              </div>
            </div>
            <div
              className="col-lg-5 col-md-6"
              style={{ minHeight: "350px" }}
            >
              <GalleryItem
                imgSrc="assets/images/gallery4.jpg"
                delay="0.7s"
                coverImage
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
