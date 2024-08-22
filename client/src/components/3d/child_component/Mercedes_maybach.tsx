import { useEffect } from "react"
import { useGLTF } from "@react-three/drei"
const Mercedes_maybach = () => {
    const gltf = useGLTF("/3d/mercedes_maybach/scene.gltf")
    // 
    useEffect(() => {
        gltf.scene.scale.set(1, 1, 1)
    }, [])
    return (
        <primitive object={gltf.scene} />
    )
}
export default Mercedes_maybach