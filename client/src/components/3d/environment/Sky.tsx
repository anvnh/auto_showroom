import {useGLTF} from "@react-three/drei"
import { useEffect } from "react"
const Sky = ()=>{
    const gltf = useGLTF("/3d/environment/galaxy/scene.gltf")
    useEffect(()=>{
        gltf.scene.scale.set(80,80,80)
    },[gltf])
    return(
            <primitive object={gltf.scene}/>
        
    )
}
export default Sky