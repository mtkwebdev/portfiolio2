import React from 'react'
import Video from '../components/SharedComponents/Backgrounds/Video'
import HomeButton from '../components/SharedComponents/Links/HomeButton'
import contactVideo from '../static/videoDrafts/contact.mp4'

function Contact() {
  return (
    <>
      <HomeButton/>
      <Video src={contactVideo}/>
    </>
  )
}

export default Contact