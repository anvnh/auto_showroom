import {useRef, useState, useEffect} from "react"
import * as THREE from "three"
import { useLoader, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
//------------------
const Toyota_crown_s210 = ({color})=>{
    const gltf = useGLTF("/3d/car/crown_s210/scene.gltf")
    useEffect(()=>{
        gltf.scene.scale.set(6,6,6)
        gltf.scene.position.set(0,-1.4,0)
        gltf.scene.rotation.y -= 2
        gltf.scene.traverse((mesh)=>{
            if(mesh.isCamera){
                gltf.scene.remove(mesh)
            }
        })
    },[gltf])
    useFrame(()=>{
        gltf.scene.traverse((mesh)=>{
           if(mesh.isMesh){
            if(mesh.name == "s210_fender_R_s210_body_0"){
                //mesh.material = mesh.matrial.clone() // thay đổi màu mesh này mà không liên quan đến các mesh khác, nếu không có đoạn code này thì từ 1 mesh nó sẽ đổi màu full các mesh liên quan khác
                mesh.material.color.set(color)
            }
           } 
        })
    })
    return(
        <primitive object={gltf.scene}/>
    )
}
export default Toyota_crown_s210