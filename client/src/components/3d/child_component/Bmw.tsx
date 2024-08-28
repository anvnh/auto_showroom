import { useGLTF } from "@react-three/drei"
import { useThree, useFrame } from "@react-three/fiber"
const Bmw = () => {
    const model = useGLTF("/3d/bmw_m8_f92/scene.gltf")
    useFrame((state, delta) => {


        let tl = state.clock.getElapsedTime()
        // model.scene.rotation.y -= 0.017
        model.scene.scale.set(2, 2, 2)
        model.scene.position.set(0, 0, 0)
        model.scene.traverse((mesh) => {
        })
    })
    return (
        <primitive object={model.scene} />
    )
}
export default Bmw