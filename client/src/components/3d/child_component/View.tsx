import { useEffect, useState } from "react"
import { PerspectiveCamera, OrbitControls } from "@react-three/drei"
import { Environment } from "@react-three/drei"
import { useFrame, useThree } from "@react-three/fiber"
import * as THREE from "three"
const View = ({ sendDataToParent }) => {
    const { scene, size, gl, camera } = useThree()

    const [aspect, setAspect] = useState(size.width / size.height)
    const handleResize = () => {
        const newWidth = size.width;
        const newHeight = size.height;
        const newAspect = newWidth / newHeight;
        setAspect(newAspect);
        // sendDataToParent(aspect * 1.5);
    }

    useEffect(() => {
        // Tự động cập nhật aspect ratio khi size thay đổi
        const newAspect = size.width / size.height;
        camera.aspect = newAspect;
        camera.updateProjectionMatrix();

        gl.setClearColor("#e1e6e2")  // set bg-color

    }, [size.width, size.height, camera, gl])

    useFrame(() => {
        // scene.background = new THREE.Color("#D8D2CD")
    })


    return (
        <>
            <Environment preset="sunset"
            //background
            />
            <OrbitControls
                enableZoom={true}
                zoomSpeed={0.5}
                enableDamping={true}
                dampingFactor={0.1}
                autoRotate
                autoRotateSpeed={5}
                makeDefault
                enablePan={true}
                maxPolarAngle={10} // not allow rotate in gam xe
            />

            <PerspectiveCamera
                fov={50}
                makeDefault
                zoom={1}
                position={[5, 3, 5]}
            />
            {/* <axesHelper args={[4]} /> */}
            {/* <ambientLight
    intensity={10}
    />
    <pointLight
    position={[0,2,0]}
    intensity={200}
    />
    */}

        </>
    )
}
export default View