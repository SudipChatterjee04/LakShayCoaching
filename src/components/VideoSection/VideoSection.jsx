import React from "react";
import VideoContent from "../VideoContent/VideoContent";
import VideoPlayer from "../VideoPlayer/VideoPlayer";


const VideoSection = () => {
  return (
    <section className="section video" data-section="section5">
      <div className="container">
        <div className="row">
          <VideoContent />
          <VideoPlayer />
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
