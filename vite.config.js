import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  server: {
    host: true,
    watch: { usePolling: true },
  },
  base: "./",
  build: {
    outDir: 'docs', // Cambiado a 'docs' para GitHub Pages
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        js_ejercicio_1: resolve(__dirname, 'js_ejercicio_1.html'),
        js_ejercicio_2: resolve(__dirname, 'js_ejercicio_2.html'),
        js_ejercicio_3: resolve(__dirname, 'js_ejercicio_3.html'),
        js_ejercicio_4: resolve(__dirname, 'js_ejercicio_4.html'),
        js_ejercicio_5: resolve(__dirname, 'js_ejercicio_5.html'),
        js_ejercicio_6: resolve(__dirname, 'js_ejercicio_6.html'),
        js_ejercicio_7: resolve(__dirname, 'js_ejercicio_7.html'),
        js_ejercicio_8: resolve(__dirname, 'js_ejercicio_8.html'),
        js_ejercicio_9: resolve(__dirname, 'js_ejercicio_9.html'),
      },
    },
  },
});