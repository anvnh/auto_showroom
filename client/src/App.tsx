import {Routes, Route, useLocation, Navigate} from 'react-router-dom';
import RootLayout from './_root/RootLayout';
import UserLayout from './_owners/UserLayout';
import { Audi_A5_Couple, Audi_A5_Sportback } from "./_car/audi/audi_A5"

import HomePage from './pages/home/HomePage';
import SignUpPage from './pages/auth/signup/SignUpPage';
import LoginPage from './pages/auth/login/LoginPage';
import Sidebar from './components/social/ui/common/Sidebar';
import RightPanel from './components/social/ui/common/RightPanel';
import NotificationPage from './pages/notification/NotificationPage';
import ProfilePage from './pages/profile/ProfilePage';

import {ProductLayout1, ProductLayout2, ProductLayout3, ProductLayout5} from './_productpage/layout/';
import { Toaster } from 'react-hot-toast';
import { useQuery } from '@tanstack/react-query';
import { LuDivideCircle } from 'react-icons/lu';
import LoadingSpinner from './components/social/ui/common/LoadingSpinner';
import  SignIn  from './_owners/SignIn';



const App = () => {
    const location = useLocation();
    const isSocialRoute = location.pathname.startsWith('/social');
    const {data: authUser, isLoading, error, isError } = useQuery({
        // use queryKey to give a unique name to the query and refer to it later
        queryKey: ['authUser'],
        queryFn: async () => {
            try {
                const res = await fetch('/api/auth/me');
                const data = await res.json();
                if(data.error) return null;
                if (!res.ok) {
                    throw new Error(data.message || 'Something went wrong');
                }
                console.log("authUser is here: ", data);
                return data;
            } catch (error) {
                throw new Error(error.message);
            }
        },
        retry: false,
    })

    if(isLoading) {
        return (
            <div className='h-screen flex justify-center items-center'>
                <LoadingSpinner size='lg' />
            </div>
        )
    }
    return (
        <>
            <main className={`flex ${isSocialRoute ? (!authUser ? 'w-full' : 'max-w-[80%] mx-auto') : 'h-screen'}`}> 
                {location.pathname.startsWith('/social') && authUser && <Sidebar />}
                <Routes>

                    <Route path="/" element={<RootLayout />} />

                    <Route path="/owners" element={<UserLayout />} />
                    <Route path="/audi-A5-Couple" element={<Audi_A5_Couple />} />
                    <Route path="/audi-s6-limousin" element={<Audi_A5_Sportback />} />



                    {/* carpopular-------------------------------------- */}
                    <Route path="/Mercedes-AMG-CLS" element={<ProductLayout1 />} />
                    <Route path="/Mercedes-Benz-Maybach-2022" element={<ProductLayout2 />} />
                    <Route path="/Rolls-Royce-Ghost-2021" element={<ProductLayout3 />} />
                    <Route path="/Roll-Royce-Phantom" element={<ProductLayout5 />} />


                    {/* owners--------------------------------------- */}
                    <Route path="/SignIn" element={<SignIn />} />

                    {/* social------------------------------ */}
                    <Route path="/social" element={authUser ? <HomePage /> : <Navigate to="/social/login" />} />
                    <Route path="/social/signup" element={!authUser ? <SignUpPage /> : <Navigate to="/social" />} />
                    <Route path="/social/login" element={!authUser ? <LoginPage /> : <Navigate to="/social" />} />
                    <Route path="/social/notifications" element={authUser ? <NotificationPage /> : <Navigate to="/social/login" />} />
                    <Route path="/social/profile/:username" element={authUser ? <ProfilePage /> : <Navigate to="/social/login" />} />

                </Routes>
                {location.pathname.startsWith('/social') && authUser && <RightPanel />}
                {location.pathname.startsWith('/social') && <Toaster />}
            </main>
        </>
    )
}

export default App
