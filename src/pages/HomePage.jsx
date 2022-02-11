import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import WebSearchLogo from '../static/img/websearchLogo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import googleUserIcon from '../static/img/googleUserIcon.png'
import gridIcon from '../static/img/gridIcon.png'
import {usePrismicDocumentByUID} from '@prismicio/react'
import Skills from '../components/SharedComponents/GoogleParts/Skills';

const IntroSection = styled.div`
    height:100vh;
    h2{
        position:absolute;
        bottom: 1rem;
        left: 42.5vw;
        right: 42.5vw;
        font-weight:200;
        animation: bounce 2s infinite;
        text-align:center;
    }
    @keyframes bounce{
        50%{transform: translateY(20px)}
    }
`

const TopBar = styled.header`
        font-size:0.9rem;
        display: flex;
        flex-direction: row;
        width:100%;

    .headerTexts{
        display: flex;
        flex-direction: row;
        justify-content:space-between;
        width: 95%;

            span {
                display: flex;
                flex-direction: row;
                margin-top: 10px;
                margin-left: 10px;
                    p{
                        cursor:pointer;
                        margin: auto 10px
                        }
                }

            span:nth-child(2){
                ${'' /* margin-right: 100px */}
                }

        }

        .headerIcons{
            display:flex;
            flex-direction:row;
            justify-self: end;
            width:8em;
            margin: 10px auto auto auto;
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


const MidSection = styled.div`
        position:relative;
        display:flex;
        flex-direction:column;
        margin:auto;
        padding:0px;
        width: 80vw;
`

const Logo = styled.img`
        position:relative;
        display:flex;
        flex-direction:column;
        margin: 25vh auto 0px auto;
        width: 400px;
        max-width:30vw;
        height: auto;
        object-fit:contain;
`

const SearchBar = styled.div`
        display:flex;
        margin: 10px auto;
        min-width:300px;
        width: 40vw;
        height: 2.5rem;
        border-radius: 2em;
        border: 1px solid rgba(0,0,0,0.2);
        background:none;

    span{
        z-index:1;
    }

    p{
        margin:6px 20px 10px 25px;
        width:90%;
        height: 1.8rem;
        text-align: center;
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

const Buttons= styled.div`
        display:flex;
        flex-direction:row;
        margin: 20px auto;
        width:fit-content;
        justify-items:center;
    button{
        margin: 0px 10px;
        padding: 13px;
        width: 150px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        background: rgba(0,0,0,0.05);
        border: 1px solid rgba(0,0,0,0);
    }
    button:hover{
        border: 1px solid lightgrey;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 2px 0px;
    }
`

function HomePage() {

  return (
      <>
        <IntroSection >
            <TopBar>
                <div className='headerTexts'>
                    <span><p>CV</p><p>Linkedin</p></span>
                    <span><p>Email</p><p>GitHub</p></span>
                </div>
                <div className='headerIcons'>
                    <Skills/>
                    <img className='icons' src={googleUserIcon} alt="" />
                </div>
            </TopBar>
            <MidSection>
                <Logo src={WebSearchLogo}/>
                <SearchBar>
                    <i className="searchIcon fa-solid fa-magnifying-glass"></i>
                    <p>Looking for a Junior / Mid - Level Front-End software developer? </p>
                </SearchBar>
                <Buttons>
                    <button>Search</button>
                    <button>Contact Me!</button>
                </Buttons>
            </MidSection>
            <h2>Scroll Down to see more!</h2>
        </IntroSection>
      </>

  )
}

export default HomePage



      