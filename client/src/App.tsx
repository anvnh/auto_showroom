import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import RootLayout from './_root/RootLayout';
import UserLayout from './_owners/UserLayout';
import { Audi_A5_Couple, Audi_A5_Sportback } from "./_car/audi/audi_A5"

import HomePage from '@/_social/pages/home/HomePage';
import SignUpPage from '@/_social/./pages/auth/signup/SignUpPage';
import LoginPage from '@/_social/pages/auth/login/LoginPage';
import Sidebar from '@/components/social/ui/common/Sidebar';
import RightPanel from './components/social/ui/common/RightPanel';
import NotificationPage from '@/_social/./pages/notification/NotificationPage';
import ProfilePage from '@/_social/./pages/profile/ProfilePage';
import Following from '@/_social/./pages/profile/Following';
import Followers from '@/_social/pages/profile/Followers';
import PostDetailed from '@/_social/pages/post/PostDetailed';
import ProductViewLayout from './_shop/ProductViewLayout';

import { ProductLayout1, ProductLayout2, ProductLayout3,ProductLayout4 , ProductLayout5, ProductLayout6 } from './_productpage/layout/';
import { Toaster } from 'react-hot-toast';
import { useQuery } from '@tanstack/react-query';
import LoadingSpinner from './components/social/ui/common/LoadingSpinner';
import ShopLayout from './_shop/ShopLayout';
import React, { useEffect } from "react";
import AllProductViewLayout from './_shop/AllProductViewLayout';
import AdminBrandLayout from './_admin/AdminBrandLayout';
import CartLayout from './_shop/CartLayout';
import ChatAI from './api_Chat/ChatAI';
import ConfirmationLayout from './_auth/ConfirmationLayout';
import TokenConfirmation from './_auth/TokenConfirmation';
import PaymentLayout from './_shop/PaymentLayout';
import NotAuthenticated from './_auth/NotAuthenticated';
import Voucherlayout from './_shop/Voucher/Voucherlayout';

const App = () => {
    const location = useLocation();
    const isSocialRoute = location.pathname.startsWith('/social');
    const { data: authUser, isLoading } = useQuery({
        queryKey: ['authUser'],
        queryFn: async () => {
            try {
                const res = await fetch('/api/auth/me');
                const data = await res.json();
                if (data.error) return null;
                if (!res.ok) {
                    throw new Error(data.message || 'Something went wrong');
                }
                // console.log("authUser is here: ", data);
                return data;
            } catch (error) {
                throw new Error(error.message);
            }
        },
        retry: false,
    });


    const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);


    if (isLoading) {
        return (
            <div className='h-screen flex justify-center items-center'>
                <LoadingSpinner size='lg' />
            </div>
        );
    }
    return (
        <>
            <main className={`flex ${isSocialRoute ? (!authUser ? 'w-full' : 'md:max-w-[80%] max-w-[90%] mx-auto') : 'h-screen'}`}>
                {location.pathname.startsWith('/social') && authUser && <Sidebar />}
                <Routes>

                    {/* Confirmation email */}
                    <Route path="/verified/:token" element={<TokenConfirmation />} />

                    <Route path="/" element={<RootLayout />} />

                    <Route path="/owners" element={<UserLayout />} />
                    <Route path="/audi-A5-Couple" element={<Audi_A5_Couple />} />
                    <Route path="/audi-s6-limousin" element={<Audi_A5_Sportback />} />

                    {/* carpopular */}
                    <Route path="/Mercedes-AMG-CLS" element={<ProductLayout1 />} />
                    <Route path="/Mercedes-Benz-Maybach-2022" element={<ProductLayout2 />} />
                    <Route path="/Rolls-Royce-Ghost-2021" element={<ProductLayout3 />} />
                    <Route path="/Audi-R8-coupe-2022" element={<ProductLayout4 />} />
                    <Route path="/Roll-Royce-Phantom" element={<ProductLayout5 />} />
                    <Route path="/Audi-e-tron-GT-2024" element={<ProductLayout6 />} />
                    {/* owners */}

                    <Route path="/social" element={authUser ? <HomePage /> : <Navigate to="/login" />} />
                    <Route path="/signup" element={!authUser ? <SignUpPage /> : <Navigate to="/social" />} />
                    <Route path="/login" element={!authUser ? <LoginPage /> : <Navigate to="/social" />} />
                    <Route path="/social/posts/:username/:id" element={authUser ? <PostDetailed/> : <Navigate to="/login" />} />
                    <Route path="/social/notifications" element={authUser ? <NotificationPage /> : <Navigate to="/login" />} />
                    <Route path="/social/posts/:id" element={authUser ? <PostDetailed/> : <Navigate to="/login" />} />
                    <Route path="/social/profile/:username" element={authUser ? <ProfilePage /> : <Navigate to="/login" />} />
                    <Route path="/social/profile/following/:id" element={authUser ? <Following /> : <Navigate to="/login" />} />
                    <Route path="/social/profile/followers/:id" element={authUser ? <Followers /> : <Navigate to="/login" />} />

                    <Route path="/shop" element={<ShopLayout />} />

                    <Route path="/shop/product" element={<AllProductViewLayout />} />

                    <Route path="/shop/product/:id" element={<ProductViewLayout />} />
                    <Route path="/shop/cart" element={authUser ? <CartLayout isLogin={Number(true)} /> : <CartLayout isLogin={false} />} />

                    <Route path="/admin" element={authUser && authUser.isAdmin ? <AdminBrandLayout /> : <NotAuthenticated />} />
                    <Route path="/chatAI" element={<ChatAI />} />

                    <Route path="/social/account/confirmation" element={authUser ? <ConfirmationLayout /> : <Navigate to="/login"/>} />

                    <Route path="/shop/payment" element={ authUser ? <PaymentLayout/> : <Navigate to="/login" /> } />
                  


                    
                    <Route path="/voucher" element={<Voucherlayout />} />
                </Routes>
                {location.pathname.startsWith('/social') && authUser && <RightPanel />}
                {location.pathname.startsWith('/social') && <Toaster />}
            </main>
        </>
    )
}

export default App;
