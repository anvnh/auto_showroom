
import { Canvas } from "@react-three/fiber"
import { View } from "./child_component"
import { Mercedes_amg_cls } from "./child_component"
const Mercedes_amg_cls_view = () => {
    return (
        <Canvas className="overflow-x-hidden overflow-y-hidden">
            <View />
            <Mercedes_amg_cls />
        </Canvas>

    )
}
export default Mercedes_amg_cls_view