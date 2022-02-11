import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import WebSearchLogo from '../static/img/websearchLogo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import googleUserIcon from '../static/img/googleUserIcon.png'
import gridIcon from '../static/img/gridIcon.png'
import {usePrismicDocumentByUID} from '@prismicio/react'

const ResultsSection = styled.div`
    height:100vh;
`



const Skills = styled.div`
        position:absolute;
        top: 100vh;
        z-index:5;
        display:grid;
        grid-template-columns: repeat(3,1fr);
        grid-template-rows: repeat(10,120px);
        grid-template-areas: "title title title" 
        "...";
        overflow: scroll;
        top:5em;
        right:1em;
        width: 300px;
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

            span {
                display: flex;
                flex-direction: row;
                margin: 0px 40px;
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

function ResultsPage() {
    const [mySkills] = usePrismicDocumentByUID('skills', 'skills')
    const [showSkills, setShowSkills] = useState(false)

  return (
      <>
        {/* <ResultsSection onClick={()=> showSkills === !showSkills ? setShowSkills(showSkills): setShowSkills(!showSkills)}> */}
        <ResultsSection >
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
                    <img className='icons' src={gridIcon} alt="" onClick={()=>setShowSkills(!showSkills)}  />

                    <img className='icons' src={googleUserIcon} alt="" />
                </div>
            </BottomBar>
            {showSkills ? (
                <Skills>
                    {/* <h1>My Skills</h1> */}
                    {  
                        mySkills && 
                            mySkills.data.skills.map((data)=>{
                                return (
                                    <div  className='gridBox' >
                                    {console.log(data.skill_name[0].text)}
                                    {console.log(data.skill_image.url)}
                                        <img className="skillImages" key={"a" + data.skill_name[0].text} src={data.skill_image.url} alt="" />
                                        <p className="skillText" key={"b" + data.skill_name[0].text}>{data.skill_name[0].text}</p>
                                    </div>
                                )
                            })
                    }
                </Skills>
            ):(<div></div>)}
        </ResultsSection>
      </>

  )
}

export default ResultsPage