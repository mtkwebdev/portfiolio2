import React from 'react'
import styled from 'styled-components'
import HomeButton from '../components/SharedComponents/Links/HomeButton'
import {usePrismicDocumentByUID} from '@prismicio/react'

const Container = styled.div`
display:flex;
flex-direction: column;
width: 50vw;
height: 50vh;
margin: 100px auto;
    h1{
        font-size: 3rem;
    }
    img{
        margin: auto;
        width: 50vh;
        height: auto;
        object-fit: contain; 
    }
        @media only screen and (max-width: 900px){
            h1{font-size: 2rem;}
            img{ width: 50vw;}
        }
        @media only screen and (max-width: 400px){
            h1{font-size: 1.2rem;}
        }
`

function Soon() {
    const [Content] = usePrismicDocumentByUID('notfound', 'soon')
  return (
      <>
        <HomeButton/>
        {Content && (

        <Container>
            <img src={Content.data.image.url} alt="" />
            <h1>{Content.data.text[0].text}</h1>
        </Container>
        )}
      </>
  )
}

export default Soon