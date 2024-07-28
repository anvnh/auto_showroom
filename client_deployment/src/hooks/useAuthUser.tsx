import { useQuery } from '@tanstack/react-query';

async function fetchAuthUser() {
    const res = await fetch('https://auto-showroom-backend.onrender.com/api/auth/me');
    if (!res.ok) throw new Error('Network response was not ok');
    return res.json();
}

export function useAuthUser() {
    return useQuery(['authUser'], fetchAuthUser);
}