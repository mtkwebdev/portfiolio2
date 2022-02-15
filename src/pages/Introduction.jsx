import React from 'react'
import {Link} from 'react-router-dom'
import ReactPlayer from 'react-player'
import styled from 'styled-components'
import blueWeb from '../static/videoDrafts/projects.mp4'
    // url={"https://link.eu1.storjshare.io/s/jwxl5q6y5dul7zj4m6np5q3p3p6q/testbucket/introduction.mp4?wrap=0"}

    const Container = styled.div`
          display: grid;
          grid-template-columns: repeat(12,1fr);
          grid-template-rows: repeat(12,1fr);
          overflow-y:scroll;
          height:100vh;
          width:100vw;
          background: linear-gradient(180deg, rgba(255,255,255,0.85) 20%, rgba(0,200,180,0.2) 100%);
          ${'' /* background: rgba(255,255,255,0.4); */}
          
          #home{
            position: absolute;
            top:0;
            width: fit-content;
            height: 50px;
            font-size: 1rem;
            ${'' /* grid-column:1/1;
            grid-row:1/1; */}
            z-index: 100;
            text-decoration: none;
            font-weight: 800;
            color: black;
          }
          #one{
            grid-column:1/7;
            grid-row:1/2;
            div{
              margin-left: 70% ;
              margin-top: 30% ;
            }
          }
          #two{
            grid-column:7/13;
            grid-row:2/3;
            div{
              margin-left: -30vw;
              margin-top: 20% ;
            }
          }
          #three{
            grid-column:1/7;
            grid-row:3/4;
            div{
              margin-left: 70% ;
              margin-top: 30% ;
            }
          }
          #four{
            grid-column:7/13;
            grid-row:4/5;
            div{
              margin-left: -40vw;
              margin-top: 30% ;
            }
          }
          #five{
            grid-column:1/7;
            grid-row:5/6;
            div{
              margin-left: 80% ;
              margin-top: 30% ;
            }
          }
          #six{
            margin: 0px auto;
            max-height: 200px;
            grid-column:3/11;
            grid-row:6/7;
              ${'' /* background:rgba(255,255,255,0.5);
              border-radius: 20px; */}
            div{
              ${'' /* margin-left: -45vw; */}
              margin: 20px auto;
              width: 80%;
            }
          }
    `
  
    const Media = styled.div`
          position:absolute;
          top:0px;
          left:0px;
          width:100%;
          height:100%;
          object-fit: contain;
          overflow:hidden;
          z-index:-1;
          ${'' /* filter: invert(100%); */}
          ${'' /* filter: hue-rotate(270deg); */}
    `
    const Titles = styled.h1`
            margin: 200px 0px 0px 25px;
            width:fit-content;
            font-size:5rem;
            font-weight:800;
            background:none;
            ${'' /* color:rgba(0,25,25,0.5); */}
            color:rgba(0,0,0,0.8);
            cursor: default;
            z-index: 2;
    `
  
    const Sections = styled.section`
          position:relative;
          ${'' /* border-radius:1.2em; */}
          width: 100%;
          height: 100vh;
          background: rgba(255,255,255,0.05);
          ${'' /* background: rgb(0,45,25,.05); */}
          ${'' /* background: linear-gradient(0deg, rgba(2,0,36,0.1) 0%, rgba(255,255,255,0) 50%, rgba(255,255,255,0.2) 100%); */}
          backdrop-filter: blur(5px);
          z-index: 0;
          cursor: default;
    `
    const Subsection = styled.div`
          width:100%;
          height: fit-content;
          padding: 30px;
          ${'' /* background: rgba(255,255,255,0.05); */}
          border-radius: 10px;
          font-size:2rem;
          font-weight: 200;
          ${'' /* color:rgba(255,255,255,0.2); */}
          color:black;
          backdrop-filter: blur(50%);
          ${'' /* text-shadow: 0px 0px 10px rgba(0,255,0,1); */}
          cursor: default;
    `

function Introduction() {


  return (
    <Container>
    
    <Link id="home" to="/">HOME<i class="fa-regular fa-house-blank"></i></Link>
        {/* <Titles>INTRODUCTION</Titles>
        <Titles>THE WEB</Titles>  
        <Titles>SKILLS</Titles>  
        <Titles>CERTIFICATION</Titles>  
        <Titles>EXPERIENCE</Titles>  
        <Titles>JOURNEY</Titles>   */}
      <Sections id='one'>
        <Titles>INTRODUCTION</Titles>
        <Subsection>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut rerum, repudiandae accusamus quasi obcaecati totam minima! Inventore eum iste, error temporibus porro quidem facilis vel a odio reiciendis molestias eaque.
        </Subsection>
      </Sections>

      <Sections id="two">
        <Titles>WHY WEB?</Titles>
        <Subsection>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut rerum, repudiandae accusamus quasi obcaecati totam minima! Inventore eum iste, error temporibus porro quidem facilis vel a odio reiciendis molestias eaque.
        </Subsection> 
      </Sections>

      <Sections id="three">
        <Titles>SKILLS</Titles>  
        <Subsection>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut rerum, repudiandae accusamus quasi obcaecati totam minima! Inventore eum iste, error temporibus porro quidem facilis vel a odio reiciendis molestias eaque.
        </Subsection>
      </Sections>

      <Sections id="four"> 
        <Titles>CERTIFICATION</Titles>
        <Subsection>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut rerum, repudiandae accusamus quasi obcaecati totam minima! Inventore eum iste, error temporibus porro quidem facilis vel a odio reiciendis molestias eaque.
        </Subsection>  
      </Sections>

      <Sections id="five">
        <Titles>EXPERIENCE</Titles> 
        <Subsection>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut rerum, repudiandae accusamus quasi obcaecati totam minima! Inventore eum iste, error temporibus porro quidem facilis vel a odio reiciendis molestias eaque.
        </Subsection>
        </Sections>

      <Sections id="six">
       <Titles>JOURNEY</Titles>
       <Subsection>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut rerum, repudiandae accusamus quasi obcaecati totam minima! Inventore eum iste, error temporibus porro quidem facilis vel a odio reiciendis molestias eaque.
        </Subsection>
       </Sections>
    <Media>
        <ReactPlayer playing={true} controls={false} loop={true} muted 
        url={blueWeb}
        width='100vw' height='auto'
        />
    </Media>
    </Container>
  )
}

export default Introduction