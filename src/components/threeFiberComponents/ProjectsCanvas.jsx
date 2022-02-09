import React, { Suspense, useRef } from 'react'
import * as THREE from 'three'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Torus} from '@react-three/drei'
import styled from 'styled-components'


function ProjectsCanvas({width,height,margin}) {
  const CanvasContainer = styled.div`
    position: relative; 
    display: flex;
    width: ${width||"100vw"};
    height: ${height||"100vh"};
    margin: ${margin || "auto auto"};
    ${'' /* border: 1px solid black;
    border-radius: 20px; */}
    background: black;
    z-index:-2;
  `

  const AnimatedTorus = () => {
    const torusSpin = useRef();
    useFrame(({clock})=>{
      // torusSpin.current.rotation.x=  (Math.PI*4) +  clock.getElapsedTime()
      // torusSpin.current.rotation.y = 0
      torusSpin.current.position.x = -9
      torusSpin.current.position.y = -1
      torusSpin.current.position.z = -3

      torusSpin.current.rotation.x = 1.5
      torusSpin.current.rotation.y = 0
      torusSpin.current.rotation.z = clock.getElapsedTime() * 0.2
    })

    return (
      <group ref={torusSpin}>
        <Torus  args={[10, 3, 20, 30 ]}>
              <meshPhongMaterial attach="material" wireframe={true} color="green" side={THREE.BackSide}/>
            </Torus> 
      </group>
    )
  
  }

  return (
    <CanvasContainer  id='CanvasContainer'>
      <Suspense fallback={null}>
        <Canvas camera={{fov: 60}}>
          <ambientLight intensity={2}/> 
          <pointLight position={[0,0,0]} intensity={2}/>
            <AnimatedTorus/>
          <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}/>
        </Canvas>
      </Suspense>
    </CanvasContainer>
  )
}

export default ProjectsCanvas;
