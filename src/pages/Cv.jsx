import React from 'react'
import styled from 'styled-components'
import {PrismicRichText ,usePrismicDocumentByUID} from '@prismicio/react'
import HomeButton from '../components/SharedComponents/Links/HomeButton'
import Video from '../components/SharedComponents/Backgrounds/Video'
// import cvVideo from '../static/videoDrafts/CV.mp4'

function Cv() {

  const [Content] = usePrismicDocumentByUID('cv','cv');

const Container = styled.div`
  display:flex;
  flex-direction: column;
  height:100vh;
  width:100vw;
  margin: auto;
  padding-top: 100px;
  overflow-y: auto;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  ${'' /* overflow-x: none; */}
`

  const Sections = styled.div`
  width: 80%; 
  height: auto;
  margin: 50px auto;
  padding: 20px;
  background: rgba(255,255,255,0.8);
  border-radius: 10px;

  `

  const Titles = styled.div`
  display:flex;
  `

  const Logos = styled.img`
  margin-right: 20px;
  object-fit: contain;
  width: 50px;
  `

  const Desc = styled.div`
    padding: 20px;
    background: rgba(255,255,255,1);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  `




  return (
    <Container>
      <HomeButton/>

      {Content && Content.data.experience.map((items, i)=>{
        console.log(items)
          return (
          <Sections>
            <Titles>
            <Logos src={items.experience_logo.url}/>
              <h1>{items.experience_company[0].text}</h1>
            </Titles>
              <h2>{items.experience_role[0].text}</h2>
            <Desc>
              <PrismicRichText field={items.experience_desc} />
              <PrismicRichText field={items.experience_tech} />
            </Desc>
          </Sections>
          )
      })}
        {/* <Video src={cvVideo}/> */}
    </Container>
  )
}

export default Cv