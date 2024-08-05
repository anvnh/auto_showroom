import { useEffect, useState } from "react"
import {PerspectiveCamera, OrbitControls} from "@react-three/drei"
import { Environment } from "@react-three/drei"
import {useFrame, useThree} from "@react-three/fiber"
import * as THREE from "three"
const View = ({sendDataToParent})=>{
    const {scene, size} = useThree()
  
    const [aspect, setAspect] = useState(size.width / size.height)
    const handleResize =  () => {
        const newWidth = size.width;
        const newHeight = size.height;
        const newAspect = newWidth / newHeight;
        setAspect(newAspect);
     sendDataToParent(aspect * 1.5);
    }

    useEffect(()=>{
        // console.log(size.width)
    // window.addEventListener("resize",handleResize)
    handleResize()
    
    },[size])

 useFrame(()=>{
        scene.background = new THREE.Color("#D8D2CD") 
    })
    return(
        <>
        <Environment preset="sunset" background/>
        <OrbitControls 
        makeDefault
        enableZoom={false}
        enablePan={false}
        maxPolarAngle={10}
        enableDamping={true}
        />

    <PerspectiveCamera
    fov={50}
    makeDefault
    zoom={1}
    position={[5,3,5]}
     />
    {/* <axesHelper args={[5]}/> */}
    {/* <ambientLight
    intensity={10}
    />
    <pointLight
    position={[0,2,0]}
    intensity={200}
    />
    */}

        </>
    )
}
export default View