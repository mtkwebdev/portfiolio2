import React from 'react'
import styled from 'styled-components'
import ReactPlayer from 'react-player'

const MediaContainer = styled.div`
overflow-y:none;
  height:auto;
  width:auto;`

const Media = styled.div`
position:absolute;
top:0px;
left:0px;
width:auto;
height:auto;
object-fit: cover;
overflow:none;
z-index:-1;
`

function Video({src}) {
  return (
 <MediaContainer>
    <Media>
        <ReactPlayer playing={true} controls={false} loop={true} muted 
        url={src}
        width='100vw' height='auto'
        />
    </Media>
    </MediaContainer>
  )
}

export default Video