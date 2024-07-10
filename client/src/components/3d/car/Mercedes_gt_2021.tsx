import {useEffect} from "react"
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
//------------------
const Mercedes_gt_2021 = ({ color }) => {
  const gltf = useGLTF("/3d/car/mercedes_amg_2021/scene.gltf");
  useEffect(() => {
    gltf.scene.scale.set(1.5, 1.5, 1.5);
    gltf.scene.position.set(-240, -1.3, -200);

    gltf.scene.traverse((mesh) => {
      if (mesh.isCamera) {
        gltf.scene.remove(mesh);
      }
    })
  }, []);
  useFrame(() => {
    gltf.scene.traverse((mesh) => {
      if (mesh.isMesh) {
        if (mesh.name == "Object_30") {
          //mesh.material = mesh.matrial.clone() // thay đổi màu mesh này mà không liên quan đến các mesh khác, nếu không có đoạn code này thì từ 1 mesh nó sẽ đổi màu full các mesh liên quan khác
          mesh.material.color.set(color);
        }
      }
    });
  });
  return <primitive object={gltf.scene} />;
};
export default Mercedes_gt_2021;