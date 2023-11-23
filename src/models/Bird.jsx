import React from "react";
import { useGLTF } from "@react-three/drei";
import birdScene from "../assets/3d/Bird.glb";

const Bird = () => {
    const {scene, animations} = useGLTF(birdScene);
    return (
        <mesh position={[-5,2,1]} scale={[.003,.003,.003]}>
            <primitive object={scene}/>
        </mesh>
    )
}

export default Bird;