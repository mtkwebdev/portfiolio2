import React from 'react'
import styled from 'styled-components'
import {usePrismicDocumentByUID} from '@prismicio/react'
import WebSearchLogo from '../../../static/img/websearchLogo.png'
import googleUserIcon from '../../../static/img/googleUserIcon.png'
import Skills from '../../SharedComponents/GoogleParts/Skills'

const IntroSection = styled.div`
    height:100vh;
    h2{
        position:absolute;
        bottom: 1rem;
        width:100vw;
        ${'' /* left: 42.5vw;
        right: 42.5vw; */}
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
                    .text{
                        display: flex;
                        flex-direction: row;
                        cursor:pointer;
                        margin: auto 10px;
                        width: fit-content;
                        text-decoration:none;
                        color:black;
                        }
                    ${'' /* .text:nth-child(1), .text:nth-child(2){
                        margin-right: 80%;
                        justify-self: flex-start;
                        background: blue;
                    }
                    .text:nth-child(3), .text:nth-child(4){
                        justify-self: flex-end;
                        background: red;
                    } */}
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
        cursor: default;
        a{
            cursor:default;
        }
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
        cursor:pointer;
`

const SearchBar = styled.div`
        display:flex;
        margin: 10px auto;
        border-radius: 2em;
        border: 1px solid rgba(0,0,0,0.2);
        background:none;
        width: 50%;

    span{
        z-index:1;
    }
    input{width: 90%;
    margin: auto;
    background: white;
    border:none;}

    p{
        margin:6px 20px 10px 25px;
        width:90%;
        height: auto;
        text-align: center;
        font-size:1.2rem;
        border:none;
        outline: none;
        background:none;
        overflow: none;
        @media only screen and (max-width: 786px){
            font-size:0.8rem;
        }
        @media only screen and (max-width: 500px){
            font-size:0.5rem;
        }
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
        min-width: 200px;
        width: 400px;
        justify-content:space-between;
        @media only screen and (max-width: 600px){
            width: 100%;
        }
        a{
            width: fit-content;
            margin: 0px;
            padding: 0px;
            .buttons{
                padding: 13px;
                width: 150px;
                border: none;
                border-radius: 5px;
                cursor: pointer;
                background: rgba(0,0,0,0.05);
                border: 1px solid rgba(0,0,0,0);
                @media only screen and (max-width: 600px){
                    width: 100px;
                    margin: 10px;
                    padding: 5px;
                }
            }
            .buttons:hover{
                border: 1px solid lightgrey;
                box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 2px 0px;
            }
        }
`

function HomePage() {
    const [Links] = usePrismicDocumentByUID('links', 'mylinks')
  return (
      <>
        <IntroSection id='home' className='mainBackground' >
            <TopBar>
                <div className='headerTexts'>
                    <span>
                        <a className='text' target="_blank" rel="noreferrer" href={Links ? Links.data.links_group[0].link[0].text : ''}>{Links ? Links.data.links_group[0].link_name[0].text : ''}</a>
                        <a className='text' target="_blank" rel="noreferrer" href={Links ? Links.data.links_group[1].link[0].text : ''}>{Links ? Links.data.links_group[1].link_name[0].text : ''}</a>
                    </span>
                    <span>
                        <a className='text' target="_blank" rel="noreferrer" href={Links ? Links.data.links_group[2].link[0].text : ''}>{Links ? Links.data.links_group[2].link_name[0].text : ''}</a>
                        <a className='text' target="_blank" rel="noreferrer" href={Links ? Links.data.links_group[3].link[0].text : ''}>{Links ? Links.data.links_group[3].link_name[0].text : ''}</a>
                    </span>
                </div>
                <div className='headerIcons'>
                    <Skills/>
                    <img className='icons' src={googleUserIcon} alt="" />
                </div>
            </TopBar>
            <MidSection>
                <a href="#home"><Logo src={WebSearchLogo}/></a>
                <SearchBar>
                    <i className="searchIcon fa-solid fa-magnifying-glass"></i>
                    <p>Looking for a Junior / Mid - Level Front-End software developer? </p>
                    {/* <input disabled value="Looking for a Junior / Mid - Level Front-End software developer?" /> */}
                </SearchBar>
                <Buttons>
                    <a href="#results"><button className='buttons'>Search</button></a>
                    <a href="/#"><button className='buttons'>Contact Me!</button></a>
                </Buttons>
            </MidSection>
            <h2>Scroll Down to see more!</h2>
        </IntroSection>
      </>

  )
}

export default HomePage



      