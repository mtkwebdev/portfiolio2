import React from 'react'
import styled from 'styled-components'
import {usePrismicDocumentByUID} from '@prismicio/react'

const Results = styled.div`
      margin: 20px auto;
      width: 90vw;
      height: auto;
      p{
        color:grey;
        font-weight:400;
        font-size:0.9rem;
      }
`

function MenuResults() {
  const [MenuData] = usePrismicDocumentByUID('resultspage','results_page')
  return (
    <Results>
              {/* {console.log(MenuData.data.results_section)} */}
      <p>About 25,200,000 results (0.54 seconds) </p>
      <div>{MenuData&&(
        MenuData.data.results_section.map((result)=>{
          return (
            <>
            {console.log(result)}
              <h1>{result.result_title[0].text}</h1>
              <p>{result.result__description[0].text}</p>
              {/* FIX THE DOUBBLE UNDERSCORE <p>{result.result_description[0].text}</p> */}
      
            </>
          )
        })
      )}</div>
    </Results>
  )
}

export default MenuResults