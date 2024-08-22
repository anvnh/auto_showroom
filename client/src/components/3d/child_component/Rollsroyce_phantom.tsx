import { useEffect } from "react"
import { useGLTF } from "@react-three/drei"
const Rollroyce_phantom = () => {
    const gltf = useGLTF("/3d/rollsroyce_phantom/scene.gltf")
    // 
    useEffect(() => {
        gltf.scene.scale.set(1.2, 1.2, 1.2)
    }, [])
    return (
        <primitive object={gltf.scene} />
    )
}
export default Rollroyce_phantom