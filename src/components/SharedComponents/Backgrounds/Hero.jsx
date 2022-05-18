import React from 'react'
import styled from 'styled-components'


function Hero(props) {
    const Container = styled.div`
    position: relative;
        width: 100%;
        height: auto;
        margin: auto;
        ${'' /* margin-bottom: 20px; */}
    `
    
    const Image = styled.div`
        background-image: url(${props.image$});
        background-size: cover;
        position: relative; /* Needed to position the cutout text in the middle of the image */
    `
    const Text = styled.div`
        background-color: rgba(255,255,255,1);
        color: black;
        mix-blend-mode: screen; /* This makes the cutout text possible */
        font-size: 10vw;
        text-align: center;
        margin: 80px auto;
        padding-top: 100px;
        width: 100%;
        height: 50vh;
        font-weight: 600;
    `
  return (
    <Container>
    <Image />
        <Text>{props.text}</Text>
    </Container>
  )
}

export default Hero