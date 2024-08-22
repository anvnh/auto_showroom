import { useEffect } from "react"
import { useGLTF } from "@react-three/drei"
const Rollroyce_ghost = () => {
    const gltf = useGLTF("/3d/rollsroyce_ghost/scene.gltf")
    // 
    useEffect(() => {
        gltf.scene.scale.set(1, 1, 1)
    }, [])
    return (
        <primitive object={gltf.scene} />
    )
}
export default Rollroyce_ghost