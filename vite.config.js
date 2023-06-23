import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), svgr()],
    css: {
        postcss: null,
        preprocessorOptions: {
            scss: {
                additionalData: `@import './src/scss/_variables.scss';`,
            },
        },
    },
});
