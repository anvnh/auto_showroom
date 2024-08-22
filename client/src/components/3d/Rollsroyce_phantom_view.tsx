import { View } from "./child_component"
import { Rollroyce_phantom } from "./child_component"
import { Canvas } from "@react-three/fiber"
const Rollroyce_phantom_view = () => {
    return (
        <Canvas>
            <View />
            <Rollroyce_phantom />
        </Canvas>
    )
}
export default Rollroyce_phantom_view