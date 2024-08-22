import { useEffect } from "react"
import { useGLTF } from "@react-three/drei"
const Model = () => {
    const gltf = useGLTF("/3d/audi_r8_2021/scene.gltf")
    useEffect(() => {
        gltf.scene.scale.set(0.5, 0.5, 0.5)
    }, [])
    return (
        <primitive object={gltf.scene} />
    )
}
export default Model