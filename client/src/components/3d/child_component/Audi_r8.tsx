import { useEffect } from "react"
import { useGLTF } from "@react-three/drei"
const Audi_r8 = () => {
    const gltf = useGLTF("/3d/audi_r8_2021/scene.gltf")
    // 
    useEffect(() => {
        gltf.scene.scale.set(0.5, 0.5, 0.5)
    }, [])
    return (
        <primitive object={gltf.scene} />
    )
}
export default Audi_r8