import React, {useState} from 'react'
import styled from 'styled-components'
import {usePrismicDocumentByUID} from '@prismicio/react'
import gridIcon from '../../../static/img/gridIcon.png'

const Data = styled.div`
        position:fixed;
        z-index:5;
        overflow: scroll;
        top:5em;
        right:1em;
        width: 355px;
        height:29rem;
        border-radius: 0.5em;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        z-index: 10;

        h1{
            text-align:center;
            font-weight: 1rem;
            height: 2rem;
        }
        .grid{
            display:grid;
            grid-template-columns: repeat(3,1fr);
            grid-template-rows: repeat(7,120px);
        }
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
                    <img key={"skill" + Math.random()} className='icons' src={gridIcon} alt="" onClick={()=>setShowSkills(!showSkills)}  />
            {showSkills ? (
        <Data key={"Skill Data" + Math.random()} className='mainBackground' onMouseLeave={()=>{setShowSkills(!showSkills)}}>
            <div >
                <h1 key="skillTitle" className='title'>My skills</h1>
                <div key="skillGrid" className='grid'>
                    {
                    mySkills && 
                        mySkills.data.skills.map((data)=>{
                            return (
                                <div key={"GridBox" + data.skill_name[0].text} className='gridBox' >
                                    <img className="skillImages" key={"Picture" + data.skill_name[0].text} src={data.skill_image.url} alt="" />
                                    <p className="skillText" key={"Desc" + data.skill_name[0].text}>{data.skill_name[0].text}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </Data>
                    ):(<div></div>)}
      </>
  )
}

export default Skills