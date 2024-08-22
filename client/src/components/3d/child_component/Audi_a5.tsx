import { useEffect } from "react"
import { useGLTF } from "@react-three/drei"
const Audi_a5 = () => {
    const gltf = useGLTF("/3d/audi_a5/scene.gltf")
    // 
    useEffect(() => {
        gltf.scene.scale.set(1, 1, 1)
        gltf.scene.position.set(-1.2, 0, 3)
    }, [])
    return (
        <primitive object={gltf.scene} />
    )
}
export default Audi_a5