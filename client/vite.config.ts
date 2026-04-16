import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
	plugins: [react()],

	base: "/", // bắt buộc cho EC2, tránh asset 404

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
		minify: "esbuild",
		assetsInlineLimit: 4096,
		sourcemap: false,
		rollupOptions: {
			output: {
				manualChunks: {
					vendor: ["react", "react-dom"],
					ui: ["@radix-ui/react-dialog", "@radix-ui/react-select", "@radix-ui/react-toast"],
					three: ["three", "@react-three/fiber", "@react-three/drei"],
					animation: ["framer-motion", "gsap", "aos"],
					charts: ["recharts"],
					icons: ["react-icons", "lucide-react"],
				},
			},
		},
	},

	// Tối ưu hóa dependencies — three chuyển vào include để tránh conflict với manualChunks
	optimizeDeps: {
		include: [
			"react",
			"react-dom",
			"react-router-dom",
			"@tanstack/react-query",
			"framer-motion",
			"three", // chuyển từ exclude → include
		],
	},

	esbuild: {
		target: "es2020",
	},
});
