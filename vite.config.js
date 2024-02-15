import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { join } from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // 软链接
  resolve: {
    alias: {
      '@': join(__dirname, '/src')
    }
  },
  server: {
    proxy: {
      '/api': {
        // 代理所有 /api 的请求, 将被代理到 target 中
        target: 'https://api.imooc-front.lgdsunday.club/',
        // 开启跨域
        changeOrigin: true
      }
    }
  }
})
