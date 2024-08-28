import { Canvas } from "@react-three/fiber"
import { View_hero, View, Bmw, Honda } from "./child_component"
const Bmw_view = () => {
    return (
        <Canvas shadows>
            <View_hero />
            <Honda />
        </Canvas>
    )
}
export default Bmw_view