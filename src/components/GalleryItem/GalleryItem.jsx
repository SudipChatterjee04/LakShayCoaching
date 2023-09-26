import React from "react";

const GalleryItem = ({ imgSrc, delay, marginTop, coverImage }) => {
  const imageStyle = {
    objectFit: coverImage ? "cover" : "initial",
  };

  return (
    <div className={`col-lg-6 col-md-12 wow zoomIn`} data-wow-delay={delay}>
      <a
        className={`position-relative d-block overflow-hidden ${marginTop}`}
        href="/"
      >
        <img className="img-fluid" src={imgSrc} alt="" style={imageStyle} />
      </a>
    </div>
  );
};

export default GalleryItem;
