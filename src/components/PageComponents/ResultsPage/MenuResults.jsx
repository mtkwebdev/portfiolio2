import React from 'react'
import styled from 'styled-components'
import {usePrismicDocumentByUID} from '@prismicio/react'
import { Link } from 'react-router-dom'

const Results = styled.div`
      margin: 20px auto;
      width: 80vw;
      height: auto;
      @media only screen and (max-width:900px){
        width: 90vw;
      }
      .resultSummary{
        color:grey;
        font-weight:400;
        font-size:0.9rem;
      }
`
const Titles = styled.h1`
  font-size:1.2rem;
  font-weight: 500;
  margin: 0px 0px 0px 0px;
  color: blue;
  width: 50%;
  cursor:pointer;
  @media only screen and (max-width:900px){
        width: 100%;
      }
`

const Urls = styled.p`
 margin: 20px 0px 0px 0px;
`

const Descriptions = styled.p`
  font-size:0.9rem;
  margin: 0px;
  width: 50%; 
  @media only screen and (max-width:900px){
        width: 100%;
      }
`

function MenuResults() {
  const [MenuData] = usePrismicDocumentByUID('resultspage','results_page')
  return (
    <Results>
              {/* {console.log(MenuData.data.results_section)} */}
      <p className="resultSummary">About 25,200,000 results (0.54 seconds) </p>
      <div key={"MenuData" + Math.random()}>{MenuData&&(
        MenuData.data.results_section.map((result)=>{
          return (
            <>
              <Urls key={"URL" + result.result_url[0].text}>{result.result_url[0].text}</Urls>
              <Link key={"LINK" + result.router_url[0].text} to={result.router_url[0].text}>
                <Titles key={ "TITLES" + result.result_title[0].text}>{result.result_title[0].text}</Titles>
              </Link>
              <Descriptions key={"DESC" + result.result_description[0].text}>{result.result_description[0].text}</Descriptions>
            </>
          )
        })
      )}</div>
    </Results>
  )
}

export default MenuResults