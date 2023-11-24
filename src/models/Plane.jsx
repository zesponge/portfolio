import React, { useEffect, useRef } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
import planeScene from "../assets/3d/Plane.glb";

const Plane = ({isRotating, ...props}) => {
    const ref = useRef();
    const {scene, animations} = useGLTF(planeScene);
    const {actions} = useAnimations(animations, ref);

    useEffect(() => {
        console.log(actions['Take 001']);
        if(isRotating){
            actions['Take 001'].play();
        }else{
            actions['Take 001'].stop();
        }
    }, [actions, isRotating])

    return (
        <mesh {...props}>
            <primitive object={scene}/> 
        </mesh>
    )
}

export default Plane;