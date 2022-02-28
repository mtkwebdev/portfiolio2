import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import blueWeb from '../static/videoDrafts/projects.mp4'
import HomeButton from '../components/SharedComponents/Links/HomeButton'
import {PrismicRichText ,usePrismicDocumentByUID} from '@prismicio/react'

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
  span{
    height:10px;
  }
  @media only screen and (max-width:900px){
    .video{display:none}
  }
`

const Sections = styled.section`
  position:relative;
  width: 50%;
  height: fit-content;
  padding: 50px;
  z-index: 0;
  cursor: default;
  background: rgba(255,255,255,0.8);
  &:nth-child(2n+1){
    align-self: flex-end;
    }
  @media only screen and (max-width:900px){
    width: 100%;
    margin:auto;
    align-self:center;
    &:nth-child(2n+1){
      align-self:center;
    }
  }
`
const Titles = styled.h1`
  width:fit-content;
  margin-bottom: 0px;
  padding: 10px;
  font-size:3rem;
  font-weight:800;
  background:none;
  color:rgba(0,0,0,1);
  cursor: default;
  z-index: 2;
  @media only screen and (max-width:900px){
    font-size: 1.5rem;
  }
`
  const Subsection = styled.div`
  display: flex;
  flex-direction: column;
  width:90%;
  margin-top: 0px;
  height: fit-content;
  border-radius: 10px;
  font-size:1.2rem;
  font-weight: 200;
  color:black;
  background: none;
  cursor: default;
  border-radius: 20px;
  p{ padding: 10px;}
  img{
    width:auto;
    height: 20vw;
    margin: auto;
    object-fit: contain;
    border-radius: 20px;
    padding: 10px;
  }
  @media only screen and (max-width:900px){
    width: 100%;
    img{
    width:auto;
    height: 30vw;
  }
  }
  `

function Projects() {
  const [Content] = usePrismicDocumentByUID('projects','projects')

  return (
    <Container>
    <HomeButton/>

      {Content && Content.data.repeatable_project.map((items, i)=>{
        return (
      <Sections>
        {console.log(items)}

        <Titles>{items.project_title[0].text}</Titles>
        <Subsection>
          <img src={items.project_image.url} alt="" />
          <PrismicRichText field={items.project_description}/>
          <PrismicRichText field={items.project_tech_used}/>
          {/* <a href={data.project_link[0].text}>Link</a>  */}
        </Subsection>
      </Sections>
        )
      })}
        <Video src={blueWeb}/>
    </Container>
  )
}

export default Projects