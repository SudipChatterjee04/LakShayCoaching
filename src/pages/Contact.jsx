import React from 'react'
import MainBanner from '../components/Main Banner/MainBanner'
import myVideo from '../assets/images/contact.mp4'
const Contact = () => {
  return (
    <div>
      <MainBanner
        heading6="Home >"
        heading2a="Contact"
        heading2b="Use us"
        videoSource={myVideo}
        // buttonText="Discover more" // Provide buttonText prop if needed
        showFeaturesSection={false}
      />
    </div>
  )
}

export default Contact