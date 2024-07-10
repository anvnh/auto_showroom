import {useEffect} from "react"
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
//------------------
const Audi_r8_2020 = ({ color }) => {
  const gltf = useGLTF("/3d/car/audi_r8_2020/scene.gltf");
  useEffect(() => {
    gltf.scene.scale.set(2, 2, 2);
    gltf.scene.position.set(440,-21,263)
    gltf.scene.traverse((mesh) => {
      if (mesh.isCamera) {
        gltf.scene.remove(mesh);
      }
    })
  }, [gltf])
  useFrame(() => { 
    gltf.scene.traverse((mesh) => {
      if (mesh.isMesh) {
        if (mesh.name == "Object_138") {
          //mesh.material = mesh.matrial.clone() // thay đổi màu mesh này mà không liên quan đến các mesh khác, nếu không có đoạn code này thì từ 1 mesh nó sẽ đổi màu full các mesh liên quan khác
          mesh.material.color.set(color);
        }
      }
    })
  })
  return <primitive object={gltf.scene} />;
};
export default Audi_r8_2020