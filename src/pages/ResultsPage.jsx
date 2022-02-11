import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import WebSearchLogo from '../static/img/websearchLogo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import googleUserIcon from '../static/img/googleUserIcon.png'
import gridIcon from '../static/img/gridIcon.png'
import {usePrismicDocumentByUID} from '@prismicio/react'
import Skills from '../components/SharedComponents/GoogleParts/Skills';

const ResultsSection = styled.div`
    height:100vh;
`
const TopSection = styled.div`
        position:relative;
        display:flex;
        flex-direction:row;
        margin:0px;
        padding:0px;
        width: fit-content;
        height: fit-content;
`
const Logo = styled.img`
        position:relative;
        display:flex;
        flex-direction:column;
        ${'' /* margin: 25vh auto 0px auto; */}
        margin: 20px 20px;
        width:120px;
        height: 50px;
        object-fit:contain;
`

const SearchBar = styled.div`
        display:flex;
        margin: 25px 15px;
        width: 40rem;
        height: 2.5rem;
        border-radius: 2em;
        border: none;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

    span{
        z-index:1;
    }

    p{
        margin:6px 20px 10px 25px;
        width:90%;
        height: 1.8rem;
        font-size:1.2rem;
        border:none;
        outline: none;
        background:none;
        overflow: scroll;
    }
    &:hover{
        border: none;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    }
    .searchIcon{
        width:20px;
        height: 20px;
        font-size:1rem;
        margin:10px -15px 0px 15px;
        color: rgba(0,0,0,0.2)
    }
`
const BottomBar = styled.header`
        font-size:0.9rem;
        display: flex;
        flex-direction: row;
        width:100%;

    .headerTexts{
        display: flex;
        flex-direction: row;
        justify-content:space-between;
        width: 100%;
        height: 2.8rem;
        border-bottom: 1px solid lightgrey;
        margin: auto;

            span {
                display: flex;
                flex-direction: row;
                margin: 0px 9rem;
                min-width: 400px;
                height: 50px;
                    p {
                        width: fit-content;
                        padding: 10px;
                        cursor: pointer;
                        margin: auto 10px;
                        }
                    p:hover{
                        border-bottom: 3px solid rgba(0, 102, 212);
                    }
                    p:nth-child(1){
                        border-bottom: 3px solid rgba(0, 102, 212);
                    }
                }
        }

        .headerIcons{
            display:flex;
            flex-direction:row;
            justify-self: end;
            width:8em;
            margin: -5rem auto auto auto;
                .icons{
                    width:50px;
                    height:auto;
                    object-fit:contain;
                    border-radius:100%;
                    cursor:pointer;
                }
                .icons:nth-child(2) &:hover{
                    ${'' /* filter: invert(48%); */}
                    background-color:grey;
                }
        }
`

function ResultsPage({children}) {

  return (
      <>
        <ResultsSection id='results'>
            <TopSection>
                <Logo src={WebSearchLogo}/>
                <SearchBar>
                    <i className="searchIcon fa-solid fa-magnifying-glass"></i>
                    <p>Welcome to Mohammad Kawadri's Portfolio Website </p>
                </SearchBar>
            </TopSection>
            <BottomBar>
                <div className='headerTexts'>
                    <span><p>All Results</p><p>CV</p><p>Linkedin</p><p>Email</p><p>GitHub</p></span>
                </div>
                <div className='headerIcons'>
                <Skills/>
                    <img className='icons' src={googleUserIcon} alt="" />
                </div>
            </BottomBar>
            {children}
        </ResultsSection>
      </>

  )
}

export default ResultsPage