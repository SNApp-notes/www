import { defineConfig } from 'vite';
import { ViteMinifyPlugin } from 'vite-plugin-minify';

export default defineConfig({
  plugins: [
    ViteMinifyPlugin({})
  ],
  build: {
    // CSS minification is enabled by default in Vite
    cssMinify: true,
    minify: 'esbuild', // or 'terser' for more aggressive minification
  }
});
