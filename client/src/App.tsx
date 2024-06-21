import {Routes, Route} from 'react-router-dom';
import RootLayout from './_root/RootLayout';
import UserLayout from './_owners/UserLayout';
import { Audi_A5_Couple, Audi_A5_Sportback } from "./_car/audi/audi_A5"

import HomePage from './pages/auth/home/HomePage';
import SignUpPage from './pages/auth/signup/SignUpPage';
import LoginPage from './pages/auth/login/LoginPage';

import {ProductLayout1, ProductLayout2, ProductLayout3} from './_productpage/layout/';
const App = () => {
    return (
        <main className="flex h-screen">
            <Routes>
                {/* Home Page */}
                <Route index element={<RootLayout/>} />

                {/* User Page */}
                <Route path="/owners" element={<UserLayout />} />
                <Route path="/audi-A5-Couple" element={<Audi_A5_Couple />} />
                <Route path="/audi-s6-limousin" element={<Audi_A5_Sportback />} />

                {/* Introduce popular product */}
                <Route path="/Mercedes-AMG-CLS" element={<ProductLayout1 />} />
                <Route path="/Mercedes-Benz-Maybach-2022" element={<ProductLayout2 />} />
                <Route path="/Rolls-Royce-Ghost-2021" element={<ProductLayout3 />} />

                {/* Social pages */}
                <Route path="/social" element={<HomePage />} />
                <Route path="/social/signup" element={<SignUpPage />} />
                <Route path="/social/login" element={<LoginPage />} />

            </Routes>
        </main>
    )
}

export default App
