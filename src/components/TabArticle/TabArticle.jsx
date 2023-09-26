import React from "react";

const TabArticle = ({ id, imgSrc, title, description }) => {
  return (
    <article id={id}>
      <div className="row">
        <div className="col-md-6">
          <img src={imgSrc} alt="" />
        </div>
        <div className="col-md-6">
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
      </div>
    </article>
  );
};

export default TabArticle;
