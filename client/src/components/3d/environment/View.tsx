import Map from "./Map"
import Sky from "./Sky"
import * as THREE from "three"
import { OrbitControls, PerspectiveCamera } from "@react-three/drei"
import { useThree, useFrame, } from "@react-three/fiber"
// ----------------------------------------------------
const View = () => {
  const {camera, gl, scene} = useThree()

  useFrame(()=>{
    scene.background = new THREE.Color("#000000")
  })
// --------------------------------------------------
  return (
    <>
      {/* --CAMERA+SCENE-- */}
      <axesHelper args={[50, 50, 50]} />
      <OrbitControls
        enablePan={false}
        enableDamping={true}
        maxPolarAngle={Math.PI / 2}
        enableZoom={true}
        target={[0, 0, 0]}
        maxDistance={35}
        makeDefault={true}
      />
      <PerspectiveCamera
        fov={70}
        far={10000}
        makeDefault={true}
        position={[-30, 8, 0]}
      />

      {/* --LIGHT-- */}
      <ambientLight intensity={50} color={[0.2, 0.3, 0.5]} />
      <spotLight intensity={400} penumbra={0} angle={2} position={[0, 15, 0]} />
      <spotLight
        intensity={1000}
        penumbra={0.5}
        angle={2}
        position={[25, 10, 0]}
      />
      <spotLight position={[0, 7, 20]} penumbra={1} angle={1} intensity={400} />
      <spotLight
        position={[-20, 10, 0]}
        penumbra={0.5}
        angle={1}
        intensity={1000}
      />
      <spotLight
        position={[0, 5, -25]}
        penumbra={0.5}
        angle={1}
        intensity={1500}
      />
      <spotLight position={[0, 8, 0]} intensity={2000} penumbra={1} />

      {/* --COMPONENT-- */}
      {/* <Sky/> */}
      <Map />
    </>
  );
}

export default View