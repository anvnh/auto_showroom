import {useEffect} from "react"
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
//------------------
const Mercedes_cls_2024 = ({ color }) => {
  const gltf = useGLTF("/3d/car/mercedes_cls_2024/scene.gltf");
  useEffect(() => {
    gltf.scene.scale.set(4, 4, 4);
    gltf.scene.position.set(0,-1,0)
    gltf.scene.rotation.y += 1
    gltf.scene.traverse((mesh) => {
      if (mesh.isCamera) {
        gltf.scene.remove(mesh);
      }
    })
  }, [gltf])
  useFrame(() => {
    gltf.scene.traverse((mesh) => {
      if (mesh.isMesh) {
        if (mesh.name == "Object_287") {
          //mesh.material = mesh.matrial.clone() // thay đổi màu mesh này mà không liên quan đến các mesh khác, nếu không có đoạn code này thì từ 1 mesh nó sẽ đổi màu full các mesh liên quan khác
          mesh.material.color.set(color);
        }
      }
    })
  })
  return <primitive object={gltf.scene} />;
};
export default Mercedes_cls_2024