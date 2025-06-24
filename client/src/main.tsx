import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            staleTime: 5 * 60 * 1000, // 5 phút
            gcTime: 10 * 60 * 1000, // 10 phút (thay cacheTime)
            retry: 1, // Giảm số lần retry
            refetchOnMount: false, // Không refetch khi mount nếu data vẫn fresh
        },
        mutations: {
            retry: 1,
        },
    },
});

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <QueryClientProvider client={queryClient}>
            <App />
        </QueryClientProvider>
    </BrowserRouter>
)
