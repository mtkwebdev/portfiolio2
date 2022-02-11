import React, {useState} from 'react'
import styled from 'styled-components'
import {usePrismicDocumentByUID} from '@prismicio/react'
import gridIcon from '../../../static/img/gridIcon.png'


const Container = styled.div`
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
        width: 355px;
        height:29rem;
        border-radius: 0.5em;
        ${'' /* background:grey; */}
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        .gridBox{
            display:flex;
            flex-direction:column;
            ${'' /* padding:10px; */}
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
                width: 100px;
                align-self: start;
                text-align:center;
            }
        }

`

function Skills() {
    const [mySkills] = usePrismicDocumentByUID('skills', 'skills')
    const [showSkills, setShowSkills] = useState(false)
  return (
      <>
                    <img className='icons' src={gridIcon} alt="" onClick={()=>setShowSkills(!showSkills)}  />
            {showSkills ? (
        <Container>
            <div>
                <h1 className='title'>My skills</h1>
                <div className='grid'>
                    {
                    mySkills && 
                        mySkills.data.skills.map((data)=>{
                            return (
                                <div  className='gridBox' >
                                {console.log(data)}
                                {/* {console.log(data.skill_name[0].text)}
                                {console.log(data.skill_image.url)} */}
                                    <img className="skillImages" key={"a" + data.skill_name[0].text} src={data.skill_image.url} alt="" />
                                    <p className="skillText" key={"b" + data.skill_name[0].text}>{data.skill_name[0].text}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </Container>
                    ):(<div></div>)}
      </>
  )
}

export default Skills