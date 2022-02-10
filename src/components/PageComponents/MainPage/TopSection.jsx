import React from 'react'
import ReactPlayer from 'react-player'
import styled from 'styled-components';
import video from '../../../static/bannervideo.mp4'

function TopSection() {
    const Container = styled.section`
    position: absolute;
    top:0;
    width: 100vw;
    height: auto;
`
const VideoText = styled.div`
    position: absolute;
    display:block;
    top:5%;
    left: 10%;
    width:80%;
    backdrop-filter: blur(20px);
    text-align: center;
    padding: 20px;
    animation: fadeIn 7s;
    -webkit-animation: fadeIn 7s;
    -moz-animation: fadeIn 7s;
    -o-animation: fadeIn 7s;
    -ms-animation: fadeIn 7s;

    @keyframes fadeIn {
    0% {opacity:0;}
    80% {opacity:0;}
    100% {opacity:1;}
    }

    @-moz-keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
    }

    @-webkit-keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
    }

    @-o-keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
    }

    @-ms-keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
    }

    h1{
        margin:0px;
        font-size:8rem; font-weight: 800;
        span{
            font-weight: 400
        }
     }
    h2{font-size:6rem;font-weight: 600;}
    h3{font-size:4rem;font-weight: 400}
    h4{font-size:2rem;font-weight: 200; color:white;}

`


  return (
    <>
        <Container>
            <ReactPlayer playing="true" controls={false} muted url={video} type="video/mp4" playbackRate={4} width='100vw' height='auto'/>
            <VideoText>
                <h2>IF YOU ARE LOOKING FOR A..</h2>
                <h2>Junior / Mid-Level Javascript Web Developer</h2>
                <h3>WHO IS AVAILABLE IMMEDIATELY</h3>
                <h4>Then please, scroll down to see more!</h4>
                {/* <h1><span>FINDING A</span> GOOD</h1>
                <h2>WEB DEVELOPER</h2>
                <h3>IS ONLY A FEW SHORT SCROLLS AWAY</h3>
                <h4>SCROLL DOWN TO SEE WHY</h4> */}
            </VideoText>
        </Container>
    </>
  )
}

export default TopSection