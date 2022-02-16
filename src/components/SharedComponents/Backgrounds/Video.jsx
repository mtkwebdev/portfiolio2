import React from 'react'
import styled from 'styled-components'
import ReactPlayer from 'react-player'

const MediaContainer = styled.div`
overflow-y:scroll;
  height:100vh;
  width:100vw;`

const Media = styled.div`
position:absolute;
top:0px;
left:0px;
width:100%;
height:100%;
object-fit: contain;
overflow:hidden;
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