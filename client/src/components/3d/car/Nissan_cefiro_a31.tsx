import {useEffect} from "react"
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
//------------------
const Nissan_cefiro_a31 = ({ color }) => {
  const gltf = useGLTF("/3d/car/nissan_cefiro_a31/scene.gltf");
  useEffect(() => {
    gltf.scene.scale.set(200, 200, 200);
    gltf.scene.position.set(0,-1,0)
    gltf.scene.rotation.y -= 2;
    gltf.scene.traverse((mesh) => {
      if (mesh.isCamera) {
        gltf.scene.remove(mesh);
      }
    })
  }, [gltf])
  useFrame(() => {
    gltf.scene.traverse((mesh) => {
      if (mesh.isMesh) {
        if (mesh.name == "Object002_carpaint_0") {
          //mesh.material = mesh.matrial.clone() // thay đổi màu mesh này mà không liên quan đến các mesh khác, nếu không có đoạn code này thì từ 1 mesh nó sẽ đổi màu full các mesh liên quan khác
          mesh.material.color.set(color);
        }
      }
    })
  })
  return <primitive object={gltf.scene} />;
};
export default Nissan_cefiro_a31