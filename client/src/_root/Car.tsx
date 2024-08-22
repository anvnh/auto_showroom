import { Canvas } from "@react-three/fiber"
import Model from "./Model"
import View from "./View"
const Car = () => {
    return (
        <Canvas shadows>
            <Model />
            <View />
        </Canvas>
    )
}
export default Car