import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import blueWeb from '../static/videoDrafts/projects.mp4'

import Video from '../components/SharedComponents/Backgrounds/Video'
    // url={"https://link.eu1.storjshare.io/s/jwxl5q6y5dul7zj4m6np5q3p3p6q/testbucket/introduction.mp4?wrap=0"}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow-y:scroll;
  height:100vh;
  width:100vw;
  background: rgba(255,255,255,0.5);
`

const Sections = styled.section`
  position:relative;
  width: 50%;
  height: fit-content;
  padding: 50px;
  z-index: 0;
  cursor: default;
  background: rgba(255,255,255,0.7);
  &:nth-child(2n){
    align-self: flex-end;
    }
`
const Titles = styled.h1`
  width:fit-content;
  font-size:5rem;
  font-weight:800;
  background:none;
  color:rgba(0,0,0,0.2);
  cursor: default;
  z-index: 2;
`
  const Subsection = styled.div`
  width:90%;
  height: fit-content;
  ${'' /* margin: 0px 230px 0px 20px;
    padding: 0px 20px 0px 20px; */}
  border-radius: 10px;
  font-size:2rem;
  font-weight: 200;
  color:black;
  background: none;
  cursor: default;
  border-radius: 20px;
  ${'' /* backdrop-filter: blur(20px); */}
  `

function Projects() {
  return (
    <Container>
      <Sections id='one'>
        <Link id="home" to="/">HOME<i className="fa-regular fa-house-blank"></i></Link>
        <Titles>PROJECT- EJDFLWEFJO</Titles>
        <Subsection>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut rerum, repudiandae accusamus quasi obcaecati totam minima! Inventore eum iste, error temporibus porro quidem facilis vel a odio reiciendis molestias eaque.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut rerum, repudiandae accusamus quasi obcaecati totam minima! Inventore eum iste, error temporibus porro quidem facilis vel a odio reiciendis molestias eaque.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut rerum, repudiandae accusamus quasi obcaecati totam minima! Inventore eum iste, error temporibus porro quidem facilis vel a odio reiciendis molestias eaque.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut rerum, repudiandae accusamus quasi obcaecati totam minima! Inventore eum iste, error temporibus porro quidem facilis vel a odio reiciendis molestias eaque.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut rerum, repudiandae accusamus quasi obcaecati totam minima! Inventore eum iste, error temporibus porro quidem facilis vel a odio reiciendis molestias eaque.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut rerum, repudiandae accusamus quasi obcaecati totam minima! Inventore eum iste, error temporibus porro quidem facilis vel a odio reiciendis molestias eaque.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut rerum, repudiandae accusamus quasi obcaecati totam minima! Inventore eum iste, error temporibus porro quidem facilis vel a odio reiciendis molestias eaque.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut rerum, repudiandae accusamus quasi obcaecati totam minima! Inventore eum iste, error temporibus porro quidem facilis vel a odio reiciendis molestias eaque.
        </Subsection>
      </Sections>

      <Sections id="two">
        <Titles>PROJECT- wkejhfwe</Titles>
        <Subsection>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut rerum, repudiandae accusamus quasi obcaecati totam minima! Inventore eum iste, error temporibus porro quidem facilis vel a odio reiciendis molestias eaque.
        </Subsection> 
      </Sections>

      <Sections id="three">
        <Titles>PROJECT- wefnkwejf</Titles>  
        <Subsection>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut rerum, repudiandae accusamus quasi obcaecati totam minima! Inventore eum iste, error temporibus porro quidem facilis vel a odio reiciendis molestias eaque.
        </Subsection>
      </Sections>

      <Sections id="four"> 
        <Titles>PROJECT- wejlef</Titles>
        <Subsection>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut rerum, repudiandae accusamus quasi obcaecati totam minima! Inventore eum iste, error temporibus porro quidem facilis vel a odio reiciendis molestias eaque.
        </Subsection>  
      </Sections>

      <Sections id="five">
        <Titles>PROJECT- qwejkdw</Titles> 
        <Subsection>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut rerum, repudiandae accusamus quasi obcaecati totam minima! Inventore eum iste, error temporibus porro quidem facilis vel a odio reiciendis molestias eaque.
        </Subsection>
        </Sections>

      <Sections id="six">
       <Titles>PROJECT - qwldkn</Titles>
       <Subsection>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut rerum, repudiandae accusamus quasi obcaecati totam minima! Inventore eum iste, error temporibus porro quidem facilis vel a odio reiciendis molestias eaque.
        </Subsection>
       </Sections>
       <Video src={blueWeb}/>
    </Container>
  )
}

export default Projects