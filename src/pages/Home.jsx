import React from "react";
import MainBanner from "../components/Main Banner/MainBanner";
import myVideo from '../assets/images/course-video.mp4'
function Home() {
  return (
    <div>
      <MainBanner
        heading6="Success starts here!"
        heading2a="Lakshyam"
        heading2b="Coaching"
        videoSource={myVideo}
        buttonText="Discover more"
        showFeaturesSection={true} // Provide buttonText prop if needed
      />
    </div>
  );
}

export default Home;
