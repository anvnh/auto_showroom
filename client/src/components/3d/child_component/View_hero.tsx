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
                //  geometry={new THREE.BoxGeometry(2, 2, 2)}
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
            {/* <Reflector

                args={[50, 150]} // Kích thước của mặt phẳng
                resolution={1024} // Độ phân giải của phản chiếu
                mirror={1} // Độ phản chiếu
                mixBlur={0} // Độ mờ của phản chiếu
                mixStrength={0.9} // Độ mạnh của phản chiếu
                rotation={[-Math.PI / 2, 0, 0]}
                position={[2, 0, 0]} // Vị trí của mặt phẳng
            // geometry={new THREE.PlaneGeometry(50, 250)}
            >
                {(Material) => (
                    < meshPhysicalMaterial
                        color="#888" // Màu của phản chiếu
                        side={THREE.DoubleSide} // Hiển thị từ cả hai phía
                        clearcoat={0.5} // Hiệu ứng lớp phủ thêm
                        clearcoatRoughness={0} // Độ nhám của lớp phủ
                    />
                )}
            </Reflector> */}
            {/* <mesh rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry
                    args={[100, 100]}
                />
                <meshPhysicalMaterial side={THREE.DoubleSide} />
            </mesh> */}
            {/* <ambientLight
                color={"#524f47"}
                intensity={3}
            /> */}
            <pointLight
                decay={8}
                distance={200}

                intensity={500}
                position={[0, 10, 0]}
            />

            <SpotLight
                decay={1}
                angle={20}
                intensity={60}
                position={[0, 10, 0]}
                distance={25}
            />
            <SpotLight
                intensity={90}
                angle={20}
                distance={50}
                position={[3, 5, -20]}
            />

        </>
    )
}
export default View_hero
