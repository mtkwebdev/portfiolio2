import React from 'react'
import Video from '../components/SharedComponents/Backgrounds/Video'
import HomeButton from '../components/SharedComponents/Links/HomeButton'
import cvVideo from '../static/videoDrafts/CV.mp4'

function Cv() {
  return (
    <>
    <HomeButton/>
      <Video src={cvVideo}/>
    </>
  )
}

export default Cv