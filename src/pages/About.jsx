import React from 'react'
import MainBanner from '../components/Main Banner/MainBanner'
import myVideo from '../assets/images/aboutus.mp4'
const About = () => {
  return (
    <div>
      <MainBanner
        heading6="Home >"
        heading2a="Success"
        heading2b="Starts Here"
        videoSource={myVideo}
        // buttonText="Discover more" // Provide buttonText prop if needed
        showFeaturesSection={true}
      />
    </div>
  )
}

export default About
