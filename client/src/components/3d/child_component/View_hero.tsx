import { Environment, OrbitControls, PerspectiveCamera, Reflector } from "@react-three/drei"
import * as THREE from "three"
import { SpotLight, } from "@react-three/drei"
const View_hero = () => {
    return (
        <>
            {/* <axesHelper args={[20]} /> */}
            {/* <Environment preset="sunset" /> */}
            <OrbitControls
                // makeDefault
                enableZoom={false}
                enablePan={false}
                maxPolarAngle={(Math.PI / 2) - 0.1}
            />
            <PerspectiveCamera
                makeDefault
                position={[0, 13, -20]}
                fov={50}
            />

            <mesh
                castShadow
                rotation={[-Math.PI / 2, 0, 0]}
            >
                <planeGeometry
                    args={[60, 150]}
                />
                <meshPhysicalMaterial
                    side={THREE.DoubleSide}
                    opacity={0.5}
                    color="#888"
                    roughness={0}
                    metalness={0}
                    reflectivity={1}
                />
            </mesh >

            {/* <ambientLight intensity={0.5} /> */}

            <pointLight
                decay={8}
                distance={200}

                intensity={500}
                position={[0, 10, 0]}
            />

            <SpotLight
                decay={1}
                angle={20}
                intensity={100}
                position={[0, 20, 0]}
                distance={40}
            />
            {/* <SpotLight
                intensity={1000}
                angle={30}
                distance={60}
                position={[0, 6, 50]}
            /> */}
            <SpotLight
                angle={40}
                distance={300}
                intensity={1000}
                position={[0, 2, -20]}
            />


        </>
    )
}
export default View_hero
