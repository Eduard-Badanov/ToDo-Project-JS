import legacy from '@vitejs/plugin-legacy'
import { defineConfig } from 'vite'
import { ViteMinifyPlugin } from 'vite-plugin-minify'

export default defineConfig({
	plugins: [
		legacy({targets: ['defaults', 'not IE 11']}),
		ViteMinifyPlugin()
	],
	build: {
		outDir: 'dist',
		minify: 'esbuild',
		cssMinify: true,
		cssCodeSplit: true,
		assetsInlineLimit: 0,
		modulePreload: false,
		rollupOptions: {
			output: {
			  assetFileNames: (assetInfo) => {
				var info = assetInfo.name.split(".");
				var extType = info[info.length - 1];
				if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
				  extType = "images";
				} else if (/woff|woff2/.test(extType)) {
				  extType = "css";
				}
				return `${extType}/[name][extname]`;
			  },
			  chunkFileNames: "js/[name].js",
			  entryFileNames: "js/[name].js",
			},
		}
	}
})