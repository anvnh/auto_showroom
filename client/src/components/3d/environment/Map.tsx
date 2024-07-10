import { useEffect } from "react";
import {} from "@react-three/drei";
import { useLoader, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
//----------------
const Map = () => {
  const gltf = useLoader(GLTFLoader, "/3d/environment/bru/scene.gltf");

  useEffect(() => {
    gltf.scene.scale.set(5,20,5);
    gltf.scene.position.set(-8, -1, 0);
  }, [gltf]);

  useFrame(() => {
    gltf.scene.traverse((object) => {
      object.castShadow = true;
      object.receiveShadow = true;
    });
  });
//------------------
  return <primitive object={gltf.scene} />;
};
export default Map;
