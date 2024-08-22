import { View } from "./child_component"
import { Rollroyce_ghost } from "./child_component"
import { Canvas } from "@react-three/fiber"
const Rollroyce_ghost_view = () => {
    return (
        <Canvas>
            <View />
            <Rollroyce_ghost />
        </Canvas>
    )
}
export default Rollroyce_ghost_view