import React from 'react'
import styled from 'styled-components'
// import {PrismicRichText ,usePrismicDocumentByUID} from '@prismicio/react'
import {PrismicRichText} from '@prismicio/react'
import { useSelector } from 'react-redux'
import test from '../static/img/largeMintyMesh.png'
import HomeButton from '../components/SharedComponents/Links/HomeButton'

const Container = styled.section`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    overflow-y: scroll;
    align-items: flex-start;
    margin:auto;
`

const Card = styled.div`
  display: flex;
  flex-direction: row;
  margin: 50px;
  padding: 15px;
  border-radius: 0px 20px 20px 0px ;
  min-width: 300px;
  max-width: 800px;
  width: 50%;
  height: fit-content;
  @media only screen and (max-width: 900px){
        width: 80vw;
        height: auto;
        margin: auto;
        &:nth-child(1n+0){
          margin-top: 60px;
          align-self: center;
        }
        &:nth-child(1){
          margin-top: 0px;
          align-self: center;
        }
      }
  
  &:nth-child(2n+0){
      align-self: flex-end;
      @media only screen and (max-width: 900px){
        align-self: center;
      }
    }
    img{
      border-radius: 20px 0px 0px 20px ;
      padding: 0px 10px;
      ${'' /* -webkit-box-shadow: inset -10px 0px 19px -10px rgba(0,35,177,0.7);  */}
      box-shadow: inset -20px 0px 50px -20px rgba(0,35,177,0.2), rgba(0, 0, 0, 0.35) 0px 5px 15px;;
    }
    div{
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      border-radius: 0px 20px 20px 0px ;
      font-size: 1.2rem;
      padding-left: 20px;
      display: flex;
      flex-direction: column;
      background: white;
      @media only screen and (max-width: 900px){
        font-size: 0.5rem;
        padding-left: 0px;
      }
      h1{
        margin: 20px 0px 0px 10px;
      }
      p{
        margin:0px; 
        padding: 10px 0px 15px 10px;
        text-align: justify;
        width: 95%;
        height: fit-content;
      }
    }

`
const Image = styled.img`
    position: ${props => props.position || "relative"};
    z-index: ${props=> props.index || "0"};
    background: ${props => props.background || "none"};
    backdrop-filter: ${props =>props.backdropFilter || "none"};
    background: ${props=> props.background || "none"};
    backgroundImg: ${props=> `url(${props.backgroundImg})` || "none"};
    width: ${props => props.width || "20%"}; 
    height: ${props => props.height || "auto"}; 
    object-fit: ${props => props.objectFit || "contain"};
    border-radius: ${props => props.borderRadius || "0px"};
    opacity: ${props => props.opacity || "1"};
`

function Introduction() {
  // const [Introduction] = usePrismicDocumentByUID('introduction','introduction_group')
  const introductionState = useSelector((state)=>state.PrismicSlice.Introduction)

  return (
    <>
      <Container key="MainContainer">
      <HomeButton/>
      <Image key="ImageBackground" position="absolute" index="-1" width="100vw" height="100vh" objectFit="cover" src={test}/>
      {introductionState && (
        introductionState.data.introduction_group.map((data, i)=>{
        return (
          <>
            <Card key={"Card" + i}>
              <Image key={"Image " + i} width={"30%"} src={data.image.url} backdropFilter="blur(20px)" alt="" background="rgba(255,255,255,0.2)" backgroundImg={test}/>
                <div key={"Text Container" + i}>
                  <h1 key={"Title "+ i}>{data.title[0].text}</h1>
                    <PrismicRichText key={"Texts " + i} field={data.text} />
                </div>
            </Card>
          </>
        )
        }))}
      </Container>
    </>
  )
}

export default Introduction

