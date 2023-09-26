import React from 'react'
import MainBanner from '../components/Main Banner/MainBanner'
import myVideo from '../assets/images/courses.mp4'
const Courses = () => {
  return (
    <div>
    <MainBanner
        heading6="Home >"
        heading2a="Free"
        heading2b="Tutorial"
        videoSource={myVideo}
        // buttonText="Discover more" // Provide buttonText prop if needed
        showFeaturesSection={false}
      />
      </div>
  )
}

export default Courses