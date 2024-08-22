import { View } from "./child_component"
import { Audi_etron } from "./child_component"
import { Canvas } from "@react-three/fiber"
const Audi_etron_view = () => {
    return (
        <Canvas>
            <View />
            <Audi_etron />
        </Canvas>
    )
}
export default Audi_etron_view