import {useEffect} from "react"
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
//------------------
const Nissan_r35_2024 = ({color})=>{
    const gltf = useGLTF("/3d/car/nissan_r35_2024/scene.gltf")
    useEffect(()=>{
        gltf.scene.scale.set(5,5,5)
        gltf.scene.position.set(3,-1,5)
        gltf.scene.rotation.y -=2
        gltf.scene.traverse((mesh)=>{
            if(mesh.isCamera){
                gltf.scene.remove(mesh)
            }
        })
    },[gltf])
    useFrame(()=>{
        gltf.scene.traverse((mesh)=>{
           if(mesh.isMesh){
            if(mesh.name == "r35_door_R001_r35_paint_0"){
                //mesh.material = mesh.material.clone() // thay đổi màu mesh này mà không liên quan đến các mesh khác, nếu không có đoạn code này thì từ 1 mesh nó sẽ đổi màu full các mesh liên quan khác
                mesh.material.color.set(color)
            }
            // if(mesh.name = "r35_fenderflare_RR_r35_paint_0"){
            //     mesh.material = mesh.material.clone()
            //     //mesh.material.color.set(color)
            // }
           } 
        })
    })
    return(
        <primitive object={gltf.scene}/>
    )
}
export default Nissan_r35_2024