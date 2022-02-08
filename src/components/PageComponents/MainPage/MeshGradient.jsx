import React from 'react';
import styled from 'styled-components';
import {colors} from '../../../styles.js'





function MeshGradient() {
        const AnimatedMesh = styled.div`
        position:absolute;
        top: 0;
        left:0;
        display: flex;
        flex-direction:row;
        flex-wrap: wrap;
        width:90vw;
        height: 90vh;
        top: 5vh;
        left: 5vw;
        display:static;
        ${'' /* border: 1px solid black; */}
        ${'' /* border-radius: 0px 0px 15px 15px; */}
        border-radius: 15px;
        object-fit: contain;
        z-index:-100;
        overflow: hidden;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

        .meshBox{
            position: absolute;
            border-radius: 50%;
            animation: gradient 6s infinite;
        }

        @keyframes gradient{
            50%{
                transform: scaleY(1.5) scaleX(1.2);
            transition-timing-function: ease-in-out;

            }

        }

        .meshBox:nth-child(1) {
            width: 100%;
            height: 100%;
            top:0%;
            left:0%;
            background:#020202;
            z-index:-90;
        }
        .meshBox:nth-child(2) {
            width: 80%;
            height: 80%;
            top:0%;
            left:50%;
            background:#4ECCA3;
        }
        .meshBox:nth-child(3) {
            width: 100%;
            height: 100%;
            top:50%;
            left:-50%;
            background:#00ff9d;
        }
        .meshBox:nth-child(4) {
            width: 100%;
            height: 100%;
            top:30%;
            left:70%;
            background:#16DB65;
        }
        .meshBox:nth-child(5) {
            width: 100%;
            height: 100%;
            top:30%;
            left:70%;
            background:#ccff33;
        }
        .meshBox:nth-child(6) {
            width: 100%;
            height: 100%;
            top:-50%;
            left:-50%;
            background:#058C42;
        }

        &:after{
            content: "";
            position: absolute;
            height: 100vh;
            width: 100vw;
            backdrop-filter: blur(150px);
            ${'' /* filter: blur(80); */}
        }
        `

  return (
      <> 
    <AnimatedMesh>
        <div className='meshBox'></div>
        <div className='meshBox'></div>
        <div className='meshBox'></div>
        <div className='meshBox'></div>
        <div className='meshBox'></div>
        <div className='meshBox'></div>
    </AnimatedMesh>
      </>
  )
}

export default MeshGradient;
