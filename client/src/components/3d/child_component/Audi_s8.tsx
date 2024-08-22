import { useEffect } from "react"
import { useGLTF } from "@react-three/drei"
const Audi_s8 = () => {
    const gltf = useGLTF("/3d/audi_s8/scene.gltf")
    // 
    useEffect(() => {
        gltf.scene.scale.set(0.35, 0.35, 0.35)
        gltf.scene.position.set(1.5, -0.5, 19.5)
    }, [])
    return (
        <primitive object={gltf.scene} />
    )
}
export default Audi_s8