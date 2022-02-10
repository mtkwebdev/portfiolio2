import React from 'react'
import styled from 'styled-components';
import {PrismicRichText, useFirstPrismicDocument, usePrismicDocumentByUID} from '@prismicio/react'

function Introduction() {
    const [Introduction] = usePrismicDocumentByUID('introduction','introduction')

    const Container = styled.article`
            position:relative;
            display:block;
            background: ##e4e6eb;
            margin: 120vh  4em;
            width: 50%;
            border-radius: 2em;
            padding: 10px 15px;
            text-align: justify;
            backdrop-filter: blur(2px);
            box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.1) 0px 1px 3px -1px;
            background: rgba(225,225,225,0.5);
            div{
                h1{
                    padding:0px 5px;
                    ${'' /* backdrop-filter: blur(20px); */}
                    }
                p{
                    font-size:1.2rem;
                    padding: 0px 5px;
                    ${'' /* backdrop-filter: blur(20px); */}
                    }
            }
    `
  return (
    <Container>
        
    </Container>
  )
}


export default Introduction