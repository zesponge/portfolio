import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Suspense, useState } from 'react'
import Loader from '../components/Loader'
import Island from "../models/Island.jsx"
import Sky from "../models/Sky.jsx"
import Bird from "../models/Bird.jsx";
import Plane from "../models/Plane.jsx"
import HomeInfo from '../components/HomeInfo.jsx'
import Intro from "../components/Intro.jsx"

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);

  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0,-6.5,-43];
    let rotation = [0.1,4.7,0];

    if (window.innerWidth < 768) {
      screenScale = [.9,.9,.9];
    } else {
      screenScale = [1,1,1];
    }

    return [screenScale, screenPosition, rotation];
  }

  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [1.5,1.5,1.5];
      screenPosition = [0,-1.5,0];
    } else {
      screenScale = [3,3,3];
      screenPosition = [0,-4,-4];
    }

    return [screenScale, screenPosition];
  }

  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();
  const [planeScale, planePosition] = adjustPlaneForScreenSize();
  return (
    <div>
      {/* <Intro/> */}
      <section className='w-full h-screen relative'>

        <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
          {currentStage && <HomeInfo currentStage={currentStage}/>}
        </div>

        <Canvas 
        className={`w-full h-screen bg-transparent' ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
        camera={{ near: 0.1, far: 1000  }}>
          <Suspense fallback={<Loader/>}>
            <directionalLight position={[1,1,1]} intensity={.5}/> //intensity 2 might be better
            <ambientLight intensity={0.5}/>
            <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1}/>

            <Bird/>
            <Sky
              isRotating={isRotating}/>
            <Island 
              position={islandPosition}
              scale={islandScale}
              rotation={islandRotation}
              isRotating={isRotating}
              setIsRotating={setIsRotating}
              setCurrentStage={setCurrentStage}
            />
            <Plane
              position={planePosition}
              scale={planeScale}
              isRotating={true}
              rotation={[0,20,0]}/>
          </Suspense>

        </Canvas>


      </section>
    </div>
  )
}

export default Home
