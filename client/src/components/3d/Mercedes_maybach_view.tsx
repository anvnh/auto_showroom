import { View } from "./child_component"
import { Mercedes_maybach } from "./child_component"
import { Canvas } from "@react-three/fiber"
const Mercedes_maybach_view = () => {
    return (
        <Canvas>
            <View />
            <Mercedes_maybach />
        </Canvas>
    )
}
export default Mercedes_maybach_view