/*
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/foxs-islands-163b68e09fcc47618450150be7785907
Title: Fox's islands
*/

import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { a } from "@react-spring/three";

import islandScene from "../assets/3d/island.glb";

const Island = ({ isRotating, setIsRotating, ...props}) => {
  const islandRef = useRef();

  const { gl, viewport } = useThree();
  const { nodes, materials } = useGLTF(islandScene);

  const lastX = useRef(0);
  const rotationSpeed = useRef(0);
  const dampingFactor = 0.95;

  const handleMouseDown = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(true);

    const clientX = event.touches 
      ? event.touches[0].clientX 
      : event.clientX;

    lastX.current = clientX;
  }

  const handleMouseUp = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(false);
  }

  const handleMouseMove = (e) => {
    e.stopPropagation();
    e.preventDefault();

    if (isRotating){
      const changeRotationSpeed = 0.01; //change variable to change rotation speed

      const clientX = event.touches 
        ? event.touches[0].clientX 
        : event.clientX;
  
      const delta = (clientX - lastX.current) / viewport.width;
      islandRef.current.rotation.y += delta * changeRotationSpeed * Math.PI;
      lastX.current = clientX;
      rotationSpeed.current = delta * changeRotationSpeed * Math.PI;
    }
  }

  const handleKeyDown = (e) => {
    const changeRotationSpeed = 0.01; //change variable to change rotation speed
    if(e.key === 'arrowLeft'){
      if (!isRotating){
        setIsRotating(true);
        islandRef.current.rotation.y += changeRotationSpeed * Math.PI; //change that variable to change rotation speed
      } else if (e.key === "arrowRight"){
        setIsRotating(true);
        islandRef.current.rotation.y -= changeRotationSpeed * Math.PI; //change that variable to change rotation speed
      }
    }
  }

  const handleKeyUp = (e) => {
    if (e.key === 'arrowLeft' || e.key === 'arrowRight'){
      setIsRotating(false);
    }
  }

  useFrame(() => {
    if(!isRotating){
      rotationSpeed.current *= dampingFactor; //slows down rotation when stop rotating

      if (Math.abs(rotationSpeed.current) < 0.001){
        rotationSpeed.current = 0;
      }

      islandRef.current.rotation.y += rotationSpeed.current;
    } else {
      const rotation = islandRef.current.rotation.y;
      const normalizedRotation = ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

      // Set the current stage based on the island's orientation
      switch (true) {
        case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
          setCurrentStage(4);
          break;
        case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
          setCurrentStage(3);
          break;
        case normalizedRotation >= 2.4 && normalizedRotation <= 2.6:
          setCurrentStage(2);
          break;
        case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
          setCurrentStage(1);
          break;
        default:
          setCurrentStage(null);
      }
    }
  })

  useEffect(() => {
    const canvas = gl.domElement;
    canvas.addEventListener('mousedown', handleMouseDown);
    canvas.addEventListener('mouseup', handleMouseUp);
    canvas.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);
    
    return () => {
      canvas.removeEventListener('mousedown', handleMouseDown);
      canvas.removeEventListener('mouseup', handleMouseUp);
      canvas.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    }
  }, [gl, handleMouseDown, handleMouseDown, handleMouseMove])

  return (
    <a.group ref={islandRef} {...props}>
      <mesh
        geometry={nodes.polySurface944_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface945_tree1_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface946_tree2_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface947_tree1_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface948_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface949_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.pCube11_rocks1_0.geometry}
        material={materials.PaletteMaterial001}
      />
    </a.group>
  );
}

export default Island;