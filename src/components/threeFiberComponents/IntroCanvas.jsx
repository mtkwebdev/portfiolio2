import ReactDOM from 'react-dom'
import React, { Suspense, useRef, useState } from 'react'
import * as THREE from 'three'
import { Canvas, useLoader, useFrame, extend, useThree, } from '@react-three/fiber'
import { OrbitControls, shaderMaterial, Torus} from '@react-three/drei'
import styled from 'styled-components'
// import glsl from 'babel-plugin-glsl/macro'

// import image from '../../static/img/cpu.png'
import image from '../../static/img/matrix-code-still.jpeg'


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
      // let points = []
      // // // Define points along Z axis
      // for (let i = 0; i < 10; i += 1)
      // points.push(new THREE.Vector3(Math.random(), Math.random(), (i / 0.05)))

      // // const points = new THREE.TorusKnotGeometry(10, 3, 100, 16 )
      // return new THREE.CatmullRomCurve3(points, true )

    })

    
    
    const texture = useLoader(THREE.TextureLoader, image);



    return (
      <mesh>
        <tubeGeometry  position={[0,0,0]} attach="geometry" args={[curve, 2, 3, 20, false]} />
        <meshStandardMaterial attach="material"  side={THREE.DoubleSide}
         map={texture} 
        //  wireframe={true} 
        //  metalness={0.4}
          />
      </mesh>

    )
  }

  
  // extend(THREE.Mesh)
  const  Dolly = () => {
    const geometry = new THREE.TorusKnotBufferGeometry( 10, 3, 100, 16 )
    const tube = new THREE.Mesh(geometry);
    
    const arr = tube.geometry.attributes.position.array
    const loop = useFrame(({ clock, camera }) => {
      const t = Math.floor(clock.getElapsedTime()*30)
      // const looptime = 10
      // const t = Math.floor((time / looptime) *100);
      // const t = 1
        // for (let i = 0; i < arr.length; i +=1 ){
          // const  pos1 = tube.position.x 
          // const  pos2 = tube.position.y
          // const  pos3 = tube.position.z
          // camera.position.x += tube.position.x 
          // camera.position.x += tube.position.x 
          // camera.position.x += tube.position.x 
          // const  pos1 = tube.geometry.attributes.position.array[(t*3)]
          // const  pos2 = tube.geometry.attributes.position.array[(t*3)+1]
          // const  pos3 = tube.geometry.attributes.position.array[(t*3)+2]
          // console.log(pos1)
          //  camera.position.set(pos1/-1, pos1/-1, pos2/-1);
          //  camera.position.set(pos1, pos2, pos3);
          //  camera.updateProjectionMatrix()
        // }
    })
    return loop
  }

  const CameraPath = ()=>{
    const geometry = new THREE.TorusKnotBufferGeometry( 10, 3, 100, 16 )
    const tube = new THREE.Mesh(geometry);
     console.log(tube)
  }
  CameraPath()

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
