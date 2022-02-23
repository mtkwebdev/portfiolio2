import React from 'react'
import styled from 'styled-components'
import { HashLink } from 'react-router-hash-link';
import {PrismicText,usePrismicDocumentByUID} from '@prismicio/react'

const Container = styled.div`
    position: absolute;
    top: 20px;
    left: 20px;
    z-index: 1;
    a{
        color: rgba(0,0,0,0.5);
        font-size:2rem;
        text-decoration: none;
    }
`

function HomeButton() {
  return (
    <Container>
      <HashLink id="home" to="/#results"><i className="fa-solid fa-house"></i></HashLink>
    </Container>
  )
}

export default HomeButton