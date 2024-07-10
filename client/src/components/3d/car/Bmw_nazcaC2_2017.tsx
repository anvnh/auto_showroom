import {useEffect} from "react"
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
//------------------
const Bmw_nazcaC2_2017 = ({ color }) => {
  const gltf = useGLTF("/3d/car/bmw_nazcaC2_2017/scene.gltf");
  useEffect(() => {
    gltf.scene.scale.set(1, 1, 1);
    //gltf.scene.position.set(0,-2,12)
    gltf.scene.rotation.y += 1;
    gltf.scene.traverse((mesh) => {
      mesh.position.set(0, -4.5, 4);
      if (mesh.isCamera) {
        gltf.scene.remove(mesh);
      }
    })
  }, [gltf])
  useFrame(() => {
    gltf.scene.traverse((mesh) => {
      if (mesh.isMesh) {
        if (mesh.name == "stiv_r34_body_4w_wigeon_0") {
          //mesh.material = mesh.matrial.clone() // thay đổi màu mesh này mà không liên quan đến các mesh khác, nếu không có đoạn code này thì từ 1 mesh nó sẽ đổi màu full các mesh liên quan khác
          mesh.material.color.set(color);
        }
      }
    })
  })
  return <primitive object={gltf.scene} />;
};
export default Bmw_nazcaC2_2017