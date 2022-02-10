import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import WebSearchLogo from '../static/img/websearchLogo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import googleUserIcon from '../static/img/googleUserIcon.png'
import gridIcon from '../static/img/gridIcon.png'
import {usePrismicDocumentByUID} from '@prismicio/react'

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

const Skills = styled.div`

        h1{
            text-align:center;
            font-weight: 1rem;
            height: 2rem;
        }

        .grid{
            display:grid;
            grid-template-columns: repeat(3,1fr);
            grid-template-rows: repeat(7,120px);
            grid-template-areas: "title title title" 
            "...";
        }
        position:absolute;
        z-index:5;
        overflow: scroll;
        top:5em;
        right:1em;
        width: 320px;
        height:26rem;
        border-radius: 0.5em;
        ${'' /* background:grey; */}
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        .gridBox{
            display:flex;
            flex-direction:column;
            padding:5px;
            margin:auto;
            align-items: center;
            .skillImages{
                width: 50px;
                height:50px;
                object-fit:contain;
                margin-bottom: -10px;
            }
            .skillText{
                font-size: 0.8rem;
                width: 50px;
                align-self: start;
                text-align:center;
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
        width:400px;
        height: auto;
        object-fit:contain;
`

const SearchBar = styled.div`
        display:flex;
        margin: 10px auto;
        width: 40rem;
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
    const [mySkills] = usePrismicDocumentByUID('skills', 'skills')
    const [showSkills, setShowSkills] = useState(false)

  return (
      <>
        {/* <IntroSection onClick={()=> showSkills === !showSkills ? setShowSkills(showSkills): setShowSkills(!showSkills)}> */}
        <IntroSection >
            <TopBar>
                <div className='headerTexts'>
                    <span><p>CV</p><p>Linkedin</p></span>
                    <span><p>Email</p><p>GitHub</p></span>
                </div>
                <div className='headerIcons'>
                    <img className='icons' src={gridIcon} alt="" onClick={()=>setShowSkills(!showSkills)}  />

                    <img className='icons' src={googleUserIcon} alt="" />
                </div>
            </TopBar>
                {showSkills ? (
                <Skills>
                <h1 className='title'>My skills</h1>
                <div className='grid'>
                    {
                    mySkills && 
                        mySkills.data.skills.map((data)=>{
                            return (
                                <div  className='gridBox' >
                                {console.log(data.skillname[0].text)}
                                {console.log(data.skillimage.url)}
                                    <img className="skillImages" key={"a" + data.skillname[0].text} src={data.skillimage.url} alt="" />
                                    <p className="skillText" key={"b" + data.skillname[0].text}>{data.skillname[0].text}</p>
                                </div>
                            )
                        })
                    }
                </div>
                
                </Skills>
                    ):(<div></div>)}
            <MidSection>
                <Logo src={WebSearchLogo}/>
                <SearchBar>
                    <i className="searchIcon fa-solid fa-magnifying-glass"></i>
                    <p>Looking for a Junior / Mid - Level Front-End software developer? </p>
                </SearchBar>
                <Buttons>
                    <button>Download My CV</button>
                    <button>Contact Me!</button>
                </Buttons>
            </MidSection>
            <h2>Scroll Down to see more!</h2>
        </IntroSection>
      </>

  )
}

export default HomePage