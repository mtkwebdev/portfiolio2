import React from 'react';
import styled from 'styled-components';
import MeshGradient from '../components/PageComponents/MainPage/MeshGradient';
import meshImage from '../static/img/mintyMesh2.png'

const HeaderTitle = styled.h1`
posiiton: relative;
display: flex;
flex-direction: column;
justify-self:start;
padding: 15px;
margin: 0px;
color: white;
font-size: 2rem;
width: 100vw;
${'' /* text-align:center; */}
${'' /* background: rgba(255,255,255,0.2); */}
`

const MainSubtitle = styled.h2`
posiiton: relative;
display: flex;
flex-direction: column;
padding: 15px;
margin: -2rem 0px;
${'' /* margin: 10% auto; */}
color: white;
font-size: 1rem;
width: 60vw;
${'' /* text-align:center; */}
${'' /* background: rgba(255,255,255,0.2); */}
`

const StaticMeshGradient = styled.img`
position:absolute;
top: 0px;
width: 100vw;
height: 100vh;
border-radius: 0px 0px 10px 10px ;
margin:0;
object-fit: cover;
z-index: -100;
`

const MainContent = styled.section`
    width: 90vw;
    margin: 86vh auto
`

const Introduction = styled.div`
        background: ##e4e6eb;
        width: 50%;
        ${'' /* border: 1px solid black; */}
        border-radius: 2em;
        padding: 10px 15px;
        text-align: justify;
        backdrop-filter: blur(20px);
        box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.1) 0px 1px 3px -1px;
        background: rgba(225,225,225,0.5);
    h1{
        padding:0px 5px;
        ${'' /* backdrop-filter: blur(20px); */}
        }
    p{
        padding: 0px 5px;
        ${'' /* backdrop-filter: blur(20px); */}
        }
`



function MainPage() {
  return (
    <>
        <HeaderTitle>MOHAMMAD KAWADRI</HeaderTitle>
        <MainSubtitle>Front End Web Developer</MainSubtitle>
        <StaticMeshGradient src={meshImage}/>
        {/* <MeshGradient/> */}
        <MainContent>
            <Introduction>
                <h1>Introduction</h1>
                <p>I am a self-taught Junior Front End Developer that is resourceful, approachable, proactive, and self-reliant.

I have experience working independently and as part of a team, providing me with numerous transferable skills throughout my career that have helped me reach professional success and many personal accomplishments.

I have been involved with Front End Development since 2019; using HTML, CSS (SCSS), and JavaScript. I also have experience using frameworks such as React and Vue, additional to backend technologies such as Node.js, Express.js, mongoDB, and MySQL. I have used Python briefly for a cryptocurrency project, and I am currently working towards a PHP and MYSQL certification. I aim in the future to implement Test Driven Development in my work and become more proficient with backend development.

I am always ready to take on challenges and like to stay busy in my spare time through learning and proactive hobbies, including Web development, trading Crypto-Currency / Stocks and Shares, making music, cooking, and playing online collaborative team games. I also cycle to keep fit, and I am a keen swimmer.</p>
            </Introduction>
        </MainContent>
    </>
  )
}

export default MainPage;
