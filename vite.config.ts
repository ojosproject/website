import { resolve } from 'path';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, "public/index.html"),
        news: resolve(__dirname, "public/news/index.html"),
        news_join_us: resolve(__dirname, "public/news/join-us/index.html"),
        news_interviews: resolve(__dirname, "public/news/1706645600/index.html"),
        broken_join_us: resolve(__dirname, "public/join-us/index.html")
      }
    }
  }
})
