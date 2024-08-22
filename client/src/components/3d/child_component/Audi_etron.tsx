import { useEffect } from "react"
import { useGLTF } from "@react-three/drei"
const Audi_etron = () => {
    const gltf = useGLTF("/3d/audi_etron/scene.gltf")
    // 
    useEffect(() => {
        gltf.scene.scale.set(0.01, 0.01, 0.01)
    }, [])
    return (
        <primitive object={gltf.scene} />
    )
}
export default Audi_etron