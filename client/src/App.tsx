import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { Suspense, lazy, useEffect } from "react";
import { Toaster } from 'react-hot-toast';
import { useQuery } from '@tanstack/react-query';
import LoadingSpinner from './components/social/ui/common/LoadingSpinner';

// Lazy load các components
const RootLayout = lazy(() => import('./_root/RootLayout'));
const UserLayout = lazy(() => import('./_owners/UserLayout'));
const Audi_A5_Couple = lazy(() => import('./_car/audi/audi_A5').then(module => ({ default: module.Audi_A5_Couple })));
const Audi_A5_Sportback = lazy(() => import('./_car/audi/audi_A5').then(module => ({ default: module.Audi_A5_Sportback })));

const HomePage = lazy(() => import('@/_social/pages/home/HomePage'));
const SignUpPage = lazy(() => import('@/_social/./pages/auth/signup/SignUpPage'));
const LoginPage = lazy(() => import('@/_social/pages/auth/login/LoginPage'));
const Sidebar = lazy(() => import('@/components/social/ui/common/Sidebar'));
const RightPanel = lazy(() => import('./components/social/ui/common/RightPanel'));
const NotificationPage = lazy(() => import('@/_social/./pages/notification/NotificationPage'));
const ProfilePage = lazy(() => import('@/_social/./pages/profile/ProfilePage'));
const Following = lazy(() => import('@/_social/./pages/profile/Following'));
const Followers = lazy(() => import('@/_social/pages/profile/Followers'));
const PostDetailed = lazy(() => import('@/_social/pages/post/PostDetailed'));
const ProductViewLayout = lazy(() => import('./_shop/ProductViewLayout'));

const ProductLayout1 = lazy(() => import('./_productpage/layout/').then(module => ({ default: module.ProductLayout1 })));
const ProductLayout2 = lazy(() => import('./_productpage/layout/').then(module => ({ default: module.ProductLayout2 })));
const ProductLayout3 = lazy(() => import('./_productpage/layout/').then(module => ({ default: module.ProductLayout3 })));
const ProductLayout4 = lazy(() => import('./_productpage/layout/').then(module => ({ default: module.ProductLayout4 })));
const ProductLayout5 = lazy(() => import('./_productpage/layout/').then(module => ({ default: module.ProductLayout5 })));
const ProductLayout6 = lazy(() => import('./_productpage/layout/').then(module => ({ default: module.ProductLayout6 })));

const ShopLayout = lazy(() => import('./_shop/ShopLayout'));
const AllProductViewLayout = lazy(() => import('./_shop/AllProductViewLayout'));
const AdminBrandLayout = lazy(() => import('./_admin/AdminBrandLayout'));
const CartLayout = lazy(() => import('./_shop/CartLayout'));
const ConfirmationLayout = lazy(() => import('./_auth/ConfirmationLayout'));
const TokenConfirmation = lazy(() => import('./_auth/TokenConfirmation'));
const PaymentLayout = lazy(() => import('./_shop/PaymentLayout'));
const NotAuthenticated = lazy(() => import('./_auth/NotAuthenticated'));
const Voucherlayout = lazy(() => import('./_shop/voucher/VoucherLayout'));
const PaymentLayoutBuyNow = lazy(() => import('./_shop/buynow/PaymentLayoutBuyNow'));
const AboutUs = lazy(() => import('./_aboutUs').then(module => ({ default: module.AboutUs })));
const NotFound = lazy(() => import('./_auth/NotFound'));
const OrderLayout = lazy(() => import('./_shop/Order/OrderLayout'));

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
                return data;
            } catch (error) {
                throw new Error(error.message);
            }
        },
        retry: false,
        staleTime: 5 * 60 * 1000, // Cache user data for 5 minutes
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
        <Suspense fallback={
            <div className='h-screen flex justify-center items-center'>
                <LoadingSpinner size='lg' />
            </div>
        }>
            <main className={`flex ${isSocialRoute ? (!authUser ? 'w-full' : 'md:max-w-[80%] max-w-[90%] mx-auto') : 'h-screen'}`}>
                {location.pathname.startsWith('/social') && authUser && (
                    <Suspense fallback={<div className="w-64 bg-gray-200 animate-pulse" />}>
                        <Sidebar />
                    </Suspense>
                )}
                <Routes>
                    {/* Confirmation email */}
                    <Route path="/verified/:token" element={<TokenConfirmation />} />

                    <Route path="/" element={<RootLayout />} />

                    <Route path="/policy" element={<UserLayout />} />
                    <Route path="/audi-A5-Couple" element={<Audi_A5_Couple />} />
                    <Route path="/audi-s6-limousin" element={<Audi_A5_Sportback />} />

                    {/* carpopular */}
                    <Route path="/Mercedes-AMG-CLS" element={<ProductLayout1 />} />
                    <Route path="/Mercedes-Benz-Maybach-2022" element={<ProductLayout2 />} />
                    <Route path="/Rolls-Royce-Ghost-2021" element={<ProductLayout3 />} />
                    <Route path="/Audi-R8-coupe-2022" element={<ProductLayout4 />} />
                    <Route path="/Roll-Royce-Phantom" element={<ProductLayout5 />} />
                    <Route path="/Audi-e-tron-GT-2024" element={<ProductLayout6 />} />

                    <Route path="/social" element={authUser ? <HomePage /> : <Navigate to="/login" />} />
                    <Route path="/signup" element={!authUser ? <SignUpPage /> : <Navigate to="/social" />} />
                    <Route path="/login" element={!authUser ? <LoginPage /> : <Navigate to="/social" />} />
                    <Route path="/social/posts/:username/:id" element={authUser ? <PostDetailed /> : <Navigate to="/login" />} />
                    <Route path="/social/notifications" element={authUser ? <NotificationPage /> : <Navigate to="/login" />} />
                    <Route path="/social/posts/:id" element={authUser ? <PostDetailed /> : <Navigate to="/login" />} />
                    <Route path="/social/profile/:username" element={authUser ? <ProfilePage /> : <Navigate to="/login" />} />
                    <Route path="/social/profile/following/:id" element={authUser ? <Following /> : <Navigate to="/login" />} />
                    <Route path="/social/profile/followers/:id" element={authUser ? <Followers /> : <Navigate to="/login" />} />

                    <Route path="/shop" element={<ShopLayout />} />
                    <Route path="/shop/product" element={<AllProductViewLayout />} />
                    <Route path="/shop/product/:id" element={<ProductViewLayout />} />
                    <Route path="/shop/cart" element={authUser ? <CartLayout isLogin={Number(true)} /> : <CartLayout isLogin={false} />} />

                    <Route path="/admin" element={authUser && authUser.isAdmin ? <AdminBrandLayout /> : <NotAuthenticated />} />
                    <Route path="/social/account/confirmation" element={authUser ? <ConfirmationLayout /> : <Navigate to="/login" />} />
                    <Route path="/shop/payment" element={authUser ? <PaymentLayout /> : <Navigate to="/login" />} />
                    <Route path="/shop/payment/:id" element={<PaymentLayoutBuyNow />} />

                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/voucher" element={<Voucherlayout />} />
                    <Route path="/order" element={<OrderLayout />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                {location.pathname.startsWith('/social') && authUser && (
                    <Suspense fallback={<div className="w-80 bg-gray-200 animate-pulse" />}>
                        <RightPanel />
                    </Suspense>
                )}
                {location.pathname.startsWith('/social') && <Toaster />}
            </main>
        </Suspense>
    )
}

export default App;
