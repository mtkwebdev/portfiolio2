import ReactDOM from 'react-dom'
import React, { Suspense, useRef, useState } from 'react'
import * as THREE from 'three'
import { Canvas, extend } from '@react-three/fiber'
import { OrbitControls, shaderMaterial, Torus} from '@react-three/drei'
import styled from 'styled-components'
import glsl from 'babel-plugin-glsl/macro'

function IntroCanvas() {
  const CanvasContainer = styled.div`
    position: relative; 
    display: flex;
    width: 50vw;
    height: 80vh;
    margin: 10vh auto;
    ${'' /* margin: auto auto; */}
    border: 1px solid black;
    border-radius: 20px;
    ${'' /* background: black; */}
  `

  const ColorMaterial = shaderMaterial(
    { time: 0, color: new THREE.Color(0.2, 0.0, 0.1) },
    glsl`varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`,
    glsl`uniform float time;
      uniform vec3 color;
      varying vec2 vUv;
      void main() {
        gl_FragColor.rgba = vec4(0.5 + 0.3 * sin(vUv.yxx + time) + color, 1.0);
      }`
  )

  extend({ ColorMaterial })
 
  return (
      <CanvasContainer id='CanvasContainer'>
        <Canvas >
        <ambientLight /> 
        <Torus args={[10,3,16,100]}>
        <colorMaterial side={THREE.DoubleSide}/>
        </Torus>
        <OrbitControls enablePan={true} enableZoom={true} enableRotate={true}/>
        </Canvas>
      </CanvasContainer>
   
  )
}

export default IntroCanvas;
