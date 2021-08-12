import React, { Suspense, useEffect, useRef } from 'react'
import  { Canvas, extend, useThree, useFrame } from '@react-three/fiber'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Model from './Model'

extend({ OrbitControls });

const CameraControls = () => {
  
  const {
    camera,
    gl: { domElement },
  } = useThree();


  camera.position.z = 0.19
   camera.position.y = 0.25

  
  const controls = useRef();
  
  
  
  useFrame(() => {
  
  controls.current.update()
  
  });
  

  return (
    <orbitControls
      ref={controls}
      args={[camera, domElement]}
      autoRotate={true}
      enableZoom={true}
    />
  );
};

const Cup = () => {


  return (
<div style={{height: '100%', width: '100%'}} >
    <Canvas>
      <CameraControls />
      <ambientLight />
      <Suspense fallback={null}>
        <Model position={[0, 0, 0]} rotation={[0, 0, 0]} />
      </Suspense>
    </Canvas>
</div>
  )
}

export default Cup
