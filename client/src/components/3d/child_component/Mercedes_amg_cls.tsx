import { useEffect } from "react"
import { useGLTF } from "@react-three/drei"
const Mercedes_amg_cls = () => {
    const gltf = useGLTF("/3d/mer_amg_cls/scene.gltf")
    // 
    useEffect(() => {
        gltf.scene.scale.set(1, 1, 1)
    }, [])
    return (
        <primitive object={gltf.scene} />
    )
}
export default Mercedes_amg_cls