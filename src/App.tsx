import {Routes, Route} from 'react-router-dom';
import RootLayout from './_root/RootLayout';
import UserLayout from './_user/UserLayout';

const App = () => {
    return (
        <main className="flex h-screen">
            <Routes>
                {/* Home Page */}
                <Route index element={<RootLayout/>} />
                {/* User Page */}
                <Route path="/users" element={<UserLayout />} />
            </Routes>
        </main>
    )
}

export default App
