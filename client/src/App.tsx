import {Routes, Route} from 'react-router-dom';
import RootLayout from './_root/RootLayout';
import UserLayout from './_user/UserLayout';
import { Audi_A5_Couple, Audi_A5_Sportback } from "./_car/audi/audi_A5"
import ProductLayout1 from './_productpage/ProductLayout1';
import ProductLayout2 from './_productpage/ProductLayout2';
const App = () => {
    return (
        <main className="flex h-screen">
            <Routes>
                {/* Home Page */}
                <Route index element={<RootLayout/>} />
    
                {/* User Page */}
                <Route path="/users" element={<UserLayout />} />
                
                <Route path="/audi-A5-Couple" element={<Audi_A5_Couple />} />

                <Route path="/audi-s6-limousin" element={<Audi_A5_Sportback />} />

                <Route path="/audi-A5-Sportback" element={<Audi_A5_Sportback />} />

                {/* Introduce popular product */}
                <Route path="/Mercedes-AMG-CLS" element={<ProductLayout1 />} />
                <Route path="/Mercedes-Benz-Maybach-2022" element={<ProductLayout2 />} />
            </Routes>
        </main>
    )
}

export default App
