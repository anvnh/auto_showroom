import { Environment, OrbitControls, PerspectiveCamera } from "@react-three/drei"
import { useFrame, useThree } from "@react-three/fiber"
import { useEffect } from "react"
const View = () => {
    const { scene, camera, size } = useThree()
    useFrame(() => {

    })
    useEffect(() => {
        const aspect = size.width / size.height
        camera.aspect = aspect;
        camera.updateProjectionMatrix();
    }, [size])
    return (
        <>

            <Environment preset="sunset" />
            <PerspectiveCamera
                fov={70}
                makeDefault
                zoom={1}
                position={[5, 3, 5]}
            />
            <OrbitControls
                makeDefault
                enableZoom={false}
                enablePan={false}
                maxPolarAngle={10}
                enableDamping={true}
            />
            <ambientLight intensity={10} />
            <axesHelper args={[5]} />
        </>
    )
}
export default View