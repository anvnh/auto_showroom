/**
 * API base URL helper
 *
 * - Development: "" (empty) → Vite proxy handles /api → localhost:5000
 * - Production (S3 → EC2): full EC2 URL từ VITE_API_URL env var
 */
export const API_BASE_URL = import.meta.env.VITE_API_URL ?? "";

/**
 * Wrapper quanh fetch, tự động thêm API_BASE_URL prefix
 * Dùng thay cho fetch() trực tiếp trong toàn bộ app
 *
 * @example
 * // Thay: fetch("/api/auth/me")
 * // Bằng: apiFetch("/api/auth/me")
 */
export const apiFetch = (url: string, options?: RequestInit): Promise<Response> => {
    return fetch(`${API_BASE_URL}${url}`, options);
};

export default apiFetch;
