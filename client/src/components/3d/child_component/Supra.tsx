import { useGLTF } from "@react-three/drei"
import { useThree, useFrame } from "@react-three/fiber"
import { useEffect } from "react"
const Car = ({aspect}) => {
   useEffect(()=>{
    // console.log(dataa)
   },[]) 
    const model = useGLTF("/3d/supra/scene.gltf")
    useFrame((state, delta) => {


        let tl = state.clock.getElapsedTime()
        model.scene.rotation.y -= 0.017
        model.scene.scale.set(aspect, aspect, aspect)
        model.scene.position.set(0, 0, 0)
        model.scene.traverse((mesh) => {
            // mesh.rotation.y += tl/700
        })
    })
    return (
        <primitive object={model.scene} />
    )
}
export default Car