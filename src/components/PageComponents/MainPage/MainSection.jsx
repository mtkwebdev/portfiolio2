import React from 'react'
import styled from 'styled-components';

function MainSection() {

    const MainSection = styled.main`
            ${'' /* position:relative; */}
            display:flex;
            flex-direction: row;
            margin: 4em auto;
            width:90vw;
`
    const Introduction = styled.div`
            ${'' /* position:relative; */}
            display:inline-block;
            background: ##e4e6eb;
            width: 70%;
            ${'' /* border: 1px solid black; */}
            ${'' /* margin: -80vh  4em; */}
            border-radius: 2em;
            padding: 10px 15px;
            text-align: justify;
            backdrop-filter: blur(2px);
            box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.1) 0px 1px 3px -1px;
            ${'' /* background: rgba(225,225,225,0.5); */}
        h1{
            padding:0px 5px;
            ${'' /* backdrop-filter: blur(20px); */}
            }
        p{
            font-size:1.2rem;
            padding: 0px 5px;
            ${'' /* backdrop-filter: blur(20px); */}
            }
    `

  return (
    <MainSection>
    {/* <ProjectsCanvas width={"100vw"} height={"100vh"} margin={"-10px 0px 0px 0px"}/> */}
        <Introduction>
            <h1>Introduction</h1>
            <p>I am a self-taught Junior Front End Developer that is resourceful, approachable, proactive, and self-reliant.
            I have experience working independently and as part of a team, providing me with numerous transferable skills throughout my career that have helped me reach professional success and many personal accomplishments.
            I have been involved with Front End Development since 2019; using HTML, CSS (SCSS), and JavaScript. I also have experience using frameworks such as React and Vue, additional to backend technologies such as Node.js, Express.js, mongoDB, and MySQL. I have used Python briefly for a cryptocurrency project, and I am currently working towards a PHP and MYSQL certification. I aim in the future to implement Test Driven Development in my work and become more proficient with backend development.
            I am always ready to take on challenges and like to stay busy in my spare time through learning and proactive hobbies, including Web development, trading Crypto-Currency / Stocks and Shares, making music, cooking, and playing online collaborative team games. I also cycle to keep fit, and I am a keen swimmer.</p>
        </Introduction>
    </MainSection>
  )
}

export default MainSection