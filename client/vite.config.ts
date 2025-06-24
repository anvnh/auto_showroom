import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
	server: {
		proxy: {
			"/api": {
				target: "http://localhost:5000",
				changeOrigin: true,
			},
		},
	},
	build: {
		outDir: "../dist",
		// Tối ưu hóa cho production
		rollupOptions: {
			output: {
				// Tách code thành chunks nhỏ hơn
				manualChunks: {
					vendor: ['react', 'react-dom'],
					ui: ['@radix-ui/react-dialog', '@radix-ui/react-select', '@radix-ui/react-toast'],
					three: ['three', '@react-three/fiber', '@react-three/drei'],
					animation: ['framer-motion', 'gsap', 'aos'],
					charts: ['recharts'],
					icons: ['react-icons', 'lucide-react'],
				},
			},
		},
		// Giảm kích thước bundle
		minify: 'esbuild',
		// Tối ưu hóa assets
		assetsInlineLimit: 4096,
		// Sử dụng sourcemap nhẹ hơn trong production
		sourcemap: false,
	},
	// Tối ưu hóa dependencies
	optimizeDeps: {
		include: [
			'react',
			'react-dom',
			'react-router-dom',
			'@tanstack/react-query',
			'framer-motion',
		],
		exclude: ['three'],
	},
	// Cải thiện hiệu xuất dev server
	esbuild: {
		target: 'es2020',
	},
});

