import React from 'react'
import MainBanner from '../components/Main Banner/MainBanner'
import myVideo from '../assets/images/free-tutorial.mp4'
const FreeTutorial = () => {
  return (
    <div>
      <MainBanner
        heading6="Home >"
        heading2a="Our"
        heading2b="Courses"
        videoSource={myVideo}
        // buttonText="Discover more" // Provide buttonText prop if needed
        showFeaturesSection={false}
      />
    </div>
  )
}

export default FreeTutorial