import {useEffect} from "react"
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
//------------------
const Mercedes_maybach_2022 = ({ color }) => {
  const gltf = useGLTF("/3d/car/mercedes_maybach_2022/scene.gltf");
  useEffect(() => {
    gltf.scene.scale.set(5, 5, 5);
    gltf.scene.position.set(0,-1,0)
    //gltf.scene.rotation.y += 1;
    gltf.scene.traverse((mesh) => {
    //   mesh.position.set(0, -0.2, -0.2);
      if (mesh.isCamera) {
        gltf.scene.remove(mesh);
      }
    })
  }, [gltf])
  useFrame(() => {
    gltf.scene.traverse((mesh) => {
      if (mesh.isMesh) {
        if (mesh.name == "Object_14") {
          //mesh.material = mesh.matrial.clone() // thay đổi màu mesh này mà không liên quan đến các mesh khác, nếu không có đoạn code này thì từ 1 mesh nó sẽ đổi màu full các mesh liên quan khác
          mesh.material.color.set(color);
        }
      }
    })
  })
  return <primitive object={gltf.scene} />;
};
export default Mercedes_maybach_2022