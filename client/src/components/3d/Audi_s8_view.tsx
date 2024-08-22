import { Canvas } from "@react-three/fiber"
import { View } from "./child_component"
import { Audi_s8 } from "./child_component"
const Audi_s8_view = () => {
    return (
        <>
            <Canvas>
                <View />
                <Audi_s8 />
            </Canvas>
        </>
    )
}
export default Audi_s8_view