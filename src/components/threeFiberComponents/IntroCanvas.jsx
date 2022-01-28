import ReactDOM from 'react-dom'
import React, { Suspense, useRef, useState } from 'react'
import * as THREE from 'three'
import { Canvas, useLoader, useFrame } from '@react-three/fiber'
import { OrbitControls, shaderMaterial, Torus} from '@react-three/drei'
import styled from 'styled-components'
// import glsl from 'babel-plugin-glsl/macro'

// import image from '../../static/img/cpu.png'
import image from '../../static/img/matrix-code-still.jpeg'


function IntroCanvas() {
  const CanvasContainer = styled.div`
    position: relative; 
    display: flex;
    width: 100vw;
    height: 90vh;
    margin: 5vh auto;
    border: 1px solid black;
    border-radius: 20px;
    background: black;
  `

  // const ColorMaterial = shaderMaterial(
  //   { time: 0, color: new THREE.Color(0.2, 0.0, 0.1) },
  //   glsl`varying vec2 vUv;
  //     void main() {
  //       vUv = uv;
  //       gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  //     }`,
  //   glsl`uniform float time;
  //     uniform vec3 color;
  //     varying vec2 vUv;
  //     void main() {
  //       gl_FragColor.rgba = vec4(0.5 + 0.3 * sin(vUv.yxx + time) + color, 1.0);
  //     }`
  // )

  // extend({ ColorMaterial })

  const TubeGeo = ()=>{
    const [curve] = useState(() => {
      // Create an empty array to stores the points
      let points = []
      // Define points along Z axis
      for (let i = 0; i < 10; i += 1)
      points.push(new THREE.Vector3(Math.random(), Math.random(), (i / 0.05)))
      return new THREE.CatmullRomCurve3(points)
    })
    
    const texture = useLoader(THREE.TextureLoader, image);



    return (
      <mesh>
        <tubeGeometry  position={[0,0,0]} attach="geometry" args={[curve, 2, 3, 20, false]} />
        <meshStandardMaterial attach="material"  side={THREE.BackSide}
         map={texture} 
        //  wireframe={true} 
        //  metalness={0.4}
          />
      </mesh>

    )
  }

  const  Dolly = () => {
    // This one makes the camera move in and out
    useFrame(({ clock, camera }) => {
      camera.position.z -= 0.01
    })
    return null
  }

  return (
    <CanvasContainer id='CanvasContainer'>
    <Suspense fallback={null}>
    <Canvas camera={{ fov: 75, position: [0, 0, 185] }} >
    <ambientLight intensity={2}/> 
    <pointLight position={[0,0,0]} intensity={2}/>
      <TubeGeo/>
    <OrbitControls enablePan={false} enableZoom={true} enableRotate={false}/>
      <Dolly/>
    </Canvas>
    </Suspense>
  </CanvasContainer>
  )
}

export default IntroCanvas;
