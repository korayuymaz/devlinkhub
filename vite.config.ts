import path from 'node:path'
import tailwindcss from '@tailwindcss/vite'

import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import VueRouter from 'unplugin-vue-router/vite'

export default defineConfig({
  plugins: [vue(), tailwindcss(), VueRouter()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
