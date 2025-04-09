import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import commonjs from '@rollup/plugin-commonjs';

// https://vite.dev/config/
export default defineConfig({
  base: ['rpn-demo'],
  plugins: [
    svelte(),
    commonjs()
  ],
  optimizeDeps: {
    include: ['rpn-ts']
  },
})
