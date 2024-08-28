import { useGLTF } from "@react-three/drei"
import { useThree, useFrame } from "@react-three/fiber"
const Honda = () => {
    const model = useGLTF("/3d/honda_civic_typeR/scene.gltf")
    useFrame((state, delta) => {


        let tl = state.clock.getElapsedTime()
        model.scene.rotation.y -= 0.017
        model.scene.scale.set(3.3, 3.3, 3.3)
        model.scene.position.set(0, 1, 0)
        model.scene.castShadow = true

    })
    return (
        <primitive object={model.scene} />
    )
}
export default Honda