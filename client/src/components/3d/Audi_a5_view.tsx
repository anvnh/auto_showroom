import { Canvas } from "@react-three/fiber"
import { View } from "./child_component"
import { Audi_a5 } from "./child_component"
const Audi_a5_view = () => {
    return (
        <>
                    <Canvas>

            <View />
            <Audi_a5 />
        </Canvas>
        </>

    )
}
export default Audi_a5_view