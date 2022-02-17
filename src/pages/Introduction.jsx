import React from 'react'
import styled from 'styled-components'
import {PrismicText,usePrismicDocumentByUID} from '@prismicio/react'
import test from '../static/img/largeMintyMesh.png'


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
  &:nth-child(2n){
      align-self: flex-end;
    }
    img{
      border-radius: 20px 0px 0px 20px ;
      padding: 0px 10px;
    }
    div{
      border-radius: 0px 20px 20px 0px ;
      font-size: 1.2rem;
      ${'' /* margin-left: 20px; */}
      padding-left: 20px;
      display: flex;
      flex-direction: column;
      background: white;
      p{
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
    width: ${props => props.width || "20%"}; 
    height: ${props => props.height || "auto"}; 
    object-fit: ${props => props.objectFit || "contain"};
    border-radius: ${props => props.borderRadius || "0px"}
`

function Introduction() {
  const [Content] = usePrismicDocumentByUID('introduction','introduction_group')

  return (
    <>
      <Container>
      <Image position="absolute" index="-1" width="100vw" height="100vh" objectFit="cover" src={test}/>
      {Content&&(
      Content.data.introduction_group.map((data, i)=>{
        return (
          <>
            <Card>
              <Image src={data.image.url} backdropFilter="blur(20px)" alt="" background="rgba(255,255,255,0.2)" />
                <div>
                  <h1>{data.title[0].text}</h1>
                  {/* <p>{data.text[i].text}</p> */}

                </div>
              {/* {console.log(data)} */}
            </Card>
          </>
        )
        }))}
      </Container>
    </>
  )
}

export default Introduction

