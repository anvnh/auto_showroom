import { Canvas } from "@react-three/fiber"
import { View } from "./child_component"
import { Audi_r8 } from "./child_component"
const Audi_r8_view = () => {
    return (
        <>
            <Canvas>
                <View />
                <Audi_r8 />
            </Canvas>
        </>
    )
}
export default Audi_r8_view