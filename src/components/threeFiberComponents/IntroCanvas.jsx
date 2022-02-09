import React, { Suspense, useRef } from 'react'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Torus} from '@react-three/drei'
import styled from 'styled-components'


function IntroCanvas({width,height}) {
  const CanvasContainer = styled.div`
    position: relative; 
    display: flex;
    width: ${width||"100vw"};
    height: ${height||"100vw"};
    margin: 5vh auto;
    border: 1px solid black;
    border-radius: 20px;
    background: black;
  `

  const Rafter = (props) => {

    const ref = useRef(group => {
      group.rotateOnAxis(props.axis,props.angle)
    }, [])
  
    return (
      <group ref={ref}>
        <Torus position={[1,-10,0]} args={[10, 4, 50, 16 ]}>
              <meshPhongMaterial attach="material" wireframe={true} color="green"/>
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
            {/* <TubeGeo/> */}
            <Rafter axis={new THREE.Vector3(1, 0, 0)} angle={Math.PI/2} />
        
            {/* <Dolly/> */}
            {/* {console.log()} */}
          <OrbitControls enablePan={true} enableZoom={true} enableRotate={true}/>
        </Canvas>
      </Suspense>
    </CanvasContainer>
  )
}

export default IntroCanvas;
